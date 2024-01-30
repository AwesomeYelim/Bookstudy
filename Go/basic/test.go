package main

import "fmt"

func main() {
	var x []int = []int{1, 2, 3, 4, 5, 6}
	b := append(x, 7, 9)
	fmt.Println(cap(b)) // len(x) + cap(x) 
}
