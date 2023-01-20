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

            });
        });
                // marker.setPopup($restaurants)


    });

    // $restaurants.each(function(restaurant){
    //
    // });

    //
    // geocode("204 Alamo Plaza, San Antonio, TX 78205", keys.mapbox).then(function(location){
    // let marker = new mapboxgl.Marker()
    //     .setLngLat(location)
    //     .addTo(map);
    // let teddyRooPopup = new mapboxgl.Popup()
    //     .setHTML("<p>Teddy Roosevelt shot a hole in this bar! - circa 19TEDDYFUCKINGROO</p>")
    //     map.setCenter(location);
    //     map.setZoom(15);
    //
    //
    // marker.setPopup(teddyRooPopup)
    //
    // });

    // teddyRoo.then(function(result) {
    //     console.log(result);
    //     map.setCenter(result);
    //     map.setZoom(15);
    // });


});