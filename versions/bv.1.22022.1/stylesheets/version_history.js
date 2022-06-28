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
    setTimeout(function() {
        version_history_grid_container.style.overflow = "auto";
        }, 500);
}

function version_history_close(){
    body.style.overflow = "unset";
    version_history_grid_container.style.overflow = "hidden";
    version_history_container.classList = "";
    version_history_container.classList.add("version_history_closed");
    setTimeout(function() {
        version_history_grid_container.style.display = "none";
        }, 500);
}

function version_history_info_open(){

}