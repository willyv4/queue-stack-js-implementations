/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  traverse() {
    let currentNode = this.first;
    let count = 0;

    while (currentNode) {
      if (count < 1) {
        console.log("FIRST: ", currentNode.val);
      } else if (currentNode.next) {
        console.log("NODE: ", currentNode.val);
      } else {
        console.log("LAST: ", currentNode.val);
      }

      currentNode = currentNode.next;
      count++;
    }
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const prevNodeVal = this.first;

    this.first = new Node(val);

    if (this.last == null) this.last = new Node(val);

    this.size++;
    this.first.next = prevNodeVal;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size < 1) throw new Error("whoops stack is empty");

    const removedNode = this.first.val;
    this.first.next = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }

    this.size -= 1;
    return removedNode;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size < 1 ? true : false;
  }
}

const stack = new Stack();

stack.push("1");
stack.push("2");
stack.push("3");
stack.push("4");

console.log(stack.traverse());
module.exports = Stack;
