var content;

function load_content_stylesheet(){
    content = document.getElementById("content");

    content_justify();
}

function content_justify(){
    var titlebar_height = titlebar.clientHeight;
    var content_margin_top = parseInt(window.getComputedStyle(content).marginTop);
    content.style.marginTop = content_margin_top + titlebar_height +"px";
    content.style.padding = window.getComputedStyle(content).gridGap;
}