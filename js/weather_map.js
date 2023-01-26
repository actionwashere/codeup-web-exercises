$(document).ready(function (){


    mapboxgl.accessToken = keys.mapbox;
    let map = new mapboxgl.Map({
        container: 'map-here', // container ID
        style: 'mapbox://styles/aharownjackson/cldatdi56001901s1fzg583pf', // style URL
        center: [-118.2437 ,34.0522], // starting position [lng, lat]
        zoom: 10// starting zoom
    });

    let currentMarker = []; // Array that stores current markers on the map

    $(`#search-btn`).on(`click`, function (e) {
        e.preventDefault();

        if (currentMarker !== null) { // checks to see if there are any markers on the map and removes them
            for (let i = currentMarker.length - 1; i >= 0; i--) {
                currentMarker[i].remove();
            }
        }

        let location = $(`#search-bar`).val(); // location entered into search bar

        geocode(location, keys.mapbox).then(function (data) { // changes location address into lon, lat using geocoder mapbox
            $.get('https://api.openweathermap.org/data/2.5/forecast', { // calls openWeather API for weather location based on lon, lat from geocoder
                lat: data[1],
                lon: data[0],
                appid: keys.openWeather,
                units: 'imperial'
            }).done(function (data) { // return of openWeather API data
                $(`#current-city`).html(`Current City: <strong class="kavoon-font">${data.city.name}</strong>`); // updates current city
                console.log(data.list);
                let html = ''; // empty string declared to add html
                for (let i = 0; i < data.list.length; i += 8) { // loops through weather data and adds html to html string
                    console.log(data.list[i]);
                    let newDate = new Date(data.list[i].dt * 1000); // converts dt into readable data and stores in variable newDate
                    html += `<div class="card d-flex col-2 ms-2 mt-5 item-border" id="weather-card">
                <div class="card-header d-flex justify-content-center">
                    ${newDate.toLocaleDateString(`en-us`, {weekday: 'short'})} - ${newDate.toLocaleDateString(`en-us`)}
                </div>
                <img src="http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" alt="weather-icon" id="weather-icon"/>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong class="dodgerBlueColor">${data.list[i].weather[0].description}</strong></li>
                    <li class="list-group-item">${data.list[i].main.temp_min}&deg;F - ${data.list[i].main.temp_max}&deg;F</li>
                    <li class="list-group-item">Humidity: ${data.list[i].main.humidity}</li>
                    <li class="list-group-item">Wind: ${data.list[i].wind.speed}</li>
                    <li class="list-group-item">Pressure: ${data.list[i].main.pressure}</li>
                </ul>
            </div>`
                } // end of html writing
                $(`#current-weather`).html(html); // writes html into page
                $(`#weather-card`).fadeIn(3000) // supposed to fade in the weather cards but not working properly
                $(`#welcome-message`).html(`<span class="kavoon-font"> ${data.city.name}</span>`) // adds city name to top of page
            }).fail(function (jqXhr, status, error) { // in case we messed up bad
                console.log(jqXhr);
                console.log(status);
                console.log(error);
            });

            map.flyTo({ // centers map on new location
                center: data
            });

            let newMarker = new mapboxgl.Marker().setLngLat(data).addTo(map); // adds new marker to map
            currentMarker.push(newMarker); // pushes new marker to currentMarker array
            console.log(currentMarker);



        });
    });

    // currentMarker.on(`dragend`, drag) // supposed to allow the current marker to be draggable
    //
    // function drag(){ // supposed to center the map where user drops the marker
    //     let lnglat = currentMarker.getLngLat();
    //     console.log(lnglat)
    //
    //     map.flyTo({
    //         center: [lnglat.lng, lnglat.lat],
    //         essential: true
    //     })
});