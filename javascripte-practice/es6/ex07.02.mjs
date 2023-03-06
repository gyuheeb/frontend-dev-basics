/**
 * 
 *  Unnamed export: default 키워드를 사용한다.
 */
export default {
    add: function(a,b){
    return a +b ;
},
substract: function(a,b){
    return a-b;
}
}
// error : 이름없이 export하기 때문에 하나만 export할 수 있다.
//export default function(a,b){
//    return a - b ;
//}

