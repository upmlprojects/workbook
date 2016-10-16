function calc () {
    var people_data = document.getElementById("people");
    people_data = parseInt(people_data.value);
    var words_data = document.getElementById("words");
    words_data = parseInt(words_data.value);
    console.log(people_data, " && ", words_data);
    var array = [];
    for (var i = 0; i < people_data; i++) {
        array[i] = i + 1;
    }
    document.getElementById("result").innerHTML = rhyme_alg(array, words_data);
}

function rhyme_alg (array, words) {
    var people = array.length;
    while (people > 1) {
        var pos = (words % people) - 1;
        array.splice(pos, 1);
        people--;
    }
    return array[0];
}