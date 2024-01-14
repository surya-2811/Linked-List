console.log("Stack");
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.lenght = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.lenght === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.lenght++;
    return this;
  }
  pop() {
    if (this.lenght === 0) return undefined;
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.lenght--;
    return temp;
  }
}
let stack = new Stack(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();

function stackToArray(stack) {
  let array = [];
  let temp = stack;
  while (temp) {
    array.push(temp.value);
    temp = temp.next;
  }
  return array;
}
console.log(stackToArray(stack.top));
