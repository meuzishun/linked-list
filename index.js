import { LinkedList } from './LinkedList.js';

const myList = LinkedList();
myList.append('Billy');
myList.append(2);
myList.append(3.14);
myList.prepend('Andrew');
console.log(myList.size());
console.log(myList.toString());
