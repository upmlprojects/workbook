function toPS () {
    var task_name = document.getElementById("task-id").innerHTML;
    setSRC("highlight/" +task_name + "ps.html")
}

function toJS () {
    var task_name = document.getElementById("task-id").innerHTML;
    setSRC("highlight/" +task_name + "js.html")
}

function toC () {
    var task_name = document.getElementById("task-id").innerHTML;
    setSRC("highlight/" +task_name + "c.html")
}


function setSRC (srcStr) {
    document.getElementById("code-iframe").src = srcStr;
    console.log(srcStr);
}