$(document).ready(function () {


    mapboxgl.accessToken = keys.mapbox;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [-98.4916, 29.4252]
    });

    let $restaurants = $.get(`./data/restaurants.json`).done(function (data) {
        console.log(data);
        data.forEach(function (restaurant) {
            console.log(restaurant.address)
            geocode(restaurant.address, keys.mapbox).then(function (data) {
                console.log(data)
                let marker = new mapboxgl.Marker()
                    .setLngLat(data)
                    .addTo(map);
                let Popup = new mapboxgl.Popup()
                    .setHTML("<p>`${restaurant.name} is an awesome bar`</p>")
                map.setCenter(data);
                map.setZoom(15);

                marker.setPopup($restaurants)
            });
        });


    });



});