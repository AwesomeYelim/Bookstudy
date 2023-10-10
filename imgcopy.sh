

# img 디렉토리 생성
mkdir mdimg

# 확장자 여러버전 복사 나머지 네이밍 규칙은 위와 같음
find ./* -type f \( -name "b_*.jpg" -o -name "b_*.jpeg" -o -name "b_*.png" -o -name "b_*.gif" \) ! -path "*/node_modules/*"  -exec sh -c 'cp "$1" "mdimg/$(basename "$1" | awk -F_ "{print \$NF}")"' _ {} \;



