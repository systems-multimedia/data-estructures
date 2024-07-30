interface INode<T> {
  data: T;
  next: ListNode<T>;
}

interface IDoubleNode<T> {
  data: T;
  next: ListNode<T>;
  prev: ListNode<T>;
}

interface List<T> {
  head: ListNode<T>;
  length: number;
}

class ListNode<T> implements INode<T> {
  data: T;
  next: ListNode<T>;

  constructor(data: T) {
    this.data = data;
  }
}

class List<T> implements List<T> {
  head: ListNode<T>;
  length: number = 0;

  constructor() {}

  insertAtFront(data): ListNode<T> {
    const node = new ListNode(data);
    node.next = this.head;

    this.head = node;
    this.length++;
    return node;
  }

  insert(data): ListNode<T> {
    const node = new ListNode(data);

    if (!this.head) {
      this.head = node;
      this.length++;
      return node;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.length++;
    return node;
  }

  removeFirstNode() {
    if (!this.head) {
      return null;
    }

    const prevHead = this.head;
    this.head = this.head.next;
    this.length--;

    return prevHead;
  }

  removeLastNode() {
    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      const head = this.head;
      this.head = null;
      this.length--;
      return head;
    }

    let node = this.head;
    while (node.next?.next) {
      node = node.next;
    }

    const prev = node;
    node.next = null;
    this.length--;
    return prev;
  }

  print() {
    let node = this.head;

    const items = [];
    while (node) {
      items.push(node.data);
      node = node.next;
    }
    console.log("The current items in the list are:");
    console.log(items);
  }
}

const list = new List<number>();

console.log(list);

[310, 20, 23, 40, 13, 13, 543, 41, 100].forEach((item) => list.insert(item));
list.print();
console.log("inserting at front");
list.insertAtFront(0);
list.print();
console.log("removing last");
list.removeLastNode();
list.print();
console.log("removing first");
list.removeFirstNode();
list.print();
console.log(list);
