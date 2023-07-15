/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
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

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);

    // if first is empty first is the new Node
    if (this.first === null) this.first = newNode;

    // if last is not empty make the next one after last equal the new node
    if (this.last !== null) this.last.next = newNode;

    // increment queue size
    this.size++;

    // make the last node be the new node just created
    this.last = newNode;
  }

  /** dequeue(): remove the node from the start (being the one whoe has been in the queue the longest)
   * of the queue and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // if first and last are empty throw error
    if (this.first === null && this.last === null) {
      throw new Error(`Invalid Queue is empty`);
    }

    // keep track of first node to return val
    const firstNode = this.first;

    // make the first element the next element in line
    this.first = this.first.next;

    // if the size of the queue is 1 empty the first and last elements
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }

    // decrement size and return removed val
    this.size -= 1;
    return firstNode.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    // if first and last are empty return true if not return false
    if (this.first === null && this.last === null) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Queue;
