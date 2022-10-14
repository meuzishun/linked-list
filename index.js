// import { LinkedList } from './LinkedList.js';
import { LinkedListConstructor } from './LinkedListConstructor.js';
import { LinkedListClass } from './LinkedListClass.js';
import { LinkedListFactory } from './LinkedListFactory.js';

const myList = LinkedList();
console.log(myList.toString());
myList.append('Billy');
myList.append(2);
myList.append(3.14);
myList.prepend('Andrew');
myList.append(123);
// console.log(myList.size());
// console.log(myList.tail());
console.log(myList.head());
// console.log(myList.at(2));
// myList.pop();
// console.log(myList.toString());
// console.log(myList.contains('Andrew'));
// console.log(myList.find(3.14));
console.log(myList.toString());
myList.insertAt('Car', 2);
console.log(myList.toString());
myList.removeAt(4);
console.log(myList.toString());

const myList2 = LinkedList();
console.log(myList2.toString());
