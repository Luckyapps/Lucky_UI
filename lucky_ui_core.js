window.addEventListener("load", load_lucky_ui_core);

//if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js').then(function(registration){registration.update()})}; //experimenteller Offlinemodus

var lucky_ui_core = {
    "modules":{
        "titlebar": {
            "enabled": true,
            "files": {
                "js":["https://luckyapps.github.io/Lucky_UI/stylesheets/titlebar.js"],
                "css":["https://luckyapps.github.io/Lucky_UI/stylesheets/titlebar.css"]
            }
        },
        "content": {
            "enabled": true,
            "files": {
                "js":["https://luckyapps.github.io/Lucky_UI/stylesheets/content.js"],
                "css":["https://luckyapps.github.io/Lucky_UI/stylesheets/content.css"]
            }
        },
        "error": {
            "enabled": true,
            "files": {
                "js": ["https://luckyapps.github.io/Lucky_UI/stylesheets/error.js"],
                "css": ["https://luckyapps.github.io/Lucky_UI/stylesheets/error.css"]
            }
        },
        "sidecard": {
            "enabled": true,
            "files": {
                "js":["https://luckyapps.github.io/Lucky_UI/stylesheets/sidecard.js"],
                "css":["https://luckyapps.github.io/Lucky_UI/stylesheets/sidecard.css"]
            }
        },
        "cookie": {
            "enabled": true,
            "files": {
                "js": ["https://luckyapps.github.io/Lucky_UI/stylesheets/cookies.js"],
                "css": ["https://luckyapps.github.io/Lucky_UI/stylesheets/cookies.css"]
            }
        },
        "darkmode": {
            "enabled": true,
            "files": {
                "js": ["https://luckyapps.github.io/Lucky_UI/stylesheets/darkmode.js"],
                "css": ["https://luckyapps.github.io/Lucky_UI/stylesheets/darkmode.css"]
            }
        },
        "version_history": {
            "enabled": true,
            "files": {
                "js": ["https://luckyapps.github.io/Lucky_UI/stylesheets/version_history.js"],
                "css": ["https://luckyapps.github.io/Lucky_UI/stylesheets/version_history.css"]
            }
        },
        "update_notification": {
            "enabled": true,
            "files": {
                "js": ["https://luckyapps.github.io/Lucky_UI/stylesheets/update_notification/updatelist.js", "https://luckyapps.github.io/Lucky_UI/stylesheets/update_notification/update_notification.js"],
                "css": ["https://luckyapps.github.io/Lucky_UI/stylesheets/update_notification/update_notification.css"]
            }
        },
        "scroll": {
            "enabled": false,
            "files": {
                "js":["https://luckyapps.github.io/Lucky_UI/pages/stylesheets/scroll/scroll.js"],
                "css":["https://luckyapps.github.io/Lucky_UI/pages/stylesheets/scroll/scroll.css"]
            }
        },
        "": {
            "enabled": false,
            "files": {
                "js":[""],
                "css":[""]
            }
        }
    },
    "devmode": true
}

var load_status = 0, loaded_modules_count = 0;

async function load_lucky_ui_core(){
    /*load_titlebar_stylesheet();
    load_content_stylesheet();
    load_error_stylesheet();
    load_sidecard_stylesheet();
    load_cookie_stylesheet();
    load_darkmode_stylesheet();
    load_version_history_stylesheet();
    load_update_notification_stylesheet();*/
    if(!lucky_ui_core.devmode){
      for(i=0;  i < Object.keys(lucky_ui_core.modules).length; i++){
        for(k=0; k<lucky_ui_core.modules[Object.keys(lucky_ui_core.modules)[i]].files.css.length; k++){
            cssLoader(lucky_ui_core.modules[Object.keys(lucky_ui_core.modules)[i]].files.css[k]);
        }
        for(j=0; j<lucky_ui_core.modules[Object.keys(lucky_ui_core.modules)[i]].files.js.length; j++){
            scriptLoader(lucky_ui_core.modules[Object.keys(lucky_ui_core.modules)[i]].files.js[j]);
        }
        if(lucky_ui_core.modules[Object.keys(lucky_ui_core.modules)[i]].enabled){
            loaded_modules_count++;
        }
      }
    }else{
        console.warn("DEVELOPMENT MODE");

        cssLoader("style.css");
        cssLoader("stylesheets/version_history.css");
        cssLoader("stylesheets/titlebar.css");
        cssLoader("stylesheets/content.css");
        cssLoader("stylesheets/error.css");
        cssLoader("stylesheets/sidecard.css");
        cssLoader("stylesheets/cookies.css");
        cssLoader("stylesheets/darkmode.css");
        cssLoader("stylesheets/update_notification/update_notification.css");

        scriptLoader("stylesheets/version_history.js");
        scriptLoader("stylesheets/titlebar.js");
        scriptLoader("stylesheets/content.js");
        scriptLoader("stylesheets/error.js");
        scriptLoader("stylesheets/sidecard.js");
        scriptLoader("stylesheets/cookies.js");
        scriptLoader("stylesheets/darkmode.js");
        scriptLoader("stylesheets/update_notification/updatelist.js");
        scriptLoader("stylesheets/update_notification/update_notification.js");

        for(i=0;  i < Object.keys(lucky_ui_core.modules).length; i++){
            if(lucky_ui_core.modules[Object.keys(lucky_ui_core.modules)[i]].enabled){
                loaded_modules_count++;
            }
        }
    }

    setTimeout(function () { //BUGFIX: Scroll ist nicht oben 
      window.scrollTo(0,0);
    }, 10);
}

function load_check(){
    load_status++
    if(load_status == (loaded_modules_count -2)){
        document.getElementById("wall").style.display = "none";
        document.getElementsByTagName('html')[0].style.overflow = "";
        console.warn("Fertig geladen");
    }
}

//Script laden
async function scriptLoader(path, callback){
  var script = document.createElement('script');
  script.type = "text/javascript";
  //script.async = true;
  script.src = path;
  script.onload = function(){  
    if(typeof(callback) == "function"){
      callback();
    }
  }
  try
  {
    var scriptOne = document.getElementsByTagName('script')[0];
    scriptOne.parentNode.insertBefore(script, scriptOne);
  }
  catch(e)
  {
    document.getElementsByTagName("head")[0].appendChild(script);
  }
}

function cssLoader(file){
    var link = document.createElement("link");
    link.href = file;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
}