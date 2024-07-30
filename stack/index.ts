interface IStack<T> {
  items: T[];
  top: number;
  max: number;

  push(item: T): void;
  pop(): T;
  peek(): T;
  isEmpty(): boolean;
}

class Stack<T> implements IStack<T> {
  items: T[] = [];
  top: number = -1;
  max: number;

  constructor(max: number) {
    this.max = max;
  }

  push(item: T): void {
    if (this.top < this.max - 1) {
      this.top++;
      this.items[this.top] = item;

      return;
    }

    console.log("Stack overflow");
  }

  pop(): T {
    if (this.isEmpty()) {
      console.log("No items");
      return null;
    }

    this.top--;
    return this.items.pop();
  }

  peek(): T {
    if (this.isEmpty()) {
      console.log("No items");
      return null;
    }

    return this.items[this.top];
  }

  isEmpty(): boolean {
    return this.top < 0;
  }
}

function printStack(stack: Stack<any>): void {
  const items = [];
  while (!stack.isEmpty()) {
    items.push(stack.pop());
  }

  console.log("items in stack:")
  console.log(items);
}

const stack = new Stack(5);

[82, 319, 13, 1414, 1441, 1414].forEach(item => stack.push(item));

console.log(stack);
printStack(stack);
console.log(stack);
