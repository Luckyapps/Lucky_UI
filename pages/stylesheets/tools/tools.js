window.addEventListener("load", start_tools);

var geo_ausgabe;

function start_tools(){
    geo_ausgabe = document.getElementById("geo_ausgabe");
}
function get_geo(type){
    if("geolocation" in navigator){
        if(type == "current"){
            navigator.geolocation.getCurrentPosition(proc_geo);  
        }else if(type == "watch"){
            navigator.geolocation.watchPosition(proc_geo);
        }else if(type == "watch_clear"){
            navigator.geolocation.clearWatch(proc_geo);
        }  
    }else{
        error_show("Geolocation wird nicht unterstüzt.");
    }
}

function proc_geo(position){
    console.log(position);
    geo_ausgabe.innerHTML = "<b>Genauigkeit: </b>"+ position.coords.accuracy +"m</br>"
    +"<b>Breitengrad: </b>"+ position.coords.latitude +"</br>"
    +"<b>Längengrad: </b>"+ position.coords.longitude +"</br>"
    +"<b>Höhe: </b>"+ position.coords.altitude +"</br>"
    +"<b>genauigkeit der Höhe: </b>"+ position.coords.altitudeAccuracy +"</br>"
    +"<b>Geschwindigkeit: </b>"+ position.coords.speed +"</br>"
    +"<b>Richtung: </b>"+ position.coords.heading +"</br>";
}



function start_geo(){
    var geo_avail = check_geo();
    if(geo_avail){
        console.log("true");
        get_geo();
    }else{}
}