function initMap() {

  var krakow = {lat: 50.0647, lng: 19.9450};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: krakow,
    disableDefaultUI: true,
    styles: [
      {
        "featureType": "administrative",
        "elementType": "labels.text",
        "stylers": [
          {
            "color": "#126085"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#1ea0df"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#0c4058"
          }
        ]
      },
      {
        "featureType": "landscape",
        "stylers": [
          {
            "color": "#4b4b4b"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "stylers": [
          {
            "color": "#a3a3a3"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ] /* End of custom map styles */
  });

  var marker = new google.maps.Marker({
    icon: 'http://maps.google.com/mapfiles/ms/micons/blue-dot.png',
    position: krakow,
    map: map
  });


}
