const inputfield = document.getElementById("inputfield");
const searchbutton = document.getElementById("searchbutton");
const mapdiv = document.getElementById("map");


const mymap = L.map(mapdiv).setView([37.4223, -122.085], 13);
L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2xlaW45MyIsImEiOiJja2ZkcHFvc2kwMHJlMnJwYXYza3d0ZnF1In0.Bqf0s2BK7RAjQUi4IDGVhA`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2xlaW45MyIsImEiOiJja2ZkcHFvc2kwMHJlMnJwYXYza3d0ZnF1In0.Bqf0s2BK7RAjQUi4IDGVhA'
}).addTo(mymap);


const showLocOnMap = async function (IPadress) {
    let locData = await findIPLocation(IPadress);
    let lat = locData.location.lat;
    let lng = locData.location.lng;
    mymap.setView([lat, lng], 13);
    showData(locData.ip, locData.location.region, locData.location.timezone, locData.isp)

}

const showData = function (ipadress, location, timezone, isp) {
    console.log(ipadress + location + timezone + isp)
}




searchbutton.addEventListener("click", function () { showLocOnMap(inputfield.value) })