#!/bin/sh
# cd ../
mkdir output # 최상위 root에 output 이라는 파일을 만들겠다.
# cp -R ./*/*.md ./output # output 이라는 파일에 Basic 안에있는 md 파일을 복사해서 붙여넣겠다. -R 은 내부 파일또한 탐색하려는 재귀명령
# cp -R ./*/*/*.md ./output 
# find ./* -name *.md | cpio -pdm output # 디렉토리까지 복사

# find ./* -type f -name "b_*.md" ! -path "*/node_modules/*" -exec cp {} output \;
# rename output/b_*.md output/?_*.md

# find ./* -type f -name "b_*.md" ! -path "*/node_modules/*" -exec sh -c 'cp "$1" "output/$(basename "$1" | sed "s/b_//")"' _ {} \; # 'b_' 이부분만 삭제해줌
find ./* -type f -name "b_*.md" ! -path "*/node_modules/*" -exec sh -c 'cp "$1" "output/$(basename "$1" | awk -F_ "{print \$NF}")"' _ {} \; # '_'기준으로 split 한뒤 마지막 요소값만 사용 
# counter=1
# find ./* -type f -name "b_*.md" ! -path "*/node_modules/*" -exec sh -c 'cp "$1" "output/$counter_$(basename "$1" | awk -F_ "{print \$NF}")"' _ {} \; -exec sh -c 'counter=$((counter+1))' \;

# index=1
# find ./* -type f -name "b_*.md" ! -path "*/node_modules/*" -print | while read -r file; do
#     cp "$file" "output/${index}_$(basename "$file" | awk -F_ "{print \$NF}")"
#     index=$((index+1))
# done


