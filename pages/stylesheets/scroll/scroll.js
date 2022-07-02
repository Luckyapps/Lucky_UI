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
    start_evt(sec5, 100, 300, "opa", 1);
    start_evt(document.getElementById("scroll_1"), 0, 200, "movein_transl", 0);
}

function start_evt(elem, start, end, type, goal_val, settings){
    var diff = end - start;
    var unit = diff/100;
    if((scroll_ > start) && (scroll_ < end)){
        var faktor = ((scroll_- start)/diff);
        //console.log(faktor);
        if(type == "opa"){
            elem.style.opacity = faktor * goal_val;
        }else if(type == "movein_transl"){
            elem.style.transform = "translate(-"+ ((1 - faktor) * (goal_val + 100)) +"%,0)"; 
        }
    }else if(scroll_ > end){
        if(type == "opa"){
            elem.style.opacity = goal_val;
        }else if(type == "movein_transl"){
            elem.style.transform = "translate("+ goal_val +"%,0)";
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