import { Node } from './Node.js';

export function LinkedListFactory() {
  let listHead = null;

  function append(value) {
    const node = Node();
    node.value = value;
    if (listHead === null) {
      listHead = node;
    } else {
      let curr = listHead;
      while (curr.nextNode !== null) {
        curr = curr.nextNode;
      }
      curr.nextNode = node;
    }
  }

  function prepend(value) {
    const node = Node();
    node.value = value;
    if (listHead === null) {
      listHead = node;
    } else {
      node.nextNode = listHead;
      listHead = node;
    }
  }

  function size() {
    let count = 0;
    let curr = listHead;
    while (curr !== null) {
      count++;
      curr = curr.nextNode;
    }
    return count;
  }

  function head() {
    return listHead;
  }

  function tail() {
    let curr = listHead;
    while (curr.nextNode !== null) {
      curr = curr.nextNode;
    }
    return curr;
  }

  function at(index) {
    let curr = listHead;
    let i = 0;
    while (i < index) {
      i++;
      curr = curr.nextNode;
    }
    return curr;
  }

  function pop() {
    let curr = listHead;
    while (curr.nextNode.nextNode !== null) {
      curr = curr.nextNode;
    }
    curr.nextNode = null;
  }

  function contains(value) {
    let curr = listHead;
    while (curr !== null) {
      if (curr.value === value) return true;
      curr = curr.nextNode;
    }
    return false;
  }

  function find(value) {
    let i = 0;
    let curr = listHead;
    while (curr !== null) {
      if (curr.value === value) return i;
      i++;
      curr = curr.nextNode;
    }
    return null;
  }

  function toString() {
    let str = '';
    let curr = listHead;
    while (curr !== null) {
      str += `( ${curr.value} ) -> `;
      curr = curr.nextNode;
    }
    str += 'null';
    return str;
  }

  function insertAt(value, index) {
    const node = Node();
    node.value = value;
    let curr = listHead;
    let i = 0;
    while (i < index - 1) {
      curr = curr.nextNode;
      i++;
    }
    node.nextNode = curr.nextNode;
    curr.nextNode = node;
  }

  function removeAt(index) {
    let curr = listHead;
    let i = 0;
    while (i < index - 1) {
      curr = curr.nextNode;
      i++;
    }
    curr.nextNode = curr.nextNode.nextNode;
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}
