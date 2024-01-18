Utils.check_permissions(feed_table);

function feed_table(){
    let table = document.getElementById('table-place'),
        url = '/api/places/';

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
        alert("Une erreur est survenue lors de la récupération des lieux");
        console.log(error)
    });
}

function create_line(element){
    let line = document.createElement('tr'),
        name = document.createElement('td'),
        address = document.createElement('td'),
        lat = document.createElement('td'),
        lng = document.createElement('td'),
        isHotel = document.createElement('td'),
        action = document.createElement('td');

    line.id = 'place_' + element.id;
    name.textContent = element.name;
    address.textContent = element.address;
    lat.textContent = element.latitude;
    lng.textContent = element.longitude;
    isHotel.textContent = element.isHotel ? 'Oui' : 'Non';
    let btns = Utils.create_action_btn(element, update_place, delete_place);
    action.appendChild(btns[0]);
    action.appendChild(btns[1]);
    line.appendChild(name);
    line.appendChild(address);
    line.appendChild(lat);
    line.appendChild(lng);
    line.appendChild(isHotel);
    line.appendChild(action);
    return line;
}

function create_place(id){
    let token = Utils.get_access_token();
    let name = document.getElementById('place_name').value,
        address = document.getElementById('place_address').value,
        lat = document.getElementById('place_lat').value,
        lng = document.getElementById('place_lng').value,
        isHotel = document.getElementById('place_isHotel').checked,
        url = '/api/places/',
        options = {
            method: id === undefined ? 'POST' : 'PUT',
            body: JSON.stringify({"name": name, "address": address, "latitude": lat, "longitude": lng,
                "isHotel": isHotel}),
            headers: new Headers({
                "Content-Type": "application/json",
                "authorization": "Bearer " + token // localStorage.getItem("token")
            })
        };
    if (id) url += id;
    fetch(url, options).then(function(response){
        if(response.status !== 201 && response.status !== 200){
            throw Error(response.statusText);
        } else return response.json();
    }).then(function(data){
        let table = document.getElementById('table-place');
        let line = create_line(data);
        if (id) {
            document.getElementById('place_' + id).replaceWith(line);
            document.getElementById('save_place').onclick = function(){create_place()}
        }
        else table.appendChild(line);
        $('#modal-1').modal('hide');
    }).catch(function(error) {
        alert("Une erreur est survenue lors de l'enregistrement du lieu");
        console.log(error)
    });
}

function update_place(id){
    let token = Utils.get_access_token();
    let url = '/api/places/' + id;
    fetch(url).then(function(response){
        if(response.status !== 200){
            throw Error(response.statusText);
        } else return response.json();
    }).then(function(data){
        $('#modal-1').modal('show');
        document.getElementById('place_name').value = data.name;
        document.getElementById('place_address').value = data.address;
        document.getElementById('place_lat').value = data.latitude;
        document.getElementById('place_lng').value = data.longitude;
        document.getElementById('place_isHotel').checked = data.isHotel;
        document.getElementById('save_place').onclick = function(){create_place(data.id)};
    }).catch(function(error) {
        alert("Une erreur est survenue lors de l'enregistrement du lieu");
        console.log(error)
    });
}

function delete_place(id){
    if(!confirm('Voulez-vous vraiment supprimer ce lieu ? - Attention cela supprime aussi les confrontations et les scores associés')) return;
    let token = Utils.get_access_token();
    fetch('/api/places/' + id, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token
        }
    }).then(function(response){
        if(response.status !== 204){
            throw Error(response.statusText);
        } else return;
    }).then(function(){
        document.getElementById('place_' + id).remove();
    }).catch(function(error) {
        alert("Une erreur est survenue lors de la suppression du lieu");
        console.log(error)
    });
}

$('#modal-1').on('hidden.bs.modal', function (e) {
    document.getElementById('place_name').value = '';
    document.getElementById('place_address').value = '';
    document.getElementById('place_lat').value = '';
    document.getElementById('place_lng').value = '';
    document.getElementById('save_place').onclick = function(){create_place()}
});