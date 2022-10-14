// import { LinkedList } from './LinkedList.js';
import { LinkedListConstructor } from './LinkedListConstructor.js';

// const myList = new LinkedList();
const myList = new LinkedListConstructor();
console.log(myList);
myList.append('Billy');
myList.append(2);
myList.append(3.14);
myList.prepend('Andrew');
myList.append(123);
console.log(myList.toString());
