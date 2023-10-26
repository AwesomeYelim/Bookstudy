# Snippet

- Snippet 은 코드 조각을 의미한다.
- 우리가 쓰는 vscode 와 같은 IDE 에서는 이러한 snippet 을 저장하고 다시 꺼내 쓸 수 있게 해준다.

## Snippet 구성

- snippet 은 prefix body description 으로 구성 되어 있다.

  1. prefix : snippet 을 불러오는 key 같은 것

  2. body : prefix 로 입력할 code 조각

  3. description : snippet 에 대한 설명

## Snippet 변수

- Tabstops : ${순서} : Tab키로 순서대로 내용을 입력할 수 있게 포커싱 해준다.

- Ex ) $1, $2, $3, $0

```json
    "title: '$1'",
    "subtitle: '$2'",
    "tag: '$3'",
```

- 그 외의 변수들

  TM_SELECTED_TEXT : 현재 선택된 텍스트 또는 빈 문자열
  TM_CURRENT_LINE : 현재 줄의 내용
  TM_CURRENT_WORD : 커서 아래에 있는 단어의 내용 또는 빈 문자열
  TM_LINE_INDEX : 제로 인덱스 기반 라인 번호
  TM_LINE_NUMBER : 하나의 인덱스 기반 라인 번호
  TM_FILENAME : 현재 문서의 파일 이름
  TM_FILENAME_BASE : 확장자가 없는 현재 문서의 파일 이름
  TM_DIRECTORY : 현재 문서의 디렉토리
  TM_FILEPATH : 현재 문서의 전체 파일 경로
  RELATIVE_FILEPATH : 현재 문서의 상대(열린 작업 공간 또는 폴더에 대한) 파일 경로
  CLIPBOARD : 클립보드의 내용
  WORKSPACE_NAME : 열려 있는 작업 공간 또는 폴더의 이름
  WORKSPACE_FOLDER : 열려 있는 작업 공간 또는 폴더의 경로

  현재 날짜와 시간을 삽입하려면:

  CURRENT_YEAR : 현재 연도
  CURRENT_YEAR_SHORT : 현재 연도의 마지막 두 자리
  CURRENT_MONTH : 두 자리 숫자로 된 월(예: '02')
  CURRENT_MONTH_NAME : 월의 전체 이름(예: 'July')
  CURRENT_MONTH_NAME_SHORT : 월의 짧은 이름(예: 'Jul')
  CURRENT_DATE : 두 자리 숫자로 된 월의 일(예: '08')
  CURRENT_DAY_NAME : 요일 이름(예: '월요일')
  CURRENT_DAY_NAME_SHORT : 요일의 짧은 이름(예: '월')
  CURRENT_HOUR : 24시간제 형식의 현재 시간
  CURRENT_MINUTE : 두 자리 숫자로 된 현재 분
  CURRENT_SECOND : 두 자리 숫자로 된 현재 초
  CURRENT_SECONDS_UNIX : Unix epoch 이후 경과된 시간(초)

  임의의 값을 삽입하는 경우:
  RANDOM : 6개의 임의의 Base-10 숫자
  RANDOM_HEX : 6개의 임의의 Base-16 숫자
  UUID : 버전 4 UUID

  줄 또는 블록 주석을 삽입하려면 현재 언어를 존중합니다.
  BLOCK*COMMENT_START : javascript에서는 /*, HTML에서는 <!-- 이렇게 표시됩니다.
    BLOCK_COMMENT_END : javascript에서는 _/, HTML에서는 --> 이렇게 표시됩니다.
  LINE_COMMENT : javascript에서 // 이렇게 표시됩니다.
