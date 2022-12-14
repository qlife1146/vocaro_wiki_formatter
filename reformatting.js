let original_tmp = "";
let finish_tmp = "";

//ctrl+space 단축키 기능
document.addEventListener("keydown", function (event) {
    const key = event.which || event.keyCode;
    const ctrl = event.ctrlKey ? event.ctrlKey : key === 17 ? true : false;
    if (key == 32 && ctrl) {
        formatting();
    }
});

window.onload = function () {
    //버전관리 부분
    //1.7.1(22.12.07~): jsp > js
    const version = "v1.7.1"; //버전 관리 변수
    document.getElementById("version").innerHTML = `<h4 class='version' id='version'>${version}</h4`;

    //input_text의 display 여부
    document.getElementById("video_id_textbox").disabled = false;
};

//[변환 버튼]가사를 서식에 맞춰주는 함수
function formatting() {
    //html 변수
    let original_text = document.getElementById("original_textarea").value; //작성한 가사
    let finish_text = document.getElementById("finish_textarea").value; //완성된 가사

    //함수 내부 변수
    let original_list = original_text.split("\n"); //작성한 가사를 담은 리스트
    let result_list = []; //완성된 가사를 담을 리스트

    //빈 줄 삭제
    for (let i = 0; i < original_list.length; i++) {
        if (original_list[i] != "") {
            result_list.push(original_list[i]);
        }
    }

    //가나 대조표에 의거한 오자 수정
    for (let i = 0; i < result_list.length; i++) {
        result_list[i] = result_list[i].replace(/챠/g, "차").replace(/챤/g, "찬").replace(/챳/g, "찻").replace(/츄/g, "추").replace(/츈/g, "춘").replace(/츗/g, "춧").replace(/쵸/g, "초").replace(/쵼/g, "촌").replace(/춋/g, "촛").replace(/쟈/g, "자").replace(/쟌/g, "잔").replace(/쟛/g, "잣").replace(/쥬/g, "주").replace(/쥰/g, "준").replace(/쥿/g, "줏").replace(/죠/g, "조").replace(/죤/g, "존").replace(/죳/g, "좃");
    }

    //발음 줄에 하이픈(-)이 있는지 검사
    let hyphen = 0; //하이픈 개수를 세기 위한 변수
    for (let i = 1; i < result_list.length; i = i + 3) {
        if (result_list[i].indexOf("-") > 0) {
            hyphen += 1;
        }
    }
    if (hyphen > 0) {
        alert("하이픈(-)이 있습니다. 확인해 주세요.");
    }

    finish_text = "";
    for (let i = 0; i < result_list.length; i++) {
        i < result_list.length ? (finish_text += "|| " + result_list[i] + " ||\n") : (finish_textarea += "|| " + result_list[i] + " ||");
    }
    document.getElementById("finish_textarea").value = finish_text;
    return finish_text;
}

//[정보까지 변환 버튼]정보까지 함께 서식에 맞춰주는 함수
function formatting_with_information() {
    //html 변수
    const original_textarea = document.getElementById("original_textarea");
    const finish_textarea = document.getElementById("finish_textarea");

    let song_title_text = document.getElementById("song_title_textbox").value;
    let video_type_text = document.getElementById("video_type_select").value;
    let video_id_text = document.getElementById("video_id_textbox").value;
    // let composer_text = document.getElementById("composer_textbox").value;
    // let writer_text = document.getElementById("writer_textbox").value;
    // let vocaro_text = document.getElementById("vocaro_textbox").value;
    let composer_text = document.querySelectorAll(".composer_textbox");
    let writer_text = document.querySelectorAll(".writer_textbox");
    let vocaro_text = document.querySelectorAll(".vocaro_textbox");

    // video_type_text = video_type_text.replace(/ /g, "");
    // video_id_text = video_id_text.replace(/ /g, "");
    // vocaro_text = vocaro_text.replace(/ /g, "");

    let alert_list = [];
    let info_format = "+ 정보\n" + "[[include component:info-table-start\n";

    if (song_title_text == "") {
        alert_list.push("음악 제목 없음");
    } else {
        info_format += "|title=" + song_title_text + "\n";
    }
    if (video_type_text == "nicovideo" || video_type_text == "youtube") {
        if (video_id_text == "") {
            alert_list.push("영상 아이디 없음");
        } else {
            info_format += "|videotype=" + video_type_text + "\n" + "|video-id=" + video_id_text + "\n" + "]]\n";
        }
    } else if (video_type_text == "novideo" || video_type_text == "false") {
        info_format += "|videotype=" + video_type_text + "\n" + "]]\n";
    }
    info_format += "[[row]]\n";

    if (composer_text == "") {
        alert_list.push("작곡가 이름 없음");
    } else {
        info_format += '    [[hcell class="composer-cell"]] 작곡 [[/hcell]]\n' + "    [[cell]]\n";
        for (let i = 0; i < composer_text.length; i++) {
            info_format += "        [[[" + composer_text[i].value + "|]]]\n";
        }
        info_format += "    [[/cell]][[/row]][[row]]\n";
    }

    if (writer_text == "") {
        alert_list.push("작사가 이름 없음");
    } else {
        info_format += '    [[hcell class="composer-cell"]] 작사 [[/hcell]]\n' + "    [[cell]]\n";
        for (let i = 0; i < writer_text.length; i++) {
            info_format += "        [[[" + writer_text[i].value + "|]]]\n";
        }
        info_format += "    [[/cell]][[/row]][[row]]\n";
    }

    if (vocaro_text == "") {
        alert_list.push("보카로 이름 없음");
    } else {
        info_format += '    [[hcell class="vocaro-cell"]] 노래 [[/hcell]]\n' + "    [[cell]]\n";
        for (let i = 0; i < vocaro_text.length; i++) {
            info_format += "        [[[" + vocaro_text[i].value + "|]]]\n";
        }
        info_format += "    [[/cell]]\n" + "[[/row]]\n" + "[[include component:info-table-end]]\n\n";
    }

    if (alert_list.length > 0) {
        return alert(alert_formatting(alert_list));
    }

    info_format += "+ 가사\n";

    let lyrics = formatting();

    finish_textarea.value = info_format + lyrics;
}

