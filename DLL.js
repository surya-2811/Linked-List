console.log("Doubly Linked List");
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.tail;
      temp.next = newNode;
      newNode.prev = temp;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return temp;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.next;
      }
    }
    return temp;
  }
  set(index, value) {
    let temp = this.get(index);
    console.log(temp.value, "here");
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;
    let newNode = new Node(value);
    let before = this.get(index - 1);
    let after = before.next;
    newNode.prev = before;
    before.next = newNode;
    after.prev = newNode;
    newNode.next = after;
    this.length++;
    return true;
  }
  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return false;
    let temp = this.get(index);
    console.log(temp, "here");
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.prev = null;
    temp.next = null;
    this.length--;
    return true;
  }
}

let doublyLinkedList = new DoublyLinkedList(0);
console.log(doublyLinkedList.push(1));
console.log(doublyLinkedList.push(2));
console.log(doublyLinkedList.push(3));
console.log(doublyLinkedList.push(4));
doublyLinkedList.remove(5);
console.log(displayValue(doublyLinkedList.head));

function displayValue(head) {
  let array = [];
  let currentNode = head;
  while (currentNode) {
    array.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return array;
}
