var watermark,body, version_history_container,version_history_grid_container, version_history_close_button, version_history_info_button;

function load_version_history_stylesheet(){
    watermark = document.getElementById("watermark");
    version_history_close_button = document.getElementById("version_history_close");
    version_history_container = document.getElementById("version_history_container");
    version_history_grid_container = document.getElementById("version_history_grid_container");
    version_history_info_button = document.getElementById("version_history_info_open");
    body = document.getElementsByTagName("body")[0];

    watermark.addEventListener("click", version_history_open);
    version_history_close_button.addEventListener("click", version_history_close);
    version_history_info_button.addEventListener("click", version_history_info_open);
    //Experimentell
    watermark.addEventListener("mousedown", watermark_mousedown);
    watermark.addEventListener("mouseup", watermark_mouseup);
    watermark.addEventListener("touchstart", watermark_mousedown);

    window.addEventListener('click', function(e){   
        if (version_history_container.contains(e.target)){
          // Clicked in box
        } else{
          // Clicked outside the box
          if(watermark.contains(e.target) != true){ //Ausnahme (Watermark)
            if(version_history_container.classList.contains("version_history_opened")){ 
                version_history_close();
            }
          }
        }
      });
}

function version_history_open(){
    version_history_grid_container.style.display = "grid";
    body.style.overflow = "hidden";
    version_history_container.classList = "";
    version_history_container.classList.add("version_history_opened");

    var timeout_duration = parseFloat(window.getComputedStyle(version_history_container).animationDuration) * 1000;
    setTimeout(function() {
      version_history_grid_container.style.overflow = "auto";
    }, timeout_duration); 
}

function version_history_close(){
    body.style.overflow = "unset";
    version_history_grid_container.style.overflow = "hidden";
    version_history_container.classList = "";
    version_history_container.classList.add("version_history_closed");

    var timeout_duration = parseFloat(window.getComputedStyle(version_history_container).animationDuration) * 1000;
    setTimeout(function() {
      version_history_grid_container.style.display = "none";
    }, timeout_duration); 
}

function version_history_info_open(){
  console.log("[version_history_info_open()] Funktion aktuell nicht verfügbar.");
}

//Experimentell
function watermark_mousedown(){
  watermark.classList= "watermark_mousedown";
}

function watermark_mouseup(){
  watermark.classList = "watermark_mouseup"
}