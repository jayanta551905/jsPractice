// class myClass {


//     // constractor is auto calling by create own class object
//     // constractor can not return
//     constructor (a,b){ // parameterized constractor
//         this.firstNum = a; // class variable
//         this.secondNum = b; // class variable
//         let result = this.firstNum + this.secondNum;
//         console.log(result);
//     }
//     myFunction1() {
//         console.log('This is show on inside My Function 1')
//     }

//     myFunction2(){
//         console.log('This is show on inside My Function 2') 
//     }

//     myFunction3(){
//         console.log('This is show on inside My Function 3') 
//     }

//     myFunction4(name){  // parameterized function
//         console.log(name) 
//     }

//     static helloStactic(){  // static function 
//         console.log('Hello This is printed on static function')
//     }
// }


// myClass.helloStactic();

// let calling = new myClass(10,20);

// calling.myFunction1();
// calling.myFunction2();
// calling.myFunction3();
// calling.myFunction4('Bangladesh');


// class inheritence

class Parent {
    fun1 () {
        console.log("This is fun 1 from parent class");
    }

    fun2 () {
        console.log('This is fun 2 from parent class');
    }
}

class Child extends Parent{
    // fun1 () {
    //     console.log('This is from child class') // this is call methid/function overraiding
    // }

    demo () { // instant call any function from parent class using super keyword
        super.fun1();
        super.fun2();
    }
}

let obj = new Child();

// obj.fun1();
// obj.fun2();

obj.demo();