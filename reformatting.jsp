var kasiBox_tmp = "";
var comBox_tmp = "";
//단축키 ctrl+space
document.addEventListener("keydown", function (event) {
    var key = event.which || event.keyCode;
    var ctrl = event.ctrlKey ? event.ctrlKey : key === 17 ? true : false;
    if (key == 32 && ctrl) {
        change();
    }
});

//웹 로딩 후 자동으로 작동되는 코드
window.onload = function () {
    //버전 관리 1.1.3(=2022.11.09~)
    //정보까지 완성 기능 추가
    var version = "v1.1.3";

    // 디버그 버튼 숨기기
    // document.getElementById("debug_button").style.display = "none";
    document.getElementById("video_id").disabled = false;
    document.getElementById("vocaro_etc").disabled = true;
    // 버전 DOM에 추가
    document.getElementById(
        "version"
    ).innerHTML = `<h4 class="version" id="version">${version}</h4>`;
};

// 작성한 가사를 서식에 맞게 변환해 주는 기능
function change() {
    var kasiBox = document.getElementById("kasi"); //원본 텍박
    var comBox = document.getElementById("complete"); //완성 텍박
    var lines = kasiBox.value.split("\n"); //줄 수
    var result = []; //완성 변수

    //빈 줄 삭제
    // result[i]의 i마다 한 줄씩 삽입
    for (var i = 0; i < lines.length; i++) {
        if (lines[i] != "") {
            result.push(lines[i]);
        }
    }

    //가나 대조표에 의거한 오자 수정
    var replaced_result = [];
    for (var i = 0; i < result.length; i++) {
        replaced_result.push(
            result[i]
                .replace(/챠/g, "차")
                .replace(/챤/g, "찬")
                .replace(/챳/g, "찻")
                .replace(/츄/g, "추")
                .replace(/츈/g, "춘")
                .replace(/츗/g, "춧")
                .replace(/쵸/g, "초")
                .replace(/쵼/g, "촌")
                .replace(/춋/g, "촛")
                .replace(/쟈/g, "자")
                .replace(/쟌/g, "잔")
                .replace(/쟛/g, "잣")
                .replace(/쥬/g, "주")
                .replace(/쥰/g, "준")
                .replace(/쥿/g, "줏")
                .replace(/죠/g, "조")
                .replace(/죤/g, "존")
                .replace(/죳/g, "좃")
        );
    }

    for (let i = 1; i < result.length; i = i + 3) {
        var hyphen = 0;
        var pos = 0;
        if (result[i].indexOf("-") > 0) {
            hyphen += 1;
            // kasiBox.setSelectionRange(result[i].indexOf('-'), result[i].indexOf('-')+1)
        }
    }
    if (hyphen > 0) {
        alert("하이픈이 들어갔습니다. 확인 바랍니다.");
    }

    //완성형: comBox 안에 한 줄씩 입력됨.
    comBox.value = "";
    for (var i = 0; i < replaced_result.length; i++) {
        //replaced_result.length = 입력된 글의 줄 수
        if (i < replaced_result.length) {
            comBox.value += "|| " + replaced_result[i] + " ||\n";
        } else {
            comBox.value += "|| " + replaced_result[i] + " ||";
        }
    }
    console.log("change complete")
    return comBox.value;
}

