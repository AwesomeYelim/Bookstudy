# React Hook Form의 watch() vs getValues

## watch vs getValues

- 핵심은 watch는 값 변화에 대해 컴포넌트가 re-render가 이루어지고 getValues는 그렇지 않다는 점이다.
- watch는 input의 변화를 subscribe해서 변화에 따라 re-render가 이루어진다.
