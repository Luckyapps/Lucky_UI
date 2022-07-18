if(lucky_ui_core.modules.update_notification.enabled){load_update_notification_stylesheet()}; load_check();

var update_selected, update_notification, update_notification_container, update_notification_toolbar, update_notification_title, update_notification_close, update_notification_content;

function load_update_notification_stylesheet(){
    update_notification = document.getElementById("update_notification");
    update_notification_container = document.getElementById("update_notification_container");
    update_notification_toolbar = document.getElementById("update_notification_toolbar");
    update_notification_title = document.getElementById("update_notification_title");
    update_notification_close = document.getElementById("update_notification_close");
    update_notification_content = document.getElementById("update_notification_content");

    update_notification_close.addEventListener("click", u_n_close);

    update_notification_container.addEventListener("click", u_n_link);

    u_n_start();
}

function u_n_close(){
    localStorage.setItem("updatelist_stand", /*Object.keys(updatelist[0]).length*/updatelist2.updates.length);
    update_notification.classList = "u_n_closed";
}

function u_n_show(){
    update_selected = /*updatelist[0][Object.keys(updatelist[0])[0]][0]*/updatelist2.updates[0];
    update_notification_title.innerHTML = update_selected.id;
    update_notification_content.innerHTML = update_selected.description;
    update_notification.classList = "u_n_opened";
}

function u_n_start(){
    if(localStorage.getItem("updatelist_stand")){
        if(/*JSON.stringify(Object.keys(updatelist[0]).length)*/updatelist2.updates.length == localStorage.getItem("updatelist_stand")){
            return;
        }else{
            u_n_show();
        }
    }else{
        u_n_show();
    }
}

function u_n_link(evt){
    if(evt.target.contains(update_notification_close)){
    }else{
        u_n_close();
        flyin = true;
        version_history_open();
    }
}

function u_n_testfor_name(elem_id){
    if(updatelist2.updates[elem_id].name != undefined){
        return updatelist2.updates[elem_id].name;
        console.log("u_n_name");
    }else{
        return "";
    }
}

function u_n_testfor_date(elem_id){
    if(updatelist2.updates[elem_id].date != undefined){
        return updatelist2.updates[elem_id].date;
        console.log("u_n_date");
    }else{
        return "";
    }
}

function u_n_archive_show(){
    var update_content = "";
    for(i=0; i<updatelist2.updates.length;i++){
        var date_tmp = u_n_testfor_date(i);
        var name_tmp = u_n_testfor_name(i);
        update_content = update_content +"<div><h3 style='display:flex; gap:0.5em; flex-wrap: wrap; align-items: center;'>"+ updatelist2.updates[i].id +"<span style='font-weight:normal;font-size:0.8em'>"+ name_tmp +"</span><span style='font-weight:normal;font-size:0.8em'>"+ date_tmp +"</span></h3>"+ updatelist2.updates[i].description +"</div>";
    }
    flyin_open(
        "<h2>Updatearchiv</h2>"+ update_content
    );
}