/* 변수와 자료형(Data Type) 

[기본타입(Primitive Type)]
- undefined 
-  number
- string
- boolean

[객체]
- object
    1. new 생성자 함수() 사용해서 생성
        Number()  => object 타입의 객체
        String()  => object 타입의 객체
        Boolean()  => object 타입의 객체
        Object()  => object 타입의 객체
        Array()  => object 타입의 객체
        Date()  => object 타입의 객체
        RegExp()  => object 타입의 객체
        Function()  => function 타입의 객체 *

    2. {} (객체 리터럴)
    3. [] (배열)
    4. null (null = 객체)
- function
*/

console.log("=== 기본 타입(undefined, number, string ,boolean) ===");
var u = undefined; //var u; 동일 => 자바스크립트는 선언과 정의를 구분 X 
var i = 10;
var s = 'hello world';
var b =true;


console.log(u + ":" + typeof(u));
console.log(i + ":" + typeof(i));
console.log(s + ":" + typeof(s));
console.log(b + ":" + typeof(b));

console.log("=== 객체 타입(object) ===");
var i2 = new Number(10); //number = 함수 (자바스크립트는 함수 앞에 "new" 붙이면 object type으로 만들어짐)
var s2 = new String('helloworld');
var b2 = new Boolean(true);
var o = new Object();
var a = new Array();
var d = new Date();
var o2 = {};
var a2 = [];
var n = null;

console.log(i2 + ":" + typeof(i2)+ ": "+ (i2 instanceof(Number)));
console.log(s2 + ":" + typeof(s2)+ ": "+ (s2 instanceof(String)));
console.log(b2 + ":" + typeof(b2)+ ": "+ (b2 instanceof(Boolean)));
console.log(o + ":" + typeof(o)+ ": "+ (o instanceof(Object)));
console.log(a + ":" + typeof(a)+ ": "+ (a instanceof(Array)));
console.log(d + ":" + typeof(d)+ ": "+ (d instanceof(Date)));
console.log(o2 + ":" + typeof(o2)+ ": "+ (o2 instanceof(Object)));
console.log(a2 + ":" + typeof(a2)+ ": "+ (a2 instanceof(Array)));
console.log(n + ":" + typeof(n)+ ": "+ (n instanceof(Object)));  //null instance X



function Student(name){
    console.log(name);
}
Student('둘리');

console.log("=== 객체 타입(function) ===");
function f1 (a,b){
    return a+b;
}

var f2 = function(a,b){
    return a+b;
}

var f3 = new Function("a", "b", "return a+b");

console.log(f1(10,20) , f2(10,20));
console.log("f1 :" + typeof(f1));
console.log("f2 :" + typeof(f2));
console.log("f3 :" + typeof(f3));

console.log("=== 원시 타입도 메소드를 호출 할 수 있다.(유사 객체) ===");
console.log(b2.valueOf());
console.log(b.valueOf()); // new Boolean(b).valueOf()

