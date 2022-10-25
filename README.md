# 개요

보카로 가사 위키의 서식으로 변환해 주는 윈도우즈 앱 및 웹 앱입니다.

# 1. 웹 앱

## 메뉴 설명

`원본 가사`: <mark>`원본 가사` 밑에 있는 텍스트 박스</mark>. 가사를 작성할 수 있는 칸.

`변환`: `원본 가사`에 서식을 추가할 수 있는 버튼. `완성 가사`에서 확인 가능.

`초기화`: `원본 가사`와 `완성 가사`를 초기화하는 버튼.

`되돌리기`: 실수로 `초기화`를 눌렀을 때 되돌릴 수 있는 버튼.

`완성 가사`: `원본 가사`에서 서식이 추가된 글이 들어간 텍스트 박스. 수정은 할 수 없다.

`클립보드로 복사`: `완성 가사`의 글을 바로 복사(Copy) 해주어 바로 붙여넣기(Paste)를 할 수 있다.


## 사용방법

[보카로 가사 위키 번역가 툴](https://qlife1146.github.io/vocaro_wiki_formatter/) 링크로 접속합니다.

`원본 가사`에 자유롭게 가사를 작성하고 `변환`을 누르면 `완성 가사`에 서식이 들어간 가사가 나옵니다.

`클립보드로 복사`를 누르면 복사가 되어 클립보드로 들어갑니다. 보카로 위키에 가서 바로 붙여넣기를 하면 됩니다.

`변환` 옆 `초기화`를 누르면 위, 아래 텍스트 박스가 빈 상태로 돌아갑니다. 클릭에 주의해 주세요.

그래도 혹시나 눌렀다면 `되돌리기`로 복구할 수 있습니다.

```
`A`를 쓴 상태로 `초기화`를 누른 후에 `B`를 쓰고 다시 `초기화`를 누르면 `되돌리기`는 `B`로 되돌립니다.
하지만, `A`를 쓴 상태로 `초기화`를 누른 후에 빈칸에서 다시 `초기화`를 누르면 `A`를 되돌립니다.
```

# 2. 윈도우즈 앱

## 구성 설명(압축 해제 후)

`kasi.txt`: 가사를 작성하는 텍스트 파일. 잃어버려도 같은 이름으로 만들면 된다.

`formatting.exe`: `kasi.txt`안에 있는 가사에 서식을 추가해 주는 실행 파일.

## 사용방법

[다운로드](https://github.com/qlife1146/vocaro_wiki_formatter/releases/tag/v1.0,) 혹은 오른쪽의 `Release` 밑에 `x.x 배포판`에 들어가 `Assets` 밑에 `vocaro_formatting_x.x.zip`를 받으시고 압축을 해제합니다.

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

3. 기타

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

-   동작 후의 예시 내용

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
-   V1.0.3 웹(2022.10.25)
-   가시적 버전 관리를 위해 버전 추가
-   초기화, 되돌리기, 클립보드로 복사 기능 추가
-   기타 버그 수정

=============
수정 날짜: 2022.10.25.
