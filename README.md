# 개요

보카로 가사 위키의 서식으로 변환해 주는 윈도우즈 앱 및 웹 앱입니다.

이 깃허브는 개발만 이뤄지는 곳입니다.

따라서, 깃허브의 버전과 릴리즈 버전은 차이가 있을 수 있습니다. 보통 깃허브가 버전이 더 높고 기능이 더 있습니다.

-   깃허브 버전: [보카로 가사 위키 번역가 툴(깃허브 버전)](https://qlife1146.github.io/vocaro_wiki_formatter/)

-   릴리즈 버전: [보카로 가사 위키 번역가 툴(릴리즈 버전)](http://vocaro.wikidot.com/guide:wiki-translating-tool)

이 README 문서는 깃허브 버전 기준으로 작성됐습니다.

문제와 문의가 있으면 디스코드 `루카#0398`로 연락 바랍니다.

-   개발: Luca(qlife1146)
-   css 도움: Devan

# 1. 웹 앱

## 메뉴 설명

`원본 가사`: `원본 가사` 밑에 있는 텍스트 박스. 가사를 작성할 수 있는 칸.

`맞춤법 수정용`: `원본 가사`에 작성된 번역 가사만 따로 모아서 보여주는 칸. 수정을 할 수 있으며, 이후 `정보까지 변환` 버튼을 누르면 수정된 가사로 적용.

`초기화`: `원본 가사`와 `완성 가사`을 포함한 모든 칸을 초기화하는 버튼. 누른다고 바로 초기화 되지는 않는다.

`완성 가사`: `원본 가사`에서 서식이 추가된 글이 들어간 텍스트 박스. 수정은 할 수 없습니다.

`맞춤법 검사기용`: `원본 가사`에서 한글 번역된 가사만 따로 보여주는 버튼.

`정보까지 변환`: `원본 가사`에 템플릿을 적용하여 보여주는 버튼. `맞춤법 수정용` 칸에 조건이 맞도록 작성됐으면 수정된 가사로 적용된다.

## 사용방법

[보카로 가사 위키 번역가 툴(깃허브 버전)](https://qlife1146.github.io/vocaro_wiki_formatter/)이나 [보카로 가사 위키 번역가 툴(릴리즈 버전)](http://vocaro.wikidot.com/guide:wiki-translating-tool) 링크로 접속합니다.

`원본 가사`에 자유롭게 가사를 작성하고 `변환`을 누르면 `완성 가사`에 서식이 들어간 가사가 나옵니다.

~~`클립보드로 복사`를 누르면 복사가 되어 클립보드로 들어갑니다. 보카로 위키에 가서 바로 붙여넣기를 하면 됩니다.~~

~~`변환` 옆 ~~`초기화`를 누르면 위, 아래 텍스트 박스가 빈 상태로 돌아갑니다. 바로 삭제를 방지하기 위해 한 번 더 물어봅니다.

~~그래도 혹시나 눌렀다면 `되돌리기`로 복구할 수 있습니다.~~

제목, 비디오 타입, 영상 아이디, 작곡가, 작사가, 가수를 작성하고 `정보까지 변환` 버튼을 누르면 보카로 가사 위키 template에 맞게 변환해 줍니다.

-   제목 등의 작성 예시

    제목 `한글 제목`

    비디오 타입 `유튜브`

    영상 아이디 `this_is_video_id`

    작곡가 `[[[artist:영어 이름|한글 이름]]]`

    작사가 `[[[artist:영어 이름|한글 이름]]]`

    가수 `하츠네 미쿠`

    가사

    ```
    원어 가사입니다.
    발음 가사입니다.
    번역 가사입니다.
    ```

-   `정보까지 변환` 동작 후 예시 내용

```
+ 정보
[[include component:info-table-start
|title=한글 제목
|videotype=youtube
|video-id=this_is_video_id
]]
[[row]]
    [[hcell class="composer-cell"]] 작곡 [[/hcell]]
    [[cell]]
        [[[artist:영어 이름|한글 이름]]]
    [[/cell]]
[[/row]][[row]]
    [[hcell class="writer-cell"]] 작사 [[/hcell]]
    [[cell]]
        [[[artist:영어 이름|한글 이름]]]
    [[/cell]]
[[/row]][[row]]
[[hcell class="vocaro-cell"]] 노래 [[/hcell]]
    [[cell]]
        [[[hastune-miku|]]]
    [[/cell]]
[[/row]]
[[include component:info-table-end]]

+ 가사
|| 원어 가사입니다. ||
|| 발음 가사입니다. ||
|| 번역 가사입니다. ||
```
맞춤법 검사기를 더욱 쉽게 사용할 수 있도록 `맞춤법 검사기용` 버튼을 누르면 `맞춤법 수정용` 칸에 번역 가사만 보여줍니다. 여기서 수정을 하고 `정보까지 변환` 버튼을 누르면 수정한 가사가 적용됩니다.


# 2. 윈도우즈 앱

윈도우즈 앱은 윈도우즈의 뛰어난 보안으로 일반인의 앱은 위험한 앱으로 판단해 격리 조치됩니다. 격리를 해제해야 사용할 수 있어서 조금 번거롭습니다. 포터블로만 사용하시고 웹 앱 사용하길 권장합니다.

## 구성 설명(압축 해제 후)

`kasi.txt`: 가사를 작성하는 텍스트 파일. 잃어버려도 같은 이름으로 만들면 된다.

`formatting.exe`: `kasi.txt`안에 있는 가사에 서식을 추가해 주는 실행 파일.

## 사용방법

[다운로드](https://github.com/qlife1146/vocaro_wiki_formatter/releases/tag/v1.0,) 혹은 오른쪽의 `Release` 밑에 `x.x 배포판`에 들어가 `Assets` 밑에 `vocaro_formatting_x.x.zip`를 받으시고 압축을 해제합니다.

격리 해제

1. 윈도우즈 버튼
2. 설정
3. 바이러스 및 위협 방지
4. 바이러스 및 위협 방지 설정: 설정 관리
5. 제외: 제외 추가 또는 제거
6. 제외 사항 추가
7. 파일
8. `formatting.exe`을 찾아서 추가

(최초 1회만 하면 됩니다.)

`kasi.txt` 텍스트 파일에 원하는 방식대로 가사를 작성하고 저장한 후에 `vocaro_formatting.exe`를 실행하면 `kasi.txt`의 서식이 바뀝니다.

**꼭 한 폴더 내에 `vocaro_formatting.exe`와 `kasi.txt`가 같이 있어야 합니다.**

# 3. 기타

## 주의 사항

이 실행 파일은 강제 개행(엔터)의 삭제 및 수직선 기호(vertical bar/pipe) `||`를 글 양옆에 추가해 줍니다.
그 외의 형식은 제대로 동작하지 않을 수 있습니다.

## 예시

-   `원본 가사`의 예시 내용

```
歌の歌詞です
우타노 카시데스
노래의 가사입니다.

ボカロウィキ
보카로 위키
보카로 wiki
```

-   동작 후 예시 내용

```
|| 歌の歌詞です ||
|| 우타노 카시데스 ||
|| 노래의 가사입니다 ||
|| ボカロウィキ ||
|| 보카로 위키 ||
|| 보카로 wiki ||
```

이처럼 본인의 편의를 위해 강제 개행(엔터)을 했던 부분의 삭제 및 `|| 내용 ||`으로 형식을 변환해 줍니다.

## 버전 관리

-   v1.0 윈도우즈 배포판(2022.10.24)
    -   윈도우즈 버전 앱 배포
-   v1.0.0 웹(2022.10.25)
    -   웹 버전 배포
    -   v1.0.3 웹(2022.10.25)
        -   가시적 버전 관리를 위해 버전 추가
        -   초기화, 되돌리기, 클립보드로 복사 기능 추가
        -   기타 버그 수정
    -   v1.1.0 웹(2022.11.01)
        -   버전 관리를 작성하기 쉽도록 JS로 이동
        -   클립보드 복사 기능이 '보카로 가사 위키 내장 버전'에서 작동하지 않아 변경(이 또한 작동하지 않으면 수정 예정)
        -   '치경구개음 다음의 경구개 접근음'에 의거한 오타 수정 기능 추가
    -   v1.2.0 웹(2022.11.01)
        -   오타 수정에 대응하는 발음 추가 및 README에 정리
        -   html에 주의사항 추가 및 오타 수정에 대응하는 발음을 확인할 수 있는 링크 추가
    -   v1.3.0 웹(2022.11.04)
        -   `변환` 기능에 단축키 추가 (ctrl + space)
        -   발음 줄(2, 5, 8⋯ 번째 줄)에 하이픈(-)이 존재하면 경고를 띄웁니다. (보카로 가사 위키 정책상 발음에 하이픈은 들어가지 않는 것이 원칙입니다.)
        -   로딩 속도 개선을 위해 비동기 방식으로 변경했습니다.
    -   v1.4.0 웹(2022.11.10)
        -   더욱 쉬운 작성을 위해 정보까지 완성을 해주는 기능 추가(제목, 비디오 타입, 영상 아이디 등을 미리 적으면 그것들까지 서식에 맞게 변환합니다.) 다만, 작곡가/작사가와 미리 지정된 가수는 링크를 인식 못하니 `미리보기`를 통해 링크가 제대로 작동하는지 확인하시길 바랍니다.
        -   더 나은 개발 방향을 위해 협의를 거쳐 작곡가/작사가는 예시와 함께 필요한 모든 것을 쓰는 방향으로 정했습니다.
        -   리스트에 등록된 가수는 최근 가장 많이 사용한 순+100번 이상으로 정해진 리스트입니다. 그 외는 수동으로 작성해 주세요.
        -   가시적인 UX를 기대한 placeholder 추가 및 영상 있음/없음, 가수 자동/수동일 때 input 박스가 꺼지고 켜지는 등의 상호작용 추가
        -   그 외 개발 중에 있던 버그 수정
    -   v1.4.1 웹(2022.11.10)
        -   html, jsp의 변수 이름 및 기타 다듬기 작업
    -   v1.5.0 웹(2022.11.10)
        -   가수 검색에 자동 완성 기능을 추가했습니다. 그에 따라 jsp(자동 완성 기능, 목록), css(자동 완성 디자인) 파일 총 3개가 추가됐습니다.
    -   v1.5.1 웹(2022.11.12)
        -   자동 완성 기능에 수정이 있습니다. 기존에는 (예시: 하츠네 미쿠) `hatsu`처럼 가장 앞 철자가 맞아야 검색이 됐지만 이젠 `tsu`처럼 중간 철자를 써도 검색이 됩니다.
    -   v1.6.0 웹(2022.11.15)
        -   자동 완성 기능에 수정이 있습니다. 리스트 순서를 abc 순으로 정렬했습니다.
        -   ~~개발자가 공부를 했습니다.~~ 작곡가/작사가에도 자동 완성 기능이 추가되었습니다. 그로 인한 개발자의 편의성을 위해 크롤링 파이썬 파일과 아티스트 리스트가 담긴 jsp 파일이 추가되었습니다.
        -   쓰지 않는 파일들 정리를 위해 dump 폴더를 추가해 넣었습니다.
    -   v1.6.1 웹(2022.11.16)
        -   ~~개발자가 정신이 없습니다.~~ 버전 관리에 문제를 깨닫고 버전 정리를 했습니다. 버전 넘버는 (그러면 안 되지만) 1.0.0부터 전부 바뀌었으며, 앞으로도 주.부.수 단위로 관리됩니다.
        -   개발의 편의상 보컬로이드 자동 완성 기능의 abc 순 정렬은 폐기했습니다. 더불어 보컬로이드에는 이름은 다르나 링크는 같은 경우가 있는데 제작사 분류에 따른 것이기에 같이 뒀습니다(예: tohoku-kiritan > 토호쿠 키리탄 3개 + AI 키리탄). 일단 제가 파악하기로는 전부 하나의 링크로 이어지니 한국어 이름은 크게 상관이 없습니다.
        -   크롤링 파이썬 파일을 추가한 줄 알았는데 안 했더라고요. 이번에 추가했습니다.
        -   크롤링 파일에 변화가 생겨 필요없어진 파일을 삭제했습니다.
        -   페이지에 안내 문구가 수정 및 추가되었습니다.
        -   자동 완성 기능의 변수 키워드가 조금 수정되었습니다.
    -   v1.6.2 웹(2022.11.17)
        -   보카로 자동 완성 기능에 실수가 있어서 작동하지 않았던 문제를 고쳤습니다.
    -   v1.7.0 웹(2022.11.28)
        -   작곡가/작사가/가수의 여러 명 대응을 위한 기능이 추가되었습니다. `+`와 `-`로 칸을 추가/삭제할 수 있습니다.
    -   v1.7.1 웹(2022.12.07)
        -   jsp 파일을 js로 바꾸었습니다.
    -   v1.8.0 웹(2023.02.15)
        -   ~~백만 년 만의 업데이트~~ 초기화를 하면 작성된 가사뿐만 아니라 제목, 아티스트 정보 등 모든 칸이 비워집니다.
        - 이제 링크 전체를 넣어도 됩니다. 물론 전체가 아니어도 됩니다.
        - `되돌리기`(복구) 기능을 삭제했습니다. 대신 초기화에 경고 단계를 추가했습니다.
        - 작곡가/작사가/가수의 `+`, `-` 버튼을 재배치하였습니다.
    -   v1.8.1 웹(2023.02.15)
        -   이제 `+` 버튼을 누르면 빈칸으로 생성됩니다.
        -   `+`, `-` 버튼 기능의 통합으로 코드가 줄었습니다. 그리고 사용하지 않는 코드도 삭제했습니다.
        -   `-` 버튼으로 삭제할 때 두번째 클릭부터 작동하던 문제를 해결했습니다.
    -   v1.8.2 웹(2023.02.16)
        -    ~~아주 사소한~~ 패치노트 안내를 유도하는 글이 추가됐습니다.
    -   v1.8.3 웹(2023.02.18)
        -    ~~더 사소한~~ 링크 작성에 혼동 방지를 위해 예시를 추가했습니다.
    -   v1.8.4 웹(2023.03.04)
        -    보카로 위키 릴리즈를 위한 사전 준비(최신화 등)
    -   v1.8.5 웹(2023.03.12)
        -    경고 및 권고사항 추가
        -    README의 업데이트 예정 목록 추가
    -   v1.8.6 웹(2023.03.20)
        -    디자인 변경
        -    아티스트에 같은 목록이 2개씩 나오던 문제 수정
    -   v1.9.0 웹(2023.03.23)
        -    이제 치경구개음 다음의 경구개 접근음 오타 수정이 일본어 가사에만 적용이 됩니다. 하지만, 줄 수를 파악하는 형식이기에 꼭 세 줄 형식(일어|음역|가사)을 맞춰주세요.
        -    세 줄 형식을 체크하는 기능이 추가되었고, 세 줄 형식이 아니면 경고를 합니다(제목 등이 없을 때처럼 아예 작동을 하진 않습니다).
        -    `변환` 버튼은 필요가 없을 것 같아서 삭제를 했습니다. 그러면서 `초기화` 버튼이 맨 앞으로 오게 되었습니다. 하지만 1.8.0에서 추가한 초기화 경고 단계가 있으니 불의의 사고는 없을 거라 믿습니다.
    -   v1.10.0 웹(2023.08.05)
        -    맞춤법 검사기에 더 쉽게 넣을 수 있도록 번역한 가사만 보여주는 창을 만들었습니다. `맞춤법 검사용` 버튼을 누르면 `맞춤법 검사용 가사` 밑에 번역한 가사만 나오며 **자동으로 클립보드에 저장**됩니다.
        -    이후에 수정하고 싶은 부분이 있으면 `맞춤법 검사용 가사`에 바로 수정하고, `맞춤법 검사 완료(정보까지 변환)` 버튼을 누르면 수정한 가사가 적용된 상태로 전과 같이 완성해줍니다. 물론 **자동으로 클립보드에 저장**까지 됩니다.
        -    위와 같은 기능을 위해 `맞춤법 수정용` 칸과 `맞춤법 검사용 가사` 버튼이 추가되었습니다.
        -    영상 아이디 작성 방법을 줄였습니다. 자세한 내용은 `영상 아이디` 옆의 예시를 참고해 주세요.
        -    구형 방식으로 작동하던 클립보드 저장을 `Clipboard API`로 전환해 브라우저 호환성을 높였습니다.
        -    맞춤법 검사 편의성을 위한 기능 추가로 ctrl + space로 변환하던 기능을 지웠습니다.
        -    아티스트와 음성 합성 엔진 리스트를 업데이트했습니다.


## 치경구개음 다음의 경구개 접근음 오타 수정에 대응하는 발음 정리

-   가나(仮名) 순([참조: 가나 대조표](http://vocaro.wikidot.com/guide:how-to-notate-ja-to-ko,))
    -   쟈 → 자
    -   쟛 → 잣
    -   쟌 → 잔
    -   쥬 → 주
    -   쥿 → 줏
    -   쥰 → 준
    -   죠 → 조
    -   죳 → 좃
    -   죤 → 존
    -   챠 → 차
    -   챳 → 찻
    -   챤 → 찬
    -   츄 → 추
    -   츗 → 춧
    -   츈 → 춘
    -   쵸 → 초
    -   춋 → 촛
    -   쵼 → 촌

※ 단순한 글자 비교이기에 외래어에는 대응하지 않습니다. 주의 바랍니다.

---

# 4. 업데이트 예정

-   [x] 일어 가사에만 치경구개음 적용(현재는 한국어 가사에도 적용돼서 '있죠'도 '있조'로 변환됨).
-   [ ] 파이썬 크롤링을 js에서 구동하는 기능
-   [x] 툴팁 추가(유튜브 링크/니코동 링크 가이드 외 자세한 설명을 mouse hover 툴팁에 넣을 예정)
-   [x] `-` 버튼이 두 번째 클릭부터 작동하는 문제 해결
-   [x] 추가/삭제 버튼 레이아웃 재조정
-   [x] 니코동, 유튜브 링크를 그대로 붙여도 필요 없는 부분을 지워주는 기능
-   [x] 초기화에 정보 파트도 지울 수 있도록 추가
-   [ ] ~~태그 추천(보카로가 2개 이상 쓰일 때 듀엣, 3인까지 대응하도록)~~ 태그 포맷이 다르기에 불가능하다고 판단.

수정 날짜: 2023.02.15
