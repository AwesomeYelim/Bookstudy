
mkdir output # 최상위 root에 output 이라는 파일을 만들겠다.

# 디렉토리까지 복사
# find ./* -name *.md | cpio -pdm output # 디렉토리까지 복사


# 파일 그대로 복사
# find ./* -type f -name "b_*.md" ! -path "*/node_modules/*" -exec cp {} output \;


# 'b_' 이부분만 삭제해줌
# find ./* -type f -name "b_*.md" ! -path "*/node_modules/*" -exec sh -c 'cp "$1" "output/$(basename "$1" | sed "s/b_//")"' _ {} \; 

# 'b_' 이부분만 삭제 및 '_'기준으로 split 해준 배열의 마지막 요소 값 사용
find ./* -type f -name "b_*.md" ! -path "*/node_modules/*" -exec sh -c 'cp "$1" "output/$(basename "$1" | awk -F_ "{print \$NF}")"' _ {} \; # '_'기준으로 split 한뒤 마지막 요소값만 사용 

# img 디렉토리 생성
mkdir mdimg

# 확장자 여러버전 복사 나머지 네이밍 규칙은 위와 같음
find ./* -type f \( -name "b_*.jpg" -o -name "b_*.jpeg" -o -name "b_*.png" \) ! -path "*/node_modules/*"  -exec sh -c 'cp "$1" "mdimg/$(basename "$1" | awk -F_ "{print \$NF}")"' _ {} \;


# 만약 indexing 값이 필요하다면 이것을 사용
# index=1
# find ./* -type f -name "b_*.md" ! -path "*/node_modules/*" -print | while read -r file; do
#     cp "$file" "output/${index}_$(basename "$file" | awk -F_ "{print \$NF}")"
#     index=$((index+1))
# done


