const map = {
    styles : [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ],
    scale : 16,
    start : {},
    user : null,
    marker : [
        {position : {lat:1.382702, lng:103.856895}, bin : "ITE"},
        {position : {lat : 1.379579, lng : 103.849102}, bin : "Nanyang Poly"}
    ],
    _g_marker : [],
    image : {},
    init(){
        this.image = [{
            url : "image/svg/marker.svg",
            size : new google.maps.Size(33,46),
            origin : new google.maps.Point(0,0),
            anchor : new google.maps.Point(0,32)
        },{
            url : "image/svg/user.svg",
            size : new google.maps.Size(33,46),
            origin : new google.maps.Point(0,0),
            anchor : new google.maps.Point(0,32)
        }];

        if(!this.g_map){
          // alert("ETEST");
            this.g_map = new google.maps.Map($("#map")[0], {
                zoom : this.scale,
                center : this.start || {lat:0,lng:0},
                styles : this.styles
            });

            for(let i = 0; i < this.marker.length; i++){
                let marker = new google.maps.Marker({
                    ...this.marker[i], 
                    map : this.g_map,
                    icon : this.image[0]
                }),
                info = new google.maps.InfoWindow({content:`<strong>${marker.bin}</strong>`});

                this._g_marker.push({marker:marker, info : info});
                marker.addListener("click", ()=>{
                    this._g_marker.forEach(e=>{
                        if(e.marker != marker){e.info.close();}
                        else{e.info.open(this.g_map, e.marker)}
                    });
                });
            }

        }

        if(this.user){
            this.user.setMap(null);
            this.user = null;
        }

        this.user = new google.maps.Marker({
            position : {...this.start},
            map : this.g_map,
            icon : this.image[1]
        });

    }
}
function mapInit(){
    navigator.geolocation.watchPosition(function(e){
        map.start.lat = e.coords.latitude;
        map.start.lng = e.coords.longitude;
        map.init();
    });
}
