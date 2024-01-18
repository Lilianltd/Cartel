Utils.check_permissions(feed_table);

function feed_table(){
    let table = document.getElementById('table-school'),
        url = '/api/schools/';

    fetch(url).then(function(response){
        if(response.status !== 200){
            throw Error(response.statusText);
        } else return response.json();

    }).then(function(data){
        for(const element of data){
            let line = create_line(element);
            table.appendChild(line);
        }
    }).catch(function(error) {
        alert("Une erreur est survenue lors de la récupération des écoles");
        console.log(error)
    });
}

function create_line(element){
    let line = document.createElement('tr'),
        name = document.createElement('td'),
        teams = document.createElement('td'),
        action = document.createElement('td'),
        btns = Utils.create_action_btn(element, update_school, delete_school);


    line.id = 'school_' + element.id;
    name.innerText = element.name;
    fetch('/api/teams/school/' + element.id).then(function(response){
        if(response.status !== 200){
            throw Error(response.statusText);
        } else return response.json();
    }).then(function(data){
        teams.innerText = data.length.toString();
    }).catch(function(error) {
        alert("Une erreur est survenue lors de la récupération des équipes de l'école");
        console.log(error);
    });
    action.appendChild(btns[0]);
    action.appendChild(btns[1]);
    line.appendChild(name);
    line.appendChild(teams);
    line.appendChild(action);
    return line;
}

function create_team_line(element){
    if (element.sport === undefined) return document.createElement('div');
    let line = document.createElement('div'), p = document.createElement('p'),
        a = Utils.create_action_btn(null, null, null)[1];
    p.classList.add('chosen_team', 'team_' + element.id);
    p.innerText = element.sport + '-' + element.name;
    line.appendChild(p);
    a.onclick = function(){remove_team(element.id, this)};
    p.appendChild(a);
    return line;
}

function add_team(){
    let container = document.getElementById('selected_teams'),
        select = document.getElementById('team_sport'), sport = '0',
        name = document.getElementById('team_name'), line;
    if (select) sport = select.options[select.selectedIndex].value;
    if(sport === '0') return;
    line = create_team_line({id: 0, sport: sport, name: name.value});
    container.appendChild(line);
}

function remove_team(id, element){
    if (id === 0){
        element.parentNode.remove();
        return;
    }
    if (!confirm("Attention l'équipe sera également supprimée en base de données. Continuer ?")) return;
    let token = Utils.get_access_token();
    element.parentNode.remove();
    fetch('/api/teams/' + id, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    }).then(function(response){
        if(response.status !== 204){
            throw Error(response.statusText);
        } else return;
    }).then(function(data){

    }).catch(function(error) {
        alert("Une erreur est survenue lors de la suppression de l'équipe");
        console.log(error)
    });
}

function add_school(){
    let token = Utils.get_access_token();
    document.getElementById('school_name').value = '';
    document.getElementById('save_school').onclick = function(){create_school()};
    // remove all teams
    let team_container = document.querySelector('#selected_teams'),
        teams = team_container.querySelectorAll('.chosen_team');
    for (const element of teams){
        element.remove();
    }
    $('#modal-1').modal('show');
}

function create_school(id){
    let token = Utils.get_access_token();
    let name_input = document.getElementById('school_name'), name = name_input.value,
        team_container = document.querySelector('#selected_teams'),
        teams = team_container.querySelectorAll('.chosen_team'),
        teams_list = [],
        url = '/api/schools/',
        opt = {
            method: id === undefined ? 'POST' : 'PUT',
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            })
        };
    for (const team of teams){
        if (!team.classList.contains('team_0')) continue;
        let sport = team.innerText.split('-')[0],
            name = team.innerText.split('-')[1].split('X')[0];
        teams_list.push({sport: sport, name: name});
    }
    opt.body = JSON.stringify({name: name, teams: teams_list});
    if(id) url += id;
    fetch(url, opt).then(function(response){
        if(response.status !== 201 && response.status !== 200){
            throw Error(response.statusText);
        } else return response.json();
    }).then(function(data){
        let table = document.getElementById('table-school');
        let line = create_line(data);
        if (id) {
            document.getElementById('school_' + id).replaceWith(line);
            document.getElementById('save_school').onclick = function(){update_school(id)};
        }
        else table.appendChild(line);
        // empty form
        for (const element of teams){
            element.remove();
        }
        name_input.value = '';
        let select = document.getElementById('team_sport');
        if (select) select.selectedIndex = 0;
        document.getElementById('team_name').value = '';
        $('#modal-1').modal('hide');
    }).catch(function(error) {
        alert("Une erreur est survenue lors de l'enregistrement de l'école");
        console.log(error)
    });
}

function update_school(id){
    let token = Utils.get_access_token();
    fetch('/api/schools/' + id).then(function(response){
        if(response.status !== 200){
            throw Error(response.statusText);
        } else return response.json();
    }).then(function(data){
        document.getElementById('school_name').value = data.name;
        document.getElementById('save_school').onclick = function(){create_school(id)};
        let team_container = document.querySelector('#selected_teams'),
            url = '/api/teams/school/' + id;
        // remove all teams
        let teams = team_container.querySelectorAll('.chosen_team');
        for (const element of teams){
            element.remove();
        }
        // get teams of school
        fetch(url, {method: 'GET'}).then(function(response){
            if(response.status !== 200){
                throw Error(response.statusText);
            } else return response.json();
        }).then(function(data){
            for (let elem in data){
                elem = data[elem];
                if (elem === undefined) continue;
                let line = create_team_line(elem);
                team_container.appendChild(line);
            }
        }).catch(function(error) {
            alert("Une erreur est survenue lors de la récupération des équipes de l'école");
            console.log(error);
        });
        $('#modal-1').modal('show');
    }).catch(function(error) {
        alert("Une erreur est survenue lors de l'enregistrement de l'école");
        console.log(error)
    });
}

function delete_school(id){
    if(!confirm('Voulez-vous vraiment supprimer cette école ? - Attention cela supprime aussi les équpes, les confrontations et les scores associés')) return;
    let token = Utils.get_access_token();
    fetch('/api/schools/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }).then(function(response){
        if(response.status !== 204){
            throw Error(response.statusText);
        } else return;
    }).then(function(data){
        document.getElementById('school_' + id).remove();
    }).catch(function(error) {
        alert("Une erreur est survenue lors de la suppression de l'école");
        console.log(error)
    });
}