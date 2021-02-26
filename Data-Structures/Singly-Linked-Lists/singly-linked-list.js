class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null; // gets rid of arrow
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    // remove from beginning
    if (!this.head) return undefined;
    let curHead = this.head;
    this.head = curHead.next;
    this.length--;
    console.log(curHead);
    return curHead;
  }
  unshift(val) {
    // add to beginning
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(idx, val) {
    let foundNode = this.get(idx);
    if (!foundNode) return false;
    foundNode.val = val;
    return true;
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) {
      return this.push(val);
    }
    if (idx === 0) {
      return this.unshift(val);
    }
    let newNode = new Node(val);
    let prev = this.get(idx - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
}

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
list.unshift("hehihihiihi");

list.push(100);
list.push(201); //prev
// NEWNODE
list.push(230); //temp
list.push(350);

// list.shift();
console.log(list);

// HELLO -> GOODBYE -> !
//                    cur
//           newT
