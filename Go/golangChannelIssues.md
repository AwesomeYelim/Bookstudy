# go lang 에서 channel 사용시 발생할 수 있는 이슈들 정리

- 기본적으로 채널은 가득 찰 경우 무조건 블로킹 된다.
- channel 은 크기지정을 안했을때 무조건 0 이다.

## channel 크기 0일때 발생할수 있는 이슈들

- 버퍼링이 없는 블로킹 채널이 생성
- 해당 채널에는 값을 전송할 때 수신자가 대기하고 있어야 함(아니면 데드락이 발생)

```go

package main

import (
	"fmt"
	"time"
)

// a. channel값 사용 => go routine 사용한 경우
func main() {

	ch1 := make(chan int)
	slInt := make([]int, 10)

	// 대기조로 남아있는다.
	go func() {
		//defer wg.Done()
		for val := range ch1 {
			fmt.Println(val)
			time.Sleep(time.Second)
		}
		fmt.Println("끝이야 ~!")
	}()

	// ch1 에 순차적으로 할당을 해줌
	for i, _ := range slInt {
		ch1 <- i + 1
		//fmt.Println(<-ch1)
	}
	close(ch1) // 대기조로 남아있는 서브루틴으로 인한 deadlock을 방지하기 위해 채널을 닫아준다.
	time.Sleep(5 * time.Second)
}
```
