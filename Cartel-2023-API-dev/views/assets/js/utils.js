Utils = (function () {

    function create_action_btn(element, update_cb, delete_cb) {
        let a_update = document.createElement('a'),
            a_delete = document.createElement('a'),
            i_update = document.createElement('i'),
            i_delete = document.createElement('i');
        if (update_cb !== undefined) {
            a_update.className = 'btn btnMaterial btn-flat success semicircle';
            a_update.href = '#';
            a_update.style.color = 'rgb(0,197,179)';
            i_update.className = 'fas fa-pen';
            a_update.appendChild(i_update);
            a_update.onclick = function(){update_cb(element.id)};
        }
        a_delete.className = 'btn btnMaterial btn-flat accent btnNoBorders checkboxHover';
        a_delete.href = '#';
        a_delete.style.marginLeft = '5px';
        i_delete.className = 'fas fa-trash btnNoBorders';
        i_delete.style.color = '#DC3545';
        a_delete.appendChild(i_delete);
        a_delete.onclick = function(){delete_cb(element.id)};
        return [a_update, a_delete];
    }

    function create_event_line(element, update_cb, delete_cb) {
        let line = document.createElement('tr'),
            name = document.createElement('td'),
            sport = document.createElement('td'),
            date = document.createElement('td'),
            place = document.createElement('td'),
            participants = document.createElement('td'),
            action = document.createElement('td'),
            finished = document.createElement('td'),
            btns = Utils.create_action_btn(element, update_cb, delete_cb),
            url = '/api/places/' + element.placeId;

        fetch(url).then(function(response){
            if(response.status !== 200){
                throw Error(response.statusText);
            } else return response.json();
        }).then(function(data){
            place.textContent = data.name;
        }).catch(error => console.log(error));

        line.id = 'event_' + element.id;
        name.textContent = element.name;
        sport.textContent = element.sport;
        date.textContent = new Date(element.date).toLocaleDateString() + ' ' +
            element.date.split('T')[1].split(':')[0] + ':' + element.date.split('T')[1].split(':')[1];
        if (element.teams.length === 2){
            participants.textContent = element.teams[0].school.name.toString() + ' vs ' + element.teams[1].school.name.toString();
        }
        else participants.textContent = element.teams.length.toString();
        finished.textContent = element.finished ? 'Oui' : 'Non';
        line.appendChild(name);
        line.appendChild(date);
        line.appendChild(sport);
        line.appendChild(place);
        line.appendChild(participants);
        line.appendChild(finished);
        action.appendChild(btns[0]);
        if (delete_cb) action.appendChild(btns[1]);
        line.appendChild(action);
        return line;
    }

    function check_permissions(next){
        let groups = get_groups();
        if (!groups) {
            alert("Vous n'avez pas les droits pour accéder à cette page ou votre session a expiré." +
                " Veuillez vous authentifier.");
            window.location.href = "/";
            return;
        }
        // if admin all rights
        if (groups.indexOf("admin_cartel") !== -1) {
            if (next !== undefined) next();
            return;
        }
        // if benevole and on score --> ok
        if (groups.indexOf("benevole_cartel") !== -1 && window.location.href.includes("score")) {
            if (next !== undefined) next();
            return;
        }
        // else redirect to home
        alert("Vous n'avez pas les droits pour accéder à cette page ou votre session a expiré." +
            " Veuillez vous authentifier.");
        window.location.href = "/";
    }

    function get_access_token(){
        let token = localStorage.getItem("token"),
            expiration_date = localStorage.getItem("expiration_date");
        if (!token || !expiration_date || new Date() > new Date(expiration_date) ) {
            window.location.href = "/auth/authorize";
        }
        return token;
    }

    function get_groups(){
        let groups = JSON.parse(localStorage.getItem("groups")),
            expiration_date = localStorage.getItem("expiration_date");
        if (!groups || !expiration_date || new Date() > new Date(expiration_date) ) {
            return null;
        }
        return groups;
    }

    function extract_access_token(){
        let url = window.location.href;
        if (url.split("#").length < 2 || url.includes("access") === false) return;
        let access_token = url.split("#")[1].split("&")[0].split("=")[1],
            expires_in = url.split("#")[1].split("&")[3].split("=")[1],
            state = url.split("#")[1].split("&")[4].split("=")[1],
            expiration_date = new Date();
        expiration_date.setSeconds(expiration_date.getSeconds() + parseInt(expires_in));
        localStorage.setItem("token", access_token);
        localStorage.setItem("expiration_date", expiration_date.toString());
        // get user info
        fetch("/auth/userinfo", {
            method: 'GET',
            headers: new Headers({
                "Content-Type": "application/json",
                "authorization": "Bearer " + access_token
            })
        }).then(function(response){
            if(response.status !== 200){
                throw Error(response.statusText);
            } else return response.json();
        }).then(function(data){
            const groups = data.groups;
            console.log(data);
            const email = data.email;
            localStorage.setItem("groups", JSON.stringify(groups));
            localStorage.setItem("email", email);
        }).catch(error => console.log(error));
        // console.log("access_token :", access_token);
        // console.log("expires_in :", expires_in);
    }

    function filter_table(table_name){
        let table = document.getElementById('table-' + table_name),
            sport = document.getElementById('filter_sport').value,
            event_date,
            // place = document.getElementById('filter_place').value,
            date_start = document.getElementById('filter_date_start').value,
            date_end = document.getElementById('filter_date_end').value;

        for (const row of table.rows){
            row.style.display = ''; // show rows hidden by previous filters
            if (sport && row.cells[2].innerHTML !== sport) row.style.display = 'none';
            event_date = row.cells[1].innerHTML;
            event_date = event_date.split(' ')[0]; // remove time
            let splitted = event_date.split('/');
            event_date = splitted[2] + '-' + splitted[1] + '-' + splitted[0];
            event_date = new Date(event_date);
            if (date_start && event_date < new Date(date_start)) row.style.display = 'none';
            if (date_end && event_date > new Date(date_end)) row.style.display = 'none';
        }
    }

    function reinit_filters(table_name){
        document.getElementById('filter_sport').value = '';
        document.getElementById('filter_date_start').value = '';
        document.getElementById('filter_date_end').value = '';
        filter_table(table_name);
    }

    return {
        create_action_btn: create_action_btn,
        create_event_line: create_event_line,
        check_permissions: check_permissions,
        get_access_token: get_access_token,
        extract_access_token: extract_access_token,
        filter_table: filter_table,
        reinit_filters: reinit_filters
    }
})();