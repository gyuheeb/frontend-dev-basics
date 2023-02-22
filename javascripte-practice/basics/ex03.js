/* null 과 undefined */

var myVar1 = undefined; // 명시적으로  undefined 대입
var myVar2;             // 암시적으로  undefined 대입
var myVar3 = null;

console.log(myVar1+" : "+myVar2+" : "+myVar3);


// undefined 와 null 의 동치(equal) 비교
console.log(myVar1 == myVar2);  //값 비교
console.log(myVar1 === myVar3);  //값 비교  + 타입 비교

console.log("=====================");
//== : equality, 값의 동치성 , 형변환
console.log('4' == 4);
console.log(false== 0);
console.log('abc' == new String('abc'));        

console.log(true +10);  //11
console.log('abc' +new String('abc'));  //abcabc
console.log('1' +10);  //110

console.log("=====================");
//=== : identity
// 1. type의 동일성 
// 2. 타입이 같은 경우 
//    2-1 primitive type: 값의 동일성
//    2-2 object type: 객체의 동일성

console.log('4' === 4);
console.log(false === 0);
console.log('abc' === new String('abc')); 
console.log(2 === 4);
console.log(new Number(10) === new Number(2));  //abcabc









