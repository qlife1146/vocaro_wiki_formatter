# 개요

보카로 가사 위키의 서식으로 변환해 주는 실행 파일입니다.

[다운로드](https://github.com/qlife1146/vocaro_wiki_formatter/releases/tag/v1.0,) 혹은 오른쪽의 `Release` 밑에 `x.x 배포판`에 들어가 `Assets` 밑에 `vocaro_formatting_x.x.zip`를 받으시면 됩니다.

# 사용방법

`kasi.txt` 텍스트 파일에 원하는 방식대로 가사를 작성하신 후에 \*\*`vocaro_formatting.exe`를 실행하시면 `kasi.txt`의 서식이 바뀝니다.

**꼭 한 폴더 내에 `vocaro_formatting.exe`와 `kasi.txt`가 같이 있어야 합니다.**

이 실행 파일은 개행의 삭제 및 수직선 기호(vertical bar/pipe) `|| ||`를 글 양옆에 추가해 줍니다.
그 외의 형식은 제대로 동작하지 않을 수 있습니다.

# 예시

-   `kasi.txt`의 예시 내용

```
歌の歌詞です
우타노 카시데스
노래의 가사입니다.

ボカロウィキ
보카로 위키
보카로 wiki
```

-   `vocaro_formatting.exe` 실행 후의 예시 내용

```
|| 歌の歌詞です ||
|| 우타노 카시데스 ||
|| 노래의 가사입니다 ||
|| ボカロウィキ ||
|| 보카로 위키 ||
|| 보카로 wiki ||
```

이처럼 본인의 편의를 위해 강제 개행(엔터)을 했던 부분의 삭제 및 `|| 내용 ||`으로 형식을 변환해 줍니다.

수정 날짜: 2022.10.25.
