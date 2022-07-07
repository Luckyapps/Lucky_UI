window.addEventListener("load", function () {if(lucky_ui_core.modules.content.enabled){load_content_stylesheet()}});

if(lucky_ui_core.modules.content.enabled){load_content_stylesheet()}else{console.log("HAHAHA")}; load_check();

var content, cards;

function load_content_stylesheet(){
    content = document.getElementById("content");
    cards = document.getElementsByClassName("card");

    content_justify();
}

function content_justify(){
    var titlebar_height = titlebar.clientHeight;
    var content_margin_top = parseInt(window.getComputedStyle(content).marginTop);
    content.style.marginTop = content_margin_top + titlebar_height +"px";
    content.style.padding = window.getComputedStyle(content).gridGap;
}