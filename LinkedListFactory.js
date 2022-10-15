import { Node } from './Node.js';

const LinkedListProto = {
  append(value) {
    const node = Node();
    node.value = value;
    if (this.listHead === null) {
      this.listHead = node;
    } else {
      let curr = this.listHead;
      while (curr.nextNode !== null) {
        curr = curr.nextNode;
      }
      curr.nextNode = node;
    }
  },

  prepend(value) {
    const node = Node();
    node.value = value;
    if (this.listHead === null) {
      this.listHead = node;
    } else {
      node.nextNode = this.listHead;
      this.listHead = node;
    }
  },

  size() {
    let count = 0;
    let curr = this.listHead;
    while (curr !== null) {
      count++;
      curr = curr.nextNode;
    }
    return count;
  },

  head() {
    return this.listHead;
  },

  tail() {
    let curr = this.listHead;
    while (curr.nextNode !== null) {
      curr = curr.nextNode;
    }
    return curr;
  },

  at(index) {
    let curr = this.listHead;
    let i = 0;
    while (i < index) {
      i++;
      curr = curr.nextNode;
    }
    return curr;
  },

  pop() {
    let curr = this.listHead;
    while (curr.nextNode.nextNode !== null) {
      curr = curr.nextNode;
    }
    curr.nextNode = null;
  },

  contains(value) {
    let curr = this.listHead;
    while (curr !== null) {
      if (curr.value === value) return true;
      curr = curr.nextNode;
    }
    return false;
  },

  find(value) {
    let i = 0;
    let curr = this.listHead;
    while (curr !== null) {
      if (curr.value === value) return i;
      i++;
      curr = curr.nextNode;
    }
    return null;
  },

  toString() {
    let str = '';
    let curr = this.listHead;
    while (curr !== null) {
      str += `( ${curr.value} ) -> `;
      curr = curr.nextNode;
    }
    str += 'null';
    return str;
  },

  insertAt(value, index) {
    const node = Node();
    node.value = value;
    let curr = this.listHead;
    let i = 0;
    while (i < index - 1) {
      curr = curr.nextNode;
      i++;
    }
    node.nextNode = curr.nextNode;
    curr.nextNode = node;
  },

  removeAt(index) {
    let curr = this.listHead;
    let i = 0;
    while (i < index - 1) {
      curr = curr.nextNode;
      i++;
    }
    curr.nextNode = curr.nextNode.nextNode;
  },
};

export function LinkedListFactory() {
  return Object.assign(Object.create(LinkedListProto), { listHead: null });
}
