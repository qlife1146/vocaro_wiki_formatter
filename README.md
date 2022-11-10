# 개요

보카로 가사 위키의 서식으로 변환해 주는 윈도우즈 앱 및 웹 앱입니다.

이 깃허브는 개발만 이뤄지는 곳입니다.

따라서, 깃허브의 버전과 릴리즈 버전은 차이가 있을 수 있습니다.

 - 깃허브 버전: [보카로 가사 위키 번역가 툴(깃허브 버전)](https://qlife1146.github.io/vocaro_wiki_formatter/)

 - 릴리즈 버전: [보카로 가사 위키 번역가 툴(릴리즈 버전)](http://vocaro.wikidot.com/guide:wiki-translating-tool)

이 README 문서는 깃허브 버전 기준으로 작성됐습니다.

문제와 문의가 있으면 디스코드 `루카#0398`로 연락 바랍니다.

# 1. 웹 앱

## 메뉴 설명

`원본 가사`: <mark>`원본 가사` 밑에 있는 텍스트 박스</mark>. 가사를 작성할 수 있는 칸.

`변환`: `원본 가사`에 서식을 추가할 수 있는 버튼. `완성 가사`에서 확인 가능.

`초기화`: `원본 가사`와 `완성 가사`를 초기화하는 버튼.

`되돌리기`: 실수로 `초기화`를 눌렀을 때 되돌릴 수 있는 버튼.

`완성 가사`: `원본 가사`에서 서식이 추가된 글이 들어간 텍스트 박스. 수정은 할 수 없습니다.

`클립보드로 복사`: `완성 가사`의 글을 바로 복사(Copy) 해주어 바로 붙여넣기(Paste)를 할 수 있습니다.

`정보까지 변환`: 제목, 작곡가, 작사가 등의 틀까지 변환해 주는 버튼.

## 사용방법

[보카로 가사 위키 번역가 툴(깃허브 버전)](https://qlife1146.github.io/vocaro_wiki_formatter/)이나 [보카로 가사 위키 번역가 툴(릴리즈 버전)](http://vocaro.wikidot.com/guide:wiki-translating-tool) 링크로 접속합니다.

`원본 가사`에 자유롭게 가사를 작성하고 `변환`을 누르면 `완성 가사`에 서식이 들어간 가사가 나옵니다.

`클립보드로 복사`를 누르면 복사가 되어 클립보드로 들어갑니다. 보카로 위키에 가서 바로 붙여넣기를 하면 됩니다.

`변환` 옆 `초기화`를 누르면 위, 아래 텍스트 박스가 빈 상태로 돌아갑니다. 클릭에 주의해 주세요.

그래도 혹시나 눌렀다면 `되돌리기`로 복구할 수 있습니다.

```
`A`를 쓴 상태로 `초기화`를 누른 후에 `B`를 쓰고 다시 `초기화`를 누르면 `되돌리기`는 `B`로 되돌립니다.
하지만, `A`를 쓴 상태로 `초기화`를 누른 후에 빈칸에서 다시 `초기화`를 누르면 `A`를 되돌립니다.
```

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

- v1.0 윈도우즈 배포판(2022.10.24)
  - 윈도우즈 버전 앱 배포
- v1.0.0 웹(2022.10.25)
  - 웹 버전 배포
  - v1.0.3 웹(2022.10.25)
    - 가시적 버전 관리를 위해 버전 추가
    - 초기화, 되돌리기, 클립보드로 복사 기능 추가
    - 기타 버그 수정
  - v1.1.0 웹(2022.11.01)
    - 버전 관리를 작성하기 쉽도록 JS로 이동
    - 클립보드 복사 기능이 '보카로 가사 위키 내장 버전'에서 작동하지 않아 변경(이 또한 작동하지 않으면 수정 예정)
    - '치경구개음 다음의 경구개 접근음'에 의거한 오타 수정 기능 추가
  - v1.1.1 웹(2022.11.01)
    - 오타 수정에 대응하는 발음 추가 및 README에 정리
    - html에 주의사항 추가 및 오타 수정에 대응하는 발음을 확인할 수 있는 링크 추가
  - v1.1.2 웹(2022.11.04)
    - `변환` 기능에 단축키 추가 (ctrl + space)
    - 발음 줄(2, 5, 8⋯ 번째 줄)에 하이픈(-)이 존재하면 경고를 띄웁니다. (보카로 가사 위키 정책상 발음에 하이픈은 들어가지 않는 것이 원칙입니다.)
    - 로딩 속도 개선을 위해 비동기 방식으로 변경했습니다.
  - v1.1.3 웹(2022.11.10)
    - 더욱 쉬운 작성을 위해 정보까지 완성을 해주는 기능 추가(제목, 비디오 타입, 영상 아이디 등을 미리 적으면 그것들까지 서식에 맞게 변환합니다.)   다만, 작곡가/작사가와 미리 지정된 가수는 링크를 인식 못하니 `미리보기`를 통해 링크가 제대로 작동하는지 확인하시길 바랍니다.
    - 더 나은 개발 방향을 위해 협의를 거쳐 작곡가/작사가는 예시와 함께 필요한 모든 것을 쓰는 방향으로 정했습니다.
    - 리스트에 등록된 가수는 최근 가장 많이 사용한 순+100번 이상으로 정해진 리스트입니다. 그 외는 수동으로 작성해 주세요.
    - 가시적인 UX를 기대한 placeholder 추가 및 영상 있음/없음, 가수 자동/수동일 때 input 박스가 꺼지고 켜지는 등의 상호작용 추가
    - 그 외 개발 중에 있던 버그 수정
  - v1.1.3.1 웹(2022.11.10)
    - html, jsp의 변수 이름 및 기타 다듬기 작업
  - v1.1.4 웹(2022.11.10)
    - 가수 검색에 자동 완성 기능을 추가했습니다. 그에 따라 jsp(자동 완성 기능, 목록), css(자동 완성 디자인) 파일 총 3개가 추가됐습니다.

## 치경구개음 다음의 경구개 접근음 오타 수정에 대응하는 발음 정리
- 가나(仮名) 순([참조: 가나 대조표](http://vocaro.wikidot.com/guide:how-to-notate-ja-to-ko,))
  - 챠 → 차
  - 챤 → 찬
  - 챳 → 찻
  - 츄 → 추
  - 츈 → 춘
  - 츗 → 춧
  - 쵸 → 초
  - 쵼 → 촌
  - 춋 → 촛
  - 쟈 → 자
  - 쟌 → 잔
  - 쟛 → 잣
  - 쥬 → 주
  - 쥰 → 준
  - 쥿 → 줏
  - 죠 → 조
  - 죤 → 존
  - 죳 → 좃

※ 단순한 글자 비교이기에 외래어에는 대응하지 않습니다. 주의 바랍니다.

***
수정 날짜: 2022.11.10
