console.log("Queue");
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor(value) {
    let newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  dequeue() {
    if (this.length === 0) return undefined;
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}
let queue = new Queue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();

function queueToArray(queue) {
  let array = [];
  let temp = queue;
  while (temp) {
    array.push(temp.value);
    temp = temp.next;
  }
  return array;
}

console.log("<=", queueToArray(queue.first));
