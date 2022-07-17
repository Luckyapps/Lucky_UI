window.addEventListener("load", function () {if(lucky_ui_core.modules.error.enabled){load_error_stylesheet()}});
if(lucky_ui_core.modules.error.html_embeded){
    document.body.appendChild(createHTML('<div class="error_style_container"><div id="error_container" class="error_hidden"></div></div>'));
    console.log("embed");
}
if(lucky_ui_core.modules.error.enabled){load_error_stylesheet()};load_check();

var error_container;

function load_error_stylesheet(){
    error_container = document.getElementById("error_container");
}

function error_show(error_info, error_type){   
    if(error_type == "closed"){ //vorgefertigter Typ
        error_container.innerHTML = "Keine Verbindung zum Server möglich. <br>Bitte später noch einmal versuchen oder Seite neu Laden.";
    }else{
        error_container.innerHTML = error_info;
    }
    error_container.classList = "fade_in_out";
    var timeout_duration = parseFloat(window.getComputedStyle(error_container).animationDuration) * 1000;
        setTimeout(function() {   
            error_container.classList = "error_hidden";
            }, timeout_duration); 
}