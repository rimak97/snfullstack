class MyClass{
    showName(uname:string,email:string){
        console.log(`welcome to TS ${uname} ${email}`);
        
    }
}

const userData=['admin','manager']
console.log(...userData);


let classDemo=new MyClass();
classDemo.showName('admin','aa@aa.com')