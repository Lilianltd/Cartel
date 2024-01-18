function get_weather(){
    let insee = document.getElementById('insee').value,
        date = document.getElementById('date').value,
        hour = document.getElementById('hour').value,
        gap = day_gap(new Date(), new Date(date)) + 1,
        url = '/api/weather/' + insee + '/' + gap + '/' + hour.split(':')[0];

    fetch(url).then(function(response){
        if(response.status !== 200){
            throw Error(response.statusText);
        } else return response.json();

    }).then(function(data){
        display_image(data['weather'], data['city']);
    }).catch(error => console.log(error));
}


function day_gap(first, second){
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

function display_image(weather, city){
    let image = document.getElementById('weather_img');
    document.getElementById('city_name').innerText = "Météo de " + city + " le "
        + document.getElementById('date').value + " à " + document.getElementById('hour').value;
    if (weather === 0){
        image.src = 'assets/img/sunny.jpeg';
    } else if (weather === 1){
        image.src = 'assets/img/cloudy.jpeg';
    } else {
        image.src = 'assets/img/rainy.jpeg';
    }
}