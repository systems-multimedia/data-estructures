interface IQNode<T> {
  data: T;
  next: QNode<T>;
}

class QNode<T> implements IQNode<T> {
  data: T;
  next: QNode<T> = null;

  constructor(data: T) {
    this.data = data;
  }
}

class Queue<T> {
  private start: QNode<T> = null;
  private end: QNode<T> = null;
  private length: number = 0;
  private max: number;

  constructor(max: number) {
    this.max = max;
  }

  enqueue(data: T) {
    const node = new QNode(data);

    if (this.length === this.max) {
      console.log("No more please");
      return;
    }

    console.log(`inserting ${data}`)
    if (!this.end) {
      this.start = node;
    } else {
      this.end.next = node;
    }

    this.end = node;
    this.length++;
  }

  unqueue(): T {
    if (!this.start) {
      return null;
    }

    const unqueued = this.start.data;
    this.start = this.start.next;

    if (!this.start) {
      this.end = null;
    }
    this.length--;

    return unqueued;
  }

  print() {
    let node = this.start;
    const items = [];
    while (node) {
      items.push(node.data);
      node = node.next;
    }

    console.log("Items in queue");
    console.log(items);
  }
}

const queue = new Queue<number>(10);

[1,2,4,5,9,1,3,2,3,41,552].forEach(item => queue.enqueue(item));

console.log(queue)
queue.print();
