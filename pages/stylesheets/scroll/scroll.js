window.addEventListener("load", start);

var background, scroll_;

var box, box_top, sec5;

function start(){
    box = document.getElementById("box");
    background = document.getElementById("background");
    sec5 = document.getElementById("scroll_2");

    window.addEventListener("scroll", onscroll);
}

function onscroll(evt){
    scroll_ = Math.round(window.scrollY);
    //box_top = get_Style(box, "top", "int");
    if(scroll_ > 300){
    }
    start_evt(sec5, 100, 300, "opa", 1);
}

function start_evt(elem, start, end, type, goal_val, settings){
    var diff = end - start;
    //console.log(diff);
    var unit = diff/100;
    //console.log(unit);
    if((scroll_ > start) && (scroll_ < end)){
        var faktor = ((scroll_- start)/diff);
        console.log(faktor);
        if(type == "opa"){
            elem.style.opacity = faktor * goal_val;
        }else if(type == "move"){

        }
    }
}

function get_Style(elem, property, type){
    var value = window.getComputedStyle(elem).getPropertyValue(property);
    if(type == "int"){
        value = parseInt(value);
    }else if(type == "float"){
        value = parseFloat(value);
    }
    return value;
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}

function getScroll(elem){
    return elem.getBoundingClientRect().top;
}