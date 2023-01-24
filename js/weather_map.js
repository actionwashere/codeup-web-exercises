$(document).ready(function (){


    mapboxgl.accessToken = keys.mapbox;
    let map = new mapboxgl.Map({
        container: 'map-here', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-118.2437 ,34.0522], // starting position [lng, lat]
        zoom: 10// starting zoom
    });

    // $(`#find-btn`).on(`click`, function (){
    //     let location = $(`#location`).val();
    //     let latitude;
    //     let longitude;
    //     geocode(location, keys.mapbox).then(function (data) {
    //         latitude = data[1];
    //         longitude = data[0];
    //         console.log(latitude, longitude);
    //         $.get('https://api.openweathermap.org/data/2.5/forecast', {
    //             lat: data[1],
    //             lon: data[0],
    //             appid: keys.openWeather,
    //             units: 'imperial'
    //         }).done(function (data) {
    //             console.log(data);
    //             $(`#current-city`).html(`Current City: ${data.city.name}`);
    //
    //
    //             for (let i = 0; i < data.length; i += 8) {
    //
    //             let html = '';
    //                 html += `<div class="card mt-5" id="forecast-card" style="width: 18rem;">
    //                 <img src="http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" class="card-img-top" alt="weather icon">
    //                 <div class="card-body">
    //                     <h6>${data.list[i].dt_txt}</h6>
    //                     <h5 class="card-title" id="weather-description">${data.list[i].weather[0].description}</h5>
    //                     <p class="card-text">${data.list[i].main.temp_min}&deg;F - ${data.list[i].main.temp_max}&deg;F</p>
    //                 </div>
    //                 <ul class="list-group list-group-flush">
    //                     <li class="list-group-item">An item</li>
    //                     <li class="list-group-item">A second item</li>
    //                     <li class="list-group-item">A third item</li>
    //                 </ul>
    //             </div>`
    //             }
    //
    //             $(`#current-weather`).html(html);
    //         });
    //     });
    // });


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
                $(`#current-city`).html(`Current City: <strong>${data.city.name}</strong>`);
                console.log(data.list);
                let html1 = '';
                let html2 = '';
                for (let i = 0; i < data.list.length; i += 8) {
                    console.log(data.list[i]);
                    let newDate = new Date(data.list[i].dt * 1000);
                    html2 += `<div class="card d-flex col-2 ms-2 mt-5">
                <div class="card-header d-flex justify-content-center">
                    ${newDate.toLocaleDateString(`en-us`, {weekday: 'short'})} - ${newDate.toLocaleDateString(`en-us`)}
                </div>
                <img src="http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" alt="weather-icon"/>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>${data.list[i].weather[0].description}</strong></li>
                    <li class="list-group-item">Temp: ${data.list[i].main.temp_min} - ${data.list[i].main.temp_max}</li>
                    <li class="list-group-item">Humidity: ${data.list[i].main.humidity}</li>
                    <li class="list-group-item">Wind Speed: ${data.list[i].wind.speed}</li>
                </ul>
            </div>`
                }

                console.log(location);

                html1 += `<div class="card" id="current-weather">
                <div class="card-header">
                    ${location}
                </div>
                <img src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" id="weather-icon" alt="weather-icon"/>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${data.list[0].weather[0].description}</li>
                    <li class="list-group-item">Date: ${data.list[0].dt_txt}</li>
                    <li class="list-group-item">Temp: ${data.list[0].main.temp}</li>
                    <li class="list-group-item">Humidity: ${data.list[0].main.humidity}</li>
                    <li class="list-group-item">Wind Speed: ${data.list[0].wind.speed}</li>
                </ul>
            </div>`


                // $(`#current-weather`).html(html1);
                $(`#current-weather`).html(html2);


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