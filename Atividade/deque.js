class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const removedItem = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return removedItem;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const removedItem = this.items[this.count];
    delete this.items[this.count];
    return removedItem;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let result = this.items[this.lowestCount];
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      result += `, ${this.items[i]}`;
    }
    return result;
  }
}

// Exemplo de uso
const deque = new Deque();
deque.addBack(1);
deque.addBack(2);
deque.addFront(0);
console.log(deque.toString()); // Saída: "0, 1, 2"
deque.removeBack();
console.log(deque.toString()); // Saída: "0, 1"
