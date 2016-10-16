function calc () {
    var inpData = document.getElementById("input").value;
    var inpArr = inpData.split(" ");
    for (var i = 0; i < inpArr.length; i++) {
        inpArr[i] = parseInt(inpArr[i]);
    }
    
    var controlArr = [];
    
    for (var i = 0; i < inpArr.length + 1; i++) {
        if (inpArr.indexOf(i) != -1)
            controlArr[i] = 1;
        else 
            controlArr[i] = 0;
    }
    document.getElementById("result").innerHTML = firstIndexOfZero(controlArr, inpArr.length + 1);
}

function firstIndexOfZero (arr, length) {
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] == 0)
            return i;
    }
    return length;
}