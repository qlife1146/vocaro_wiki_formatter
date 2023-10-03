//ctrl+space 단축키 기능
// document.addEventListener("keydown", function (event) {
//     const key = event.which || event.keyCode;
//     const ctrl = event.ctrlKey ? event.ctrlKey : key === 17 ? true : false;
//     if (key == 32 && ctrl) {
//         formatting();
//     }
// });

window.onload = function () {
    //버전관리 부분
    const version = "v1.12.1"; //
    document.getElementById(
        "version"
    ).innerHTML = `<h4 class='version' id='version'>${version}</h4`;

    //input_text의 display 여부
    document.getElementById("video_id_textbox").disabled = false;
};

//빈 줄 삭제
function remove_blank_line(original_list) {
    let result_list = [];
    for (let i = 0; i < original_list.length; i++) {
        if (original_list[i] != "") {
            result_list.push(original_list[i]);
        }
    }

    if (result_list.length % 3 !== 0) {
        alert(
            "가사의 형식이 세 줄 형식(일어|음역|가사)이 아닙니다.\n" +
                "이 형식이 어긋나면 오자 검출이 어렵습니다.\n" +
                "영상 속 글의 번역(일어+번역만 있는 형태)은 잠시 빼주세요.\n"
        );
    }
    return result_list;
}

// [변환 버튼]가사를 서식에 맞춰주는 함수
function formatting() {
    // for_spell_check();
    //html 변수
    const original_text = document.getElementById("original_textarea").value; //작성한 가사
    let finish_text = document.getElementById("finish_textarea").value; //완성된 가사
    let spellCheck_text = document.getElementById("spellCheck_textarea").value;

    //함수 내부 변수
    let original_list = original_text.split("\n"); //작성한 가사를 \n 기준으로 분리 후 저장
    let result_list = remove_blank_line(original_list); //빈 줄이 없는 상태 저장
    let spellCheck_list = spellCheck_text.split("\n");

    if (spellCheck_text != "") {
        if (result_list.length / 3 == spellCheck_list.length) {
            for (let i = 0; i < spellCheck_list.length; i++) {
                result_list[i * 3 + 2] = spellCheck_list[i];
            }
        } else {
            alert(
                "맞춤법 검사용의 줄이 원본 가사와 맞지 않습니다.\n" +
                    "'맞춤법 검사용 가사' 버튼을 다시 눌러 진행하세요."
            );
        }
    } else if (spellCheck_text.value > 0) {
        alert("맞춤법 검사용을 사용하지 않으실거면 확실히 비워주세요.");
    }

    //가나 대조표에 의거한 오자 수정
    for (let i = 1; i < result_list.length; i += 3) {
        result_list[i] = result_list[i]
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
            .replace(/죳/g, "좃");
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
        i < result_list.length
            ? (finish_text += "|| " + result_list[i] + " ||\n")
            : (finish_text += "|| " + result_list[i] + " ||");
    }
    document.getElementById("finish_textarea").value = finish_text;
    document.getElementById("finish_textarea").value = finish_text.slice(0, -1);

    return finish_text;
}

