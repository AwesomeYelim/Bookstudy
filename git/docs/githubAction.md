# github Actions

## github Actions 기본 5가지

1. Event
   - main branch 로 merge 하거나 commit 을 push, issue를 누군가가 열때 그때 수행해야 하는 일들을 처리
2. Workflows
3. Jobs
4. Actions
5. Runners

## github Actions 을 사용하여 자기 repo에 md 파일 생성하기

```yml
name: Create MD File

on:
  push:
    branches:
      - main # Change this to the branch where you want to trigger the action

jobs:
  create-md:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Create MD File
        run: |
          echo "# My New Markdown File" > new-file.md
        working-directory: ./ # 최상위 디렉터리로 설정

      - name: Commit and Push
        run: |
          git config --global user.name "AwesomeYelim"
          git config --global user.email "uiop01900@gmail.com"
          git add .
          git commit -m "Create new Markdown file"
          git push
```

## github Actions 을 사용하여 다른 repo에 md 파일 생성하기

1. 우선적으로는 토큰을 하나 생성해준다

> https://github.com/settings/tokens

2. 접근할 repo에 가서 Workflow permissions 을 read and write 로 바꿔준다

```yml
name: Create MD File

on:
  push:
    branches:
      - main

jobs:
  create-md:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Create MD File
        run: |
          echo "# My New Markdown File" > new-file.md
        working-directory: ./

      - name: Set up Git credentials
        run: |
          git config --global user.email "AwesomeYelim"
          git config --global user.name "uiop01900@gmail.com"
          git config --global credential.helper "store --file=.git-credentials"
          echo "https://github.com:${{ secrets.MDFILEINTERLOCK }}" > .git-credentials
        env:
          TARGET_REPO_TOKEN: ${{ secrets.MDFILEINTERLOCK }}

      - name: Commit and Push
        run: |
          git add .
          git commit -m "Create new Markdown file"
          git push https://TOKEN@github.com/AwesomeYelim/hongyelim.git main

        env:
          TARGET_REPO_TOKEN: ${{ secrets.MDFILEINTERLOCK }}
```

## githubAction 사용하여 다른 repository 와 동기화 시키기

> 참고

     https://vanilla-van-6e4.notion.site/vercel-47312c7c2a9c492dbdabc40c47489cfa
