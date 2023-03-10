/*
    배열(Array)

*/

console.log('=== 배열 생성 1: 내장객체( 생성자 함수 ) 사용하는 방법 ===');

var a1 = new Array();
console.log(typeof(a1), a1 instanceof Array, a1.length);

//생성자 함수의 파라미터가 하나인 경우 :  배열의 크기
var a2 = new Array(10);
console.log(typeof(a2), a2 instanceof Array, a2.length);

//배열의 크기 지정하는 것은 별다른 의미가 없다 . : 동적으로 배열은 늘어난다.
a2[0]= 0;
a2[5]=5;
a2[10]=10;              //배열의 크기는 10이었지만 값을 넣으면 크기는 동적으로 늘어난다.
console.log(a2, a2.length);     

//생성자 함수의 파라미터가 두 개이상인 경우 : 초기값 설정
var a3 = new Array(0, 2, 4, 6, 8);
console.log(a3, a3.length);

console.log('=== 배열 생성 2: 리터럴을 사용하는 방법 ===');
var a4 = [];
console.log(typeof(a4), a4 instanceof Array, a4.length);

//배열 요소의 타입은 동일하지 않아도 된다.
var a5= [10,'JavaScript',true, undefined, {
    name: '둘리',
    age: 10
}, function(){
    console.log('Hello World');
}];
console.log(a5, a5.length);

//배열 순회
console.log('=== 배열의 순회 ===');
for(var i =0; i< a5.length; i++){
    console.log(a5[i]);
}
a5[5]();

console.log('=== Array vs Object ===');
var a6=[];
a6[0]=0;
a6['1']=1;   //length = 2 
a6.name='둘리';
a6.age = 10;

console.log(a6['0'], a6[1],a6['name'], a6.age, "/ length: "+ a6.length);

var a6 ={};
a6[0]=0;
a6['1']=1; 
a6['5']= 5; //a6.length -> undefined 해결 방법 ) a6.length = 5로 늘려주기   
a6.name='둘리';
a6.age = 10;

console.log(a6['0'], a6[1],a6['name'], a6.age, "/ length: "+ a6.length);

// for ~ in : property  순회
console.log('=== for ~ in : 객체 ===');

for(prop in a6){
    console.log(prop, a6[prop]);
}

