$(document).ready(function () {

    mapboxgl.accessToken = keys.mapbox;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [-98.4916, 29.4252]
    });

    $(`#search-btn`).on(`click`, function (e) {
        e.preventDefault();
        let location = $(`#search-bar`).val();
        geocode(location, keys.mapbox).then(function (data) {
            $.get('https://api.openweathermap.org/data/2.5/forecast', {
                lat: data[1],
                lon: data[0],
                appid: keys.openWeather,
                units: 'imperial'
            }).done(function (data) {
                console.log(data.list);
                let html1 = '';
                let html2 = '';
                for (let i = 0; i < data.list.length; i += 8) {
                    console.log(data.list[i]);
                    html2 += `<div class="card col-2">
                <div class="card-header">
                    ${location}
                </div>
                <img src="http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" alt="weather-icon"/>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${data.list[i].weather[0].description}</li>
                    <li class="list-group-item">Date: ${data.list[i].dt_txt}</li>
                    <li class="list-group-item">Temp: ${data.list[i].main.temp}</li>
                    <li class="list-group-item">Humidity: ${data.list[i].main.humidity}</li>
                    <li class="list-group-item">Wind Speed: ${data.list[i].wind.speed}</li>
                </ul>
            </div>`
                }

                console.log(location);

                html1 += `<div class="card ms-3" id="current-weather">
                <div class="card-header">
                    ${location}
                </div>
                <img src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="weather-icon"/>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${data.list[0].weather[0].description}</li>
                    <li class="list-group-item">Date: ${data.list[0].dt_txt}</li>
                    <li class="list-group-item">Temp: ${data.list[0].main.temp}</li>
                    <li class="list-group-item">Humidity: ${data.list[0].main.humidity}</li>
                    <li class="list-group-item">Wind Speed: ${data.list[0].wind.speed}</li>
                </ul>
            </div>`


                $(`#current-weather`).html(html1);
                $(`#forecast-container`).addClass(`forecast-container`);
                $(`#5-day-forecast`).html(html2);


            }).fail(function (jqXhr, status, error) {
                console.log(jqXhr);
                console.log(status);
                console.log(error);


            });

            map.flyTo({
                center: data

            });


        });

    });
});