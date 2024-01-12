# commit rollback 시키기

## commit 기록보기

- `git log` 를 사용하여 커밋 기록을 확인해 보자

- 그러면 뭐 이런식으로 commit 내역의 해시 파일들이 나열된다.

```sh
commit a7bed102e7cdbecb98a8f203f84199a8afd7b2b (HEAD -> main, origin/main)
Author: AwesomeYelim <uiop01900@gmail.com>
Date:   Tue Jan 9 13:48:02 2024 +0900

    file_org

commit 3b6199d98565c3f78267ad3119e0ddbd2588c3e...skipping...
commit a7bed102e7cdbecb98a8f203f84199a8afd7b2b (HEAD -> main, origin/main)
Author: AwesomeYelim <uiop01900@gmail.com>
Date:   Tue Jan 9 13:48:02 2024 +0900

    file_org

commit 3b6199d98565c3f78267ad3119e0ddbd2588c3eAuthor: AwesomeYelim <uiop01900@gmail.com>
Date:   Mon Jan 8 18:03:12 2024 +0900
...skipping...
98a8f203f84199a8afd7b2bc (HEAD -> main, originiop01900@gmail.com>
:02 2024 +0900



8267ad3119e0ddbd2588c3e9
iop01900@gmail.com>
:12 2024 +0900



86e5267b794ee16fdcc5dfc9
iop01900@gmail.com>
98a8f203f84199a8afd7b2bc (HEAD -> main, originiop01900@gmail.com>
98a8f203f84199a8afd7b2bc (HEAD -> main, originiop01900@gmail.com>
:02 2024 +0900



8267ad3119e0ddbd2588c3e9
iop01900@gmail.com>
:12 2024 +0900



86e5267b794ee16fdcc5dfc9
iop01900@gmail.com>
:10 2024 +0900



ad2ea427a96dea3f387eb19a
iop01900@gmail.com>
:45 2024 +0900

```

- 가장 최근꺼의 해시를 `a7bed102e7cdbecb98a8f203f84199a8afd7b2b` 입력해주면 되돌려짐

```sh
git revert a7bed102e7cdbecb98a8f203f84199a8afd7b2b
```