function info_add() {
    var kasiBox = document.getElementById("kasi"); //원본 텍박
    var comBox = document.getElementById("complete"); //완성 텍박

    var song_title = document.getElementById("song_title").value;
    var video_type = document.getElementById("video_type").value;
    var video_id = document.getElementById("video_id").value;
    var composer = document.getElementById("composer").value;
    var writer = document.getElementById("writer").value;
    var vocaro = document.getElementById("vocaro").value;
    var vocaro_box = document.getElementById("vocaro_etc").value;

    song_title.replace(" ", "");
    video_type.replace(" ", "");
    video_id.replace(" ", "");
    composer.replace(" ", "");
    writer.replace(" ", "");
    vocaro.replace(" ", "");
    vocaro_box.replace(" ", "");
    
    if (vocaro == "etc") {
        vocaro = document.getElementById("vocaro_etc").value;
    }

    if (song_title == "") {
        alert("음악 제목을 입력해 주세요.")
    } else if (video_type == "nicovideo" || video_type == "youtube") {
        if (video_id == "") {
            alert("영상 아이디를 입력해 주세요.")
        }
    } else if (composer == "") {
        alert("작곡가를 입력해 주세요.")
    } else if (writer == "") {
        alert("작사가를 입력해 주세요.")
    } else if (vocaro == "") {
        alert("가수를 선택해 주세요.")
    } else if (vocaro == "etc") {
        if(vocaro_etc == "") {
            alert("가수를 입력해 주세요.")
        }
    }

    var video_x = "\n|video-id="
    var video
    if (video_type == "nicovideo" || video_type == "youtube") {
        video_x = video_x + video_id +"\n"
    } else {
        video_x = "\n"
    }

    var tmp = change(kasiBox);
    var guide_title =
        "+ 정보\n"+
        "[[include component:info-table-start\n" +
        "|title=" + song_title + "\n" +
        "|videotype=" + video_type +
        video_x +
        "]]\n" +
        "[[row]]\n" +
        '    [[hcell class="composer-cell"]] 작곡 [[/hcell]]\n' +
        "    [[cell]]\n" +
        "        " + composer + "\n" +
        "    [[/cell]]\n" +
        "[[/row]][[row]]\n" +
        '    [[hcell class="writer-cell"]] 작사 [[/hcell]]\n' +
        "    [[cell]]\n" +
        "        " + writer + "\n" +
        "    [[/cell]]\n" +
        "[[/row]][[row]]\n" +
        '[[hcell class="vocaro-cell"]] 노래 [[/hcell]]\n' +
        "    [[cell]]\n" +
        "        " + "[[[" + vocaro + "|]]]" + "\n" +
        "    [[/cell]]\n" +
        "[[/row]]\n" +
        "[[include component:info-table-end]]\n" +
        "\n" +
        "+ 가사" +
        "\n" +
        tmp;

    comBox.value = guide_title;
}

function type_realtime() {
    var type = document.getElementById("video_type").value;
    //비디오 타입이 외부링크 x or 없음일 때
    if (type == "novideo" || type == "false") {
        document.getElementById("video_id").disabled = true;
        document.getElementById("video_id").placeholder = "";
        return type;
    } else {
        //아닐 때
        document.getElementById("video_id").disabled = false;
        document.getElementById("video_id").placeholder = "영상 아이디";
        return document.getElementById("video_id").value;
    }
}

function vocaro_realtime() {
    var vocaro = document.getElementById("vocaro").value;
    //가수가 직접 입력모드 선택일 때
    if (vocaro == "etc") {
        document.getElementById("vocaro_etc").disabled = false;
        document.getElementById("vocaro_etc").placeholder = "haruno-sora";
        return document.getElementById("vocaro_etc").value;
    } else {
        //아닐 때
        document.getElementById("vocaro_etc").disabled = true;
        return vocaro;

    }
}

//클립보드에 복사 기능
function copy() {
    var comBox = document.getElementById("complete");
    //최신 방식이나 적용이 안되어
    //navigator.clipboard.writeText(comBox.value);

    //옛날 방식
    comBox.select();
    comBox.setSelectionRange(0, 99999);
    document.execCommand("copy");
    comBox.setSelectionRange(0, 0);
}

//입력한 가사 삭제 기능
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

//실수로 삭제한 가사 되돌리기 기능
function redo() {
    var kasiBox = document.getElementById("kasi");
    var comBox = document.getElementById("complete");
    kasiBox.value = kasiBox_tmp;
    comBox.value = comBox_tmp;
}

//디버그 용
function debug() {
    console.log("가사: ", kasiBox_tmp);
    console.log("완성: ", comBox_tmp);
}
