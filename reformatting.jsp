function change() {
    var txtBox = document.getElementById("kasi");
    var comBox = document.getElementById("complete");
    var lines = txtBox.value.split("\n");
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
