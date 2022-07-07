window.addEventListener("load", function () {if(lucky_ui_core.modules.titlebar.enabled){load_titlebar_stylesheet()}});
if(lucky_ui_core.modules.titlebar.enabled){load_titlebar_stylesheet()};load_check();

var titlebar, settings;

function load_titlebar_stylesheet(){
    titlebar = document.getElementById("titlebar");
    settings = document.getElementById("settings");
}