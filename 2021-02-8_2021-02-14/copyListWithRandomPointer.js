/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  let currentNode = head;
  console.log(head);
  while(currentNode) {
    const clone = new Node(currentNode.val);
    let temp = currentNode.next;
    currentNode.next = clone;
    clone.next = temp;
    currentNode = currentNode.next.next;
  }
  currentNode = head;
  while(currentNode && currentNode.next) {
    currentNode.next.random = currentNode.random === null ? null : currentNode.random.next;
    currentNode = currentNode.next.next;
  }
  let currentCloneNode = head === null ? null : head.next;
  let clone = head === null ? null : head.next;
  currentNode = head;
  while(currentNode && currentNode.next) {
    currentNode.next = currentNode.next.next;
    currentCloneNode.next = currentCloneNode.next === null ? null : currentCloneNode.next.next;
    currentNode = currentNode.next;
    currentCloneNode = currentCloneNode.next;
  }
  console.log(head);
  console.log(clone);
  return clone;

};