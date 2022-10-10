import { Node } from './Node.js';

export function LinkedList() {
  let head = null;
  function append(value) {
    const node = Node();
    node.value = value;
    if (head === null) {
      head = node;
    } else {
      let curr = head;
      while (curr.nextNode !== null) {
        curr = curr.nextNode;
      }
      curr.nextNode = node;
    }
  }

  function prepend(value) {
    const node = Node();
    node.value = value;
    if (size() === 0) {
      head = node;
    }
    if (size() !== 0) {
      node.nextNode = head;
      head = node;
    }
  }

  function size() {
    let count = 0;
    let curr = head;
    while (curr !== null) {
      count++;
      curr = curr.nextNode;
    }
    return count;
  }

  // function head() {}

  function tail() {}

  function at(index) {}

  function pop() {}

  function contains(value) {}

  function find(value) {}

  function toString() {
    let str = '';
    let curr = head;
    while (curr !== null) {
      str += `( ${curr.value} ) -> `;
      curr = curr.nextNode;
    }
    str += 'null';
    return str;
  }

  function insertAt(value, index) {}

  function removeAt(index) {}

  return {
    append,
    prepend,
    size,
    toString,
  };
}
