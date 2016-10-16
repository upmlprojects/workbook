function calc () {
    var inpData = parseInt(document.getElementById("input").value);
    var mainArr = [];
    mainArr[0] = 0;
    inversia(inpData, mainArr);
    document.getElementById("result").innerHTML = inversia (inpData, mainArr);
    var str = "";
    for (var i in mainArr)
        str += mainArr[i] + ", ";
    document.getElementById("inversia").innerHTML = str;
}

function inversia (toIndex, arr) {
    var currIndex = 1;
    var powTo = parseInt((Math.log(toIndex) / Math.log(2)).toFixed(0));
    var power = 0;
    while (power < powTo + 1) {
        var firsSymb = currIndex;
        while (currIndex < Math.pow(2, power) * 2 && currIndex < toIndex) {
            arr[currIndex] = 1 - arr[currIndex - firsSymb];
            console.log(currIndex, " ", currIndex - firsSymb);
            currIndex++;
        }
        power++;
    }
    console.log(arr);
    return arr[toIndex - 1];
    
}
