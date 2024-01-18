Utils.check_permissions(feed_table);

function feed_table() {
    let table = document.getElementById('table-log'),
        url = '/api/logs/';

    fetch(url, {
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": "Bearer " + Utils.get_access_token()
        })
    }).then(function (response) {
        if (response.status !== 200) {
            throw Error(response.statusText);
        } else return response.json();
    }).then(function (data) {
        for (const element of data) {
            let line = create_line(element);
            table.appendChild(line);
        }
    }).catch(function (error) {
        alert("Une erreur est survenue lors de la récupération de l'historique");
        console.log(error)
    });
}

function create_line(log){
    let line = document.createElement('tr'),
        user = document.createElement('td'),
        date = document.createElement('td'),
        url = document.createElement('td'),
        action = document.createElement('td'),
        data = document.createElement('td');

    user.textContent = log.user;
    date.textContent = log.date;
    url.textContent = log.url;
    action.textContent = log.action;
    data.textContent = log.data;
    line.appendChild(user);
    line.appendChild(date);
    line.appendChild(url);
    line.appendChild(action);
    line.appendChild(data);
    return line;
}