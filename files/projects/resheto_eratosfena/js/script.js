function getResult() {
    "use strict";
    var inputData = document.getElementById("number_to_search");
    inputData = parseInt(inputData.value);
    var simpleNumsArray = [];
    simpleNums(inputData);
    document.getElementById("result").innerHTML = simpleNums(inputData); //change
}



function simpleNums(toNum) {
    "use strict";
    var pointToSearch = Math.sqrt(toNum).toFixed(0);
    //console.log(toNum, " ", pointToSearch);
    var arr = [];
    for (var i = 0; i < toNum; i++) {
        arr[i] = i;
    }
    var searchNum = 2;
    while (searchNum < pointToSearch) {
        if (arr[searchNum] != 0)
            {
                var currNum = searchNum * 2;
                //console.log("currN = ", currNum);
                var j = 2;
                while (currNum < toNum) {
                    arr[currNum] = 0;
                    //console.log(currNum, " set ", 0);
                    currNum = searchNum * j;
                    //console.log("currNum = ", currNum, "j = ", j);
                    j++;
                }
            }
        searchNum++;
        //console.log(searchNum);
    }
    var str = "";
    for (var i = 2; i < toNum; i++) {
        if (arr[i] != 0)
            str = str + arr[i] + ", ";
    }
    return str;
}