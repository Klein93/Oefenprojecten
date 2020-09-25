const inputfield = document.getElementById("inputfield");
const searchbutton = document.getElementById("searchbutton");
const mapdiv = document.getElementById("map");
const ipadressP = document.getElementById("ipadress");
const locationP = document.getElementById("location");
const timezoneP = document.getElementById("timezone");
const ispP = document.getElementById("isp");


const mymap = L.map(mapdiv).setView([37.4223, -122.085], 13);
L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accestoken}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: ""
}).addTo(mymap);


const showLocOnMap = async function (IPadress) {
    let locData = await findIPLocation(IPadress);
    let lat = locData.location.lat;
    let lng = locData.location.lng;
    mymap.setView([lat, lng], 13);
    L.marker([lat, lng]).addTo(mymap);
    showData(locData.ip, locData.location.region, locData.location.city, locData.location.timezone, locData.isp)

};

const showData = function (ipadress, region, city, timezone, isp) {
    ipadressP.innerHTML = ipadress;
    locationP.innerHTML = `${region}, ${city}`;
    timezoneP.innerHTML = timezone;
    ispP.innerHTML = isp;

};




searchbutton.addEventListener("click", function () { showLocOnMap(inputfield.value) })