//[정보까지 변환 버튼]정보까지 함께 서식에 맞춰주는 함수
function formatting_with_information() {
    const finish_textarea = document.getElementById("finish_textarea");

    let song_title_text = document.getElementById("song_title_textbox").value;
    // let video_type_text = document.getElementById("video_type_select").value;
    let video_type_text = document.querySelector(
        'input[name="video_type"]:checked'
    ).value;
    let video_id_text = link_formatting();
    let composer_text = document.querySelectorAll(".composer_textbox");
    let writer_text = document.querySelectorAll(".writer_textbox");
    let vocaro_text = document.querySelectorAll(".vocaro_textbox");

    let alert_list = [];
    let info_format = "+ 정보\n" + "[[include component:info-table-start\n";

    if (song_title_text == "") {
        alert_list.push("음악 제목 없음");
    } else {
        info_format += "|title=" + song_title_text + "\n";
    }
    // if (video_type_text == "nicovideo" || video_type_text == "youtube") {
    //     if (video_id_text == "") {
    //         alert_list.push("영상 아이디 없음");
    //     } else {
    //         info_format +=
    //             "|videotype=" +
    //             video_type_text +
    //             "\n" +
    //             "|video-id=" +
    //             video_id_text +
    //             "\n" +
    //             "]]\n";
    //     }
    // } else if (video_type_text == "novideo" || video_type_text == "false") {
    //     info_format += "|videotype=" + video_type_text + "\n" + "]]\n";
    // }
    if (video_type_text == "nicovideo" || video_type_text == "youtube") {
        if (video_id_text == "") {
            alert_list.push("영상 아이디 없음");
        } else {
            info_format +=
                "|videotype=" +
                video_type_text +
                "\n" +
                "|video-id=" +
                video_id_text +
                "\n" +
                "]]\n";
        }
    } else if (video_type_text == "novideo" || video_type_text == "false") {
        info_format += "|videotype=" + video_type_text + "\n" + "]]\n";
    }
    info_format += "[[row]]\n";

    info_format +=
        '    [[hcell class="composer-cell"]] 작곡 [[/hcell]]\n' +
        "    [[cell]]\n";
    for (let i = 0; i < composer_text.length; i++) {
        if (composer_text[i].value !== "") {
            info_format += "        [[[" + composer_text[i].value + "|]]]\n";
        } else {
            alert_list.push("작곡가 이름 없음");
        }
    }
    info_format += "    [[/cell]][[/row]][[row]]\n";

    info_format +=
        '    [[hcell class="writer-cell"]] 작사 [[/hcell]]\n' +
        "    [[cell]]\n";
    for (let i = 0; i < writer_text.length; i++) {
        if (writer_text[i].value !== "") {
            info_format += "        [[[" + writer_text[i].value + "|]]]\n";
        } else {
            alert_list.push("작사가 이름 없음");
        }
    }
    info_format += "    [[/cell]][[/row]][[row]]\n";

    info_format +=
        '    [[hcell class="vocaro-cell"]] 노래 [[/hcell]]\n' +
        "    [[cell]]\n";
    for (let i = 0; i < vocaro_text.length; i++) {
        if (vocaro_text[i].value !== "") {
            info_format += "        [[[" + vocaro_text[i].value + "|]]]\n";
        } else {
            alert_list.push("보카로 이름 없음");
        }
    }
    info_format +=
        "    [[/cell]]\n" +
        "[[/row]]\n" +
        "[[include component:info-table-end]]\n\n";

    if (alert_list.length > 0) {
        alert(alert_formatting(alert_list));
    }

    info_format += "+ 가사\n";

    let lyrics = formatting();

    finish_textarea.value = "";
    finish_textarea.value = info_format + lyrics;

    finish_textarea.value = finish_textarea.value.slice(0, -1);

    copy_to_clipboard("finish_textarea");
}

//[초기화 버튼]초기화 함수
function reset() {
    let original = document.getElementById("original_textarea");
    let finish = document.getElementById("finish_textarea");
    let spell = document.getElementById("spellCheck_textarea");
    let title = document.getElementById("song_title_textbox");
    let videoId = document.getElementById("video_id_textbox");
    let composer = document.getElementById("composer_textbox");
    let writer = document.getElementById("writer_textbox");
    let vocaro = document.getElementById("vocaro_textbox");

    const check = confirm("초기화 진행을 원하면 [확인]을 눌러주세요.");

    if (check) {
        location.reload();
        window.scrollTo(0, 0);
        // original.value = "";
        // finish.value = "";
        // spell.value = "";
        // title.value = "";
        // videoId.value = "";
        // composer.value = "";
        // writer.value = "";
        // vocaro.value = "";

        // removeAllTextboxAndContainer("composer_div");
        // removeAllTextboxAndContainer("writer_div");
        // removeAllTextboxAndContainer("vocaro_div");
    }
}

