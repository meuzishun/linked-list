import { Node } from './Node.js';

export function LinkedList() {
  this.listHead = null;
}

LinkedList.prototype = Object.create({
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
});

// export class LinkedList {
//   constructor() {
//     this.listHead = null;
//   }

//   append(value) {
//     const node = Node();
//     node.value = value;
//     if (this.listHead === null) {
//       this.listHead = node;
//     } else {
//       let curr = this.listHead;
//       while (curr.nextNode !== null) {
//         curr = curr.nextNode;
//       }
//       curr.nextNode = node;
//     }
//   }

//   prepend(value) {
//     const node = Node();
//     node.value = value;
//     if (this.listHead === null) {
//       this.listHead = node;
//     } else {
//       node.nextNode = this.listHead;
//       this.listHead = node;
//     }
//   }

//   size() {
//     let count = 0;
//     let curr = this.listHead;
//     while (curr !== null) {
//       count++;
//       curr = curr.nextNode;
//     }
//     return count;
//   }

//   head() {
//     return this.listHead;
//   }

//   tail() {
//     let curr = this.listHead;
//     while (curr.nextNode !== null) {
//       curr = curr.nextNode;
//     }
//     return curr;
//   }

//   at(index) {
//     let curr = this.listHead;
//     let i = 0;
//     while (i < index) {
//       i++;
//       curr = curr.nextNode;
//     }
//     return curr;
//   }

//   pop() {
//     let curr = this.listHead;
//     while (curr.nextNode.nextNode !== null) {
//       curr = curr.nextNode;
//     }
//     curr.nextNode = null;
//   }

//   contains(value) {
//     let curr = this.listHead;
//     while (curr !== null) {
//       if (curr.value === value) return true;
//       curr = curr.nextNode;
//     }
//     return false;
//   }

//   find(value) {
//     let i = 0;
//     let curr = this.listHead;
//     while (curr !== null) {
//       if (curr.value === value) return i;
//       i++;
//       curr = curr.nextNode;
//     }
//     return null;
//   }

//   toString() {
//     let str = '';
//     let curr = this.listHead;
//     while (curr !== null) {
//       str += `( ${curr.value} ) -> `;
//       curr = curr.nextNode;
//     }
//     str += 'null';
//     return str;
//   }

//   insertAt(value, index) {
//     const node = Node();
//     node.value = value;
//     let curr = this.listHead;
//     let i = 0;
//     while (i < index - 1) {
//       curr = curr.nextNode;
//       i++;
//     }
//     node.nextNode = curr.nextNode;
//     curr.nextNode = node;
//   }

//   removeAt(index) {
//     let curr = this.listHead;
//     let i = 0;
//     while (i < index - 1) {
//       curr = curr.nextNode;
//       i++;
//     }
//     curr.nextNode = curr.nextNode.nextNode;
//   }
// }

// export function LinkedList() {
//   let listHead = null;

//   function append(value) {
//     const node = Node();
//     node.value = value;
//     if (listHead === null) {
//       listHead = node;
//     } else {
//       let curr = listHead;
//       while (curr.nextNode !== null) {
//         curr = curr.nextNode;
//       }
//       curr.nextNode = node;
//     }
//   }

//   function prepend(value) {
//     const node = Node();
//     node.value = value;
//     if (listHead === null) {
//       listHead = node;
//     } else {
//       node.nextNode = listHead;
//       listHead = node;
//     }
//   }

//   function size() {
//     let count = 0;
//     let curr = listHead;
//     while (curr !== null) {
//       count++;
//       curr = curr.nextNode;
//     }
//     return count;
//   }

//   function head() {
//     return listHead;
//   }

//   function tail() {
//     let curr = listHead;
//     while (curr.nextNode !== null) {
//       curr = curr.nextNode;
//     }
//     return curr;
//   }

//   function at(index) {
//     let curr = listHead;
//     let i = 0;
//     while (i < index) {
//       i++;
//       curr = curr.nextNode;
//     }
//     return curr;
//   }

//   function pop() {
//     let curr = listHead;
//     while (curr.nextNode.nextNode !== null) {
//       curr = curr.nextNode;
//     }
//     curr.nextNode = null;
//   }

//   function contains(value) {
//     let curr = listHead;
//     while (curr !== null) {
//       if (curr.value === value) return true;
//       curr = curr.nextNode;
//     }
//     return false;
//   }

//   function find(value) {
//     let i = 0;
//     let curr = listHead;
//     while (curr !== null) {
//       if (curr.value === value) return i;
//       i++;
//       curr = curr.nextNode;
//     }
//     return null;
//   }

//   function toString() {
//     let str = '';
//     let curr = listHead;
//     while (curr !== null) {
//       str += `( ${curr.value} ) -> `;
//       curr = curr.nextNode;
//     }
//     str += 'null';
//     return str;
//   }

//   function insertAt(value, index) {
//     const node = Node();
//     node.value = value;
//     let curr = listHead;
//     let i = 0;
//     while (i < index - 1) {
//       curr = curr.nextNode;
//       i++;
//     }
//     node.nextNode = curr.nextNode;
//     curr.nextNode = node;
//   }

//   function removeAt(index) {
//     let curr = listHead;
//     let i = 0;
//     while (i < index - 1) {
//       curr = curr.nextNode;
//       i++;
//     }
//     curr.nextNode = curr.nextNode.nextNode;
//   }

//   return {
//     append,
//     prepend,
//     size,
//     head,
//     tail,
//     at,
//     pop,
//     contains,
//     find,
//     toString,
//     insertAt,
//     removeAt,
//   };
// }
