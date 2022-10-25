var kasiBox_tmp = "";
var comBox_tmp = "";

function change() {
    var kasiBox = document.getElementById("kasi");
    var comBox = document.getElementById("complete");
    var lines = kasiBox.value.split("\n");
    var result = [];
    for (var i = 0; i < lines.length; i++) {
        if (lines[i] != "") {
            result.push(lines[i]);
        }
    }

    comBox.value = "";
    for (var i = 0; i < result.length; i++) {
        var text = "";
        comBox.value += "|| " + result[i] + " ||\n";
    }
}

function copy() {
    var comBox = document.getElementById("complete");
    navigator.clipboard.writeText(comBox.value);
}

function reset() {
    var kasiBox = document.getElementById("kasi");
    var comBox = document.getElementById("complete");

    if (kasiBox.value != "") {
        kasiBox_tmp = kasiBox.value;
        comBox_tmp = comBox.value;
        kasiBox.value = "";
        comBox.value = "";
    }
}

function redo() {
    var kasiBox = document.getElementById("kasi");
    var comBox = document.getElementById("complete");
    kasiBox.value = kasiBox_tmp;
    comBox.value = comBox_tmp;
}

function debug() {
    console.log("가사: ", kasiBox_tmp);
    console.log("완성: ", comBox_tmp);
}
