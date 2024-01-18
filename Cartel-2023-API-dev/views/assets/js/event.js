Utils.check_permissions(feed_table);
// if is mobile device
if (window.matchMedia("(max-width: 768px)").matches) {
    document.getElementById('filter_div').style.flexDirection = 'column';
}
else {
    document.getElementById('filter_div').style.flexDirection = 'row';
}

function feed_table(){
    let table = document.getElementById('table-event'),
        url = '/api/events/';

    fetch(url).then(function(response){
        if(response.status !== 200){
            throw Error(response.statusText);
        } else return response.json();
    }).then(function(data){
        for(const element of data){
            let line = Utils.create_event_line(element, update_event, delete_event);
            table.appendChild(line);
        }
    }).catch(function(error) {
        alert("Une erreur est survenue lors de la récupération des confrontations");
        console.log(error)
    });
}

function set_select_2(sport, values){
    let select = $('#event_teamId');
    select.empty();
    // get teams
    let url = '/api/teams/sport/' + sport;
    fetch(url).then(function(response){
        if(response.status !== 200){
            throw Error(response.statusText);
        } else return response.json();
    }).then(function(data){
        let select_data = [];
        for (const team of data){
            select_data.push({id: team.id, text: team.school.name + '-' + team.name});
        }
        select.select2({
            data: select_data,
            dropdownParent: $('#modal-1')
        });
        if (values !== null) select.val(values).trigger('change');
    }).catch(function(error) {
        alert("Une erreur est survenue lors de la récupération des équipes");
        console.log(error)
    });
}

function feed_modal(){
    let token = Utils.get_access_token();
    // feed places
    fetch('/api/places/only/events').then(function(response){
        if(response.status !== 200){
            throw Error(response.statusText);
        } else return response.json();
    }).then(function(data){
        //remove all childs of event_placeId
        let select = document.getElementById('event_placeId');
        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }
        for(const element of data){
            let option = document.createElement('option');
            option.value = element.id;
            option.textContent = element.name;
            document.getElementById('event_placeId').appendChild(option);
        }
    }).catch(function(error) {
        alert("Une erreur est survenue lors de la récupération des lieux");
        console.log(error)
    });

    let sport_select = document.getElementById('event_sport');
    sport_select.onchange = function(){
        // get selected sport text
        set_select_2(sport_select.options[sport_select.selectedIndex].text, null);
    }
}

function create_event(id){
    let token = Utils.get_access_token();
    let sport = document.getElementById('event_sport').value,
        placeId = document.getElementById('event_placeId').value,
        date = document.getElementById('event_date').value,
        hour = document.getElementById('event_time').value,
        finished = document.getElementById('event_finished').checked,
        name = document.getElementById('event_name').value,
        select_2 = $('#event_teamId'),
        teams_data = [],
        url = '/api/events/';
    if (hour.split(':').length === 2){
        hour += ':00';
    }
    teams_data = select_2.val();
    if (id) url += id;
    fetch(url, {
        method: id === undefined ? 'POST' : 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        // date format is YYYY-MM-DDTHH:MM:SS
        body: JSON.stringify({
            name: name, sport: sport, placeId: placeId, date: date + 'T' + hour + 'Z',
            finished: finished, teams: teams_data
        })
    }).then(function(response){
        if(response.status !== 201 && response.status !== 200){
            throw Error(response.statusText);
        } else return response.json();
    }).then(function(data){
        data.teams = teams_data;
        let line = Utils.create_event_line(data, update_event, delete_event);
        if (id) {
            document.getElementById('event_' + id).replaceWith(line);
        }
        else document.getElementById('table-event').appendChild(line);
        $('#modal-1').modal('hide');
    }).catch(function(error) {
        alert("Une erreur est survenue lors de l'enregistrement de la confrontation");
        console.log(error)
    });
}

function update_event(id){
    let token = Utils.get_access_token();
    let sport = document.getElementById('event_sport'),
        placeId = document.getElementById('event_placeId'),
        date = document.getElementById('event_date'),
        time = document.getElementById('event_time'),
        finished = document.getElementById('event_finished'),
        name = document.getElementById('event_name'),
        url = '/api/events/' + id;
    feed_modal();
    fetch(url).then(function(response){
        if(response.status !== 200){
            throw Error(response.statusText);
        } else return response.json();
    }).then(function(data){
        sport.value = data.sport;
        let select_values = [];
        for (const team of data.teams){
            select_values.push(team.id);
        }
        set_select_2(data.sport, select_values);
        date.value = new Date(data.date).toISOString().substring(0,10);
        time.value = data.date.split('T')[1].split(':')[0] + ':' + data.date.split('T')[1].split(':')[1];
        finished.checked = data.finished;
        name.value = data.name;
        document.getElementById('save_event').onclick = function(){
            create_event(id);
        }
        $('#modal-1').modal('show');
        placeId.value = data.placeId;
    }).catch(function(error) {
        alert("Une erreur est survenue lors de la récupération de la confrontation");
        console.log(error)
    });
}

function delete_event(id){
    if (!confirm("Voulez-vous vraiment supprimer cette confrontation ? - Attention, cela supprime également les scores associés")) return;
    let token = Utils.get_access_token();
    let url = '/api/events/' + id,
        data = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        };
    fetch(url, data).then(function (response) {
        if (response.status !== 204) {
            throw Error(response.statusText);
        } else return;
    }).then(function (data) {
        document.getElementById('event_' + id).remove();
    }).catch(function (error) {
        alert("Une erreur est survenue lors de l'enregistrement de la confrontation");
        console.log(error)
    });
}


$('#modal-1').on('hidden.bs.modal', function (e) {
    document.getElementById('event_sport').value = "";
    document.getElementById('event_placeId').value = "";
    document.getElementById('event_date').value = "";
    document.getElementById('event_time').value = "";
    document.getElementById('event_finished').checked = false;
    document.getElementById('event_name').value = "";
    document.getElementById('save_event').onclick = function(){
        create_event();
    }
    let select2 = $('#event_teamId');
    select2.val(null).trigger('change');
    select2.empty();
});