/**
 * Array 확장(prototype 기반의 확장)
 * list 함수
 */

Array.prototype.remove = function(index){
    this.splice(index ,1);
}
Array.prototype.insert = function(index, value){
    if(value instanceof Array){
        // for(var i= 0;i<value.length; i++){
        //     this.splice(index+i, 0,value[i]);
        // }

        //value.forEach(function(e){
        //      error !!!
        //      콜백 함수 안의 this는 어휘상의 this와 일치하지 않는다.
        //      this.splice(index+i, 0, e);
        //     console.log(this);
        // });

        //해결 방법1
        // var _this = this; // this를 외부변수로 저장해둔다.
        // value.forEach(function(e){
        //     _this.splice(index++, 0, e);
        // });          //출력 -> [ 1, 2, 'a', 'b', 'c', 4 ]

        //해결 방법2
        //Function.prototype.bind() 함수를 사용한다.
        //콜백 함수 블록 안의 this를 세팅할 수 있다.
        this;
        value.forEach(function(e){
            _this.splice(index++, 0, e);
        }.bind(this));          //출력 -> [ 1, 2, 'a', 'b', 'c', 4 ]

    }else{
         this.splice(index,0, value);
    }
   
}

//list 함수 사용하기
var a = [1,2,4];
console.log(a);

a.insert(2,3);  // 자리 2에 3 insert
console.log(a);

a.remove(2); // 자리 2번 remove
console.log(a);

a.insert(2,['a','b','c']);
console.log(a);