// function removeAllTextboxAndContainer(containerId) {
//     const container = document.getElementById(containerId);
//     while (container.childElementCount > 1) {
//         container.removeChild(container.lastElementChild);
//     }
// }

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
        i < alert_list.length
            ? (output_string += alert_list[i] + "\n")
            : (output_string += alert_list[i]);
    }
    return output_string;
}

function add_textbox(parentId, originalId, textboxClass) {
    const parent = document.getElementById(parentId);
    const original = document.getElementById(originalId);
    const clone = original.cloneNode(true);
    const clonedTextBox = clone.querySelector("." + textboxClass);
    clonedTextBox.value = "";
    const lastChild = parent.lastElementChild;
    parent.insertBefore(clone, lastChild.nextSibling);
}

function rmv_textbox(parentId) {
    const parent = document.getElementById(parentId);
    if (parent.childElementCount > 1) {
        parent.lastElementChild.remove();
    }
}

//영상 아이디 포매팅
function link_formatting() {
    let link = document.getElementById("video_id_textbox").value;
    // let video_type_text = document.getElementById("video_type_select").value;
    let video_type_text = document.querySelector(
        'input[name="video_type"]:checked'
    ).value;

    if (link !== "") {
        if (video_type_text == "nicovideo") {
            link = link.replace(/.*\/watch\//, "").replace(/\?.*/, "");
        } else if (video_type_text == "youtube") {
            if (link.includes("?si=")) {
                link = link.replace(/\?si=.*$/, "");
                link = link.substring(link.lastIndexOf("/") + 1);
            } else if (link.includes("watch?")) {
                if (link.includes("&list=")) {
                    link = link.replace(/&list=.*/, "");
                }
                if (link.includes("&index=")) {
                    link = link.replace(/&index=.*/, "");
                }
                if (link.includes("&t=")) {
                    link = link.replace(/&t=.*/, "");
                }
                link = link.substring(link.lastIndexOf("v=") + 2);
            } else {
                link = link.substring(link.lastIndexOf("/") + 1);
            }
        }
    }
    return link;
}

//맞춤법 검사기용
function for_spell_check() {
    const spellCheck_textarea = document.getElementById("spellCheck_textarea");
    let original_text = document.getElementById("original_textarea").value; //작성한 가사
    let original_list = original_text.split("\n"); //작성한 가사를 담은 리스트
    let result_list = remove_blank_line(original_list); //완성된 가사를 담을 리스트
    let spell_list = [];

    if (spellCheck_textarea !== "") {
        spellCheck_textarea.value = "";
    }

    for (let i = 2; i < result_list.length; i += 3) {
        spell_list.push(result_list[i]);
    }

    for (let i = 0; i < spell_list.length; i++) {
        spellCheck_textarea.value += spell_list[i] + "\n";
    }

    spellCheck_textarea.value = spellCheck_textarea.value.slice(0, -1);
    copy_to_clipboard("spellCheck_textarea");
}

//클립보드 복사 기능
function copy_to_clipboard(where) {
    const textarea = document.getElementById(where);
    textarea.select();
    // textarea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    textarea.setSelectionRange(0, 0);
}

function debug() {
    const original_text = document.getElementById("original_textarea").value; //작성한 가사
    let finish_text = document.getElementById("finish_textarea").value; //완성된 가사
    let spellCheck_text = document.getElementById("spellCheck_textarea").value;

    // //함수 내부 변수
    let original_list = original_text.split("\n"); //작성한 가사를 담은 리스트
    let result_list = remove_blank_line(original_list); //완성된 가사를 담을 리스트
    let spellCheck_list = spellCheck_text.split("\n");

    console.log(finish_text.length);
    console.log(result_list.length);
    console.log(spellCheck_list.length);
}
