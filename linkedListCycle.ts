/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }
  let turtle : ListNode = head;
  let rabbit : ListNode = head.next;
  while (turtle !== rabbit && turtle && rabbit && turtle.next && rabbit.next) {
    turtle = turtle.next;
    rabbit = rabbit.next;
    rabbit = rabbit.next;
  }
  if (turtle && rabbit && turtle.next && rabbit.next) {
    return true;
  }
  console.log(turtle, rabbit)
  return false
};