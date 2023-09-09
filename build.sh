#!/bin/sh
# cd ../
mkdir output # 최상위 root에 output 이라는 파일을 만들겠다.
# cp -R ./*/*.md ./output # output 이라는 파일에 Basic 안에있는 md 파일을 복사해서 붙여넣겠다. -R 은 내부 파일또한 탐색하려는 재귀명령
# cp -R ./*/*/*.md ./output 
# find ./* -name *.md | cpio -pdm output # 디렉토리까지 복사

find ./* -type f -name "b_*.md" ! -path "*/node_modules/*" -exec cp {} output \;
