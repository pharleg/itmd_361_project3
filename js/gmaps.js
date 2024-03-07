function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    mapId: "DEMO_MAP_ID",
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const userLatLng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(userLatLng);

      const nycLatLng = {
        lat: 40.7128,
        lng: -74.0060
      };

      const distanceToNYC = google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(userLatLng.lat, userLatLng.lng),
        new google.maps.LatLng(nycLatLng.lat, nycLatLng.lng)
      );

      const userMarker = new google.maps.Marker({
        position: userLatLng,
        title: `You are here!`,
        map: map
      });

      const nycMarker = new google.maps.Marker({
        position: nycLatLng,
        title: 'New York City',
        map: map
      });
      
      document.getElementById('distanceNYC'.innerHTML = "Distance to NYC:" + distanceToNYC.toFixed(2) + " meters";
    });
  }
}
