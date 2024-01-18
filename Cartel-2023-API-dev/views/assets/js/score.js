Utils.check_permissions(feed_table);
// if is mobile device
if (window.matchMedia("(max-width: 768px)").matches) {
    document.getElementById('filter_div').style.flexDirection = 'column';
}
else {
    document.getElementById('filter_div').style.flexDirection = 'row';
}

function feed_table(){
    let table = document.getElementById('table-score'),
        url = '/api/events/';

    fetch(url).then(function(response){
        if(response.status !== 200){
            throw Error(response.statusText);
        } else return response.json();
    }).then(function(data){
        for(const element of data){
            let line = Utils.create_event_line(element, update_score, null);
            table.appendChild(line);
        }
    }).catch(function(error) {
        console.log(error);
        alert('Une erreur est survenue lors de la récupération des confrontations');
    });
}

function create_score_line(element){
    let line = document.createElement('tr'),
        name = document.createElement('td'),
        score = document.createElement('td'),
        input = document.createElement('input');
    line.id = 'score_' + element.id;
    if (element.team.name.length > 1) name.innerHTML = element.team.name;
    else name.innerHTML = element.team.school.name;
    name.id = 'team_' + element.team.id;
    input.type = 'number';
    input.value = element.value;
    input.classList.add('form-control');
    score.appendChild(input);
    line.appendChild(name);
    line.appendChild(score);
    return line;
}

function update_score(event_id){
    let token = Utils.get_access_token();
    let url = '/api/scores/event/' + event_id;
    fetch(url).then(function(response){
        if(response.status !== 200){
            throw Error(response.statusText);
        } else return response.json();
    }).then(function(data){
        let table = document.getElementById('table_score');
        for (const element of data) {
            let line = create_score_line(element);
            table.appendChild(line);
        }
        // get event
        fetch('/api/events/' + event_id).then(function(response){
            if(response.status !== 200){
                throw Error(response.statusText);
            } else return response.json();
        }).then(function(data){
            document.getElementById('finished_event').checked = data.finished;
        }).catch(function(error) {
            console.log(error);
            alert('Une erreur est survenue lors de la récupération de la confrontation');
        });
    }).catch(function (error) {
        console.log(error);
        alert('Une erreur est survenue lors de la récupération des scores');
    });
    $('#modal-1').modal('show');
    document.getElementById('btn_save_score').onclick = function(){save_score(event_id)};
}

function save_score(id){
    let token = Utils.get_access_token();
    let table = document.getElementById('table_score'), url,
        data = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token
            }
        };
    for (const element of table.children) {
        let score = {
            eventId: id,
            finished: document.getElementById('finished_event').checked,
            teamId: document.getElementById('score_' + element.id.split('_')[1]).children[0].id.split('_')[1],
            value: document.getElementById('score_' + element.id.split('_')[1]).children[1].children[0].value
        };
        url = '/api/scores/' + element.id.split('_')[1];
        data.body = JSON.stringify(score);
        fetch(url, data).then(function(response){
            if(response.status !== 201){
                throw Error(response.statusText);
            } else return;
        }).catch(function (error) {
            console.log(error);
            alert('Une erreur est survenue lors de la sauvegarde des scores');
        });
    }
    $('#modal-1').modal('hide');
}

$('#modal-1').on('hidden.bs.modal', function (e) {
    let table = document.getElementById('table_score');
    while(table.firstChild){
        table.removeChild(table.firstChild);
    }
});