//[초기화 버튼]초기화 함수
function reset() {
    let original = document.getElementById("original_textarea");
    let finish = document.getElementById("finish_textarea");

    if (original.value != "") {
        original_tmp = original.value;
        finish_tmp = finish.value;
        original.value = "";
        finish.value = "";
    }
    return [original_tmp, finish_tmp];
}

//[되돌리기 버튼]되돌리기 함수
function redo() {
    const original = document.getElementById("original_textarea");
    const finish = document.getElementById("finish_textarea");
    const original_text = reset()[0];
    const finish_text = reset()[1];

    original.value = original_text;
    finish.value = finish_text;
}

//[클립보드로 복사 버튼]클립보드로 복사해 주는 함수
function copy_to_clipboard() {
    const finish_textarea_value = document.getElementById("finish_textarea");
    finish_textarea_value.select();
    finish_textarea_value.setSelectionRange(0, 99999);
    document.execCommand("copy");
    finish_textarea_value.setSelectionRange(0, 0);
}

//비디오 타입 실시간 작동 함수
function type_realtime() {
    const type = document.getElementById("video_type_select").value;
    if (type == "novideo" || type == "false") {
        document.getElementById("video_id_textbox").disabled = true;
        document.getElementById("video_id_textbox").placeholder = "";
        return type;
    } else {
        document.getElementById("video_id_textbox").disabled = false;
        document.getElementById("video_id_textbox").placeholder = "영상 아이디";
        return document.getElementById("video_id_textbox");
    }
}

function alert_formatting(alert_list) {
    let output_string = "";
    for (let i = 0; i < alert_list.length; i++) {
        i < alert_list.length ? (output_string += alert_list[i] + "\n") : (output_string += alert_list[i]);
    }
    return output_string;
}

function add_composer_textbox() {
    //MARK: 여러 박스 값 가져오는 거 해결 필요
    const original = document.getElementById("composer_div");
    const clone = original.cloneNode(true);

    original.after(clone);

    const new_rmv_btn = document.createElement("button");
    new_rmv_btn.type = "button";
    new_rmv_btn.innerHTML = "-";
    clone.appendChild(new_rmv_btn);

    new_rmv_btn.addEventListener("click", function () {
        const remove_btn = this.parentNode;
        remove_btn.parentNode.removeChild(remove_btn);
    });
}

function add_writer_textbox() {
    const original = document.getElementById("writer_div");
    const clone = original.cloneNode(true);
    original.after(clone);

    const new_rmv_btn = document.createElement("button");
    new_rmv_btn.type = "button";
    new_rmv_btn.innerHTML = "-";
    clone.appendChild(new_rmv_btn);

    new_rmv_btn.addEventListener("click", function () {
        const remove_btn = this.parentNode;
        remove_btn.parentNode.removeChild(remove_btn);
    });
}

function add_vocaro_textbox() {
    const original = document.getElementById("vocaro_div");
    const clone = original.cloneNode(true);
    original.after(clone);

    const new_rmv_btn = document.createElement("button");
    new_rmv_btn.type = "button";
    new_rmv_btn.innerHTML = "-";
    clone.appendChild(new_rmv_btn);

    // const element = document.getElementById("composer_div")
    // element.append(new_div)

    new_rmv_btn.addEventListener("click", function () {
        const remove_btn = this.parentNode;
        remove_btn.parentNode.removeChild(remove_btn);
    });
}

function debug() {
    let a = document.querySelectorAll(".vocaro_textbox");
    console.log(a.length)
    console.log(a[0].value)
}