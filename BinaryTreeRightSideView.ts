/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rightSideView(root: TreeNode | null): number[] {

  let rightSide : number[] = [];
  let maxDepth : number = 0;

  function recurseTree(root: TreeNode | null, currentDepth : number): void {
    if (!root) {
      return;
    }
    if (currentDepth > maxDepth) {
      maxDepth = currentDepth;
      rightSide.push(root.val);
    }
    recurseTree(root.right, currentDepth + 1);
    recurseTree(root.left, currentDepth + 1);
  }
  recurseTree(root, 1);

  return rightSide;
};