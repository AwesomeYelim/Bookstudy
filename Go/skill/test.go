package main

import "fmt"

type Node[T any] struct {
	next *Node[T]
	prev *Node[T] // double linked list
	val  T
}

func main() {
	root := &Node[int]{nil, nil, 10}
	root.next = &Node[int]{nil, root, 20}
	root.next.next = &Node[int]{nil, root.next, 30}

	fmt.Println("Hello, 예림")

	for n := root; n != nil; n = n.next {
		fmt.Printf("node val: %d\n", n.val)
	}
}
