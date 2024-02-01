package main

import (
	"fmt"
	"sync"
)

var wg sync.WaitGroup

// 고루틴이 모두 끝날 때 까지 기다리기 위해 앞에서는 time.Sleep
func job(s string) {
	defer wg.Done()

	for i := 0; i < 3; i++ {
		fmt.Println(s, i)
	}
} // 다른 프로그램(cpu에서 수행되는 다른 작업)은 고루틴을 기다려 주지 않음
func main() {
	fmt.Println("처음에..")
	wg.Add(1)
	go job("넷플릭스 보기")
	wg.Add(1)
	go job("네일하기")
	wg.Wait()

}
