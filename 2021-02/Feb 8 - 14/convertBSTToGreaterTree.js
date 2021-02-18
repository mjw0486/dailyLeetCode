/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let currentSum = 0;
  function recurseTree(currentNode) {
    if (currentNode === null) {
      return;
    }
    recurseTree(currentNode.right);
    currentSum += currentNode.val;
    currentNode.val = currentSum;
    recurseTree(currentNode.left);
  }
  recurseTree(root);
  return root;
};