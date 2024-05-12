function initMap() {
    var ukraine = {
        lat: 48.3794,
        lng: 31.1656
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: ukraine,
        disableDefaultUI: true,

        styles: [{
            "stylers": [{
                "hue": "#808080"
            }, {
                "saturation": -100
            }]
        }]
    });

    var marker = new google.maps.Marker({
        position: ukraine,
        map: map
    });

    var infoWindow = new google.maps.InfoWindow({
        content: 'Тут може бути ваш контент'
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });




}