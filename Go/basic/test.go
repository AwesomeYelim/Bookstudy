package main

import (
	"fmt"
)

func main() {
	msg := make(chan string, 1)

	go func() {
		for {
			fmt.Println("바로 이맛이야~")
			fmt.Println(<-msg)
		}
	}()

	msg <- "안녕"

}
