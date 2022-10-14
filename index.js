// import { LinkedList } from './LinkedList.js';
import { LinkedListConstructor } from './LinkedListConstructor.js';
import { LinkedListClass } from './LinkedListClass.js';
import { LinkedListFactory } from './LinkedListFactory.js';

const myConstructorList = new LinkedListConstructor();
console.log(myConstructorList);
myConstructorList.append('Billy');
myConstructorList.append(2);
myConstructorList.append(3.14);
myConstructorList.prepend('Andrew');
myConstructorList.append(123);
console.log(myConstructorList.toString());

const myClassList = new LinkedListClass();
console.log(myClassList);
myClassList.append('William');
myClassList.append(200);
myClassList.append(314);
myClassList.prepend('Andy');
myClassList.append(456);
console.log(myClassList.toString());

const myFactoryList = LinkedListFactory();
console.log(myFactoryList);
myFactoryList.append('Billy Boy');
myFactoryList.append(500);
myFactoryList.append(420);
myFactoryList.prepend('Drew');
myFactoryList.append(789);
console.log(myFactoryList.toString());
