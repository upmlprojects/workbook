
function change_p () {
    var input = document.getElementById("input_form");
    var result = document.getElementById("result_p");
    input = input.value;
    var array = [];
    
    for (var i in input) {
        array [i] = parseInt(input[i]);
    }
    var res = zero_counter (array);
    result.innerHTML= res[0] + " / " + res[1];
    var r, g, b;
    r = Math.floor((Math.random() * 255) + 100);
    g = Math.floor((Math.random() * 255) + 100);
    b = Math.floor((Math.random() * 255) + 100);
    document.getElementById("circle").style.backgroundColor = "rgb("+r+","+g+","+b+")";
}

function zero_counter (array) {
    var max_zero_length = 0;
    var curr_zero_pos = 0;
    var zero_length = 0;
    for (var i in array) {
        if (array[i] == 0) {
            zero_length++;
            if (zero_length > max_zero_length) {
                max_zero_length = zero_length;
                curr_zero_pos = i - zero_length + 1;
            }
        }
        else {
            zero_length = 0;
        }
    }
    zero_length = max_zero_length;
    return [zero_length, curr_zero_pos];
}