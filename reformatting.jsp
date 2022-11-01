var kasiBox_tmp = "";
var comBox_tmp = "";

window.onload = function () {
    var version = "v1.0.4"; //버전 관리
    document.getElementById("debug_button").style.display = "none";
    document.getElementById(
        "version"
    ).innerHTML = `<h4 class="version" id="version">${version}</h4>`;
};

function change() {
    var kasiBox = document.getElementById("kasi"); //원본 텍박
    var comBox = document.getElementById("complete"); //완성 텍박
    var lines = kasiBox.value.split("\n"); //줄 수
    var result = []; //완성 변수

    //빈 줄 삭제
    for (var i = 0; i < lines.length; i++) {
        if (lines[i] != "") {
            result.push(lines[i]);
        }
    }

    console.log(result)
    // result = result.toString().replace(/원본/g, "수정");
    var replaced_result = [];
    for (var i = 0; i < result.length; i++) {
        replaced_result.push(result[i].replace(/죠/, "조").replace(/쟌/g, "잔").replace(/챠/, "차").replace(/쵸/g, "초").replace(/춋/g, "촛"));
    }
    console.log(replaced_result)

    comBox.value = "";
    for (var i = 0; i < replaced_result.length; i++) {
        console.log(replaced_result.length)
        if (i < replaced_result.length) {
            comBox.value += "|| " + replaced_result[i] + " ||\n";
        }
        else {
            comBox.value += "|| " + replaced_result[i] + " ||";
        }
    }
}
function copy() {
    var comBox = document.getElementById("complete");
    // navigator.clipboard.writeText(comBox.value);

    comBox.select();
    comBox.setSelectionRange(0, 99999);
    document.execCommand("copy");
    comBox.setSelectionRange(0, 0);
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
