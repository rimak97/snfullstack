"use strict";
class MyClass {
    showName(uname, email) {
        console.log(`welcome to TS ${uname} ${email}`);
    }
}
const userData = ['admin', 'manager'];
console.log(...userData);
let classDemo = new MyClass();
classDemo.showName('admin', 'aa@aa.com');
