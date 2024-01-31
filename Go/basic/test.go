package main

import (
	"fmt"
	"time"
)

// 고루틴이 모두 끝날 때 까지 기다리기 위해 앞에서는 time.Sleep
func job(s string) {
	for i := 0; i < 3; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println(s, i)
	}
} // 다른 프로그램(cpu에서 수행되는 다른 작업)은 고루틴을 기다려 주지 않음
func main() {
	go job("넷플릭스 보기")
	go job("네일하기")
	time.Sleep(1000 * time.Millisecond)

}
