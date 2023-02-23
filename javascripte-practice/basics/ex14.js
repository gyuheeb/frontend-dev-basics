/*
    URL 다루기
*/

var url ="http://www.mysite.com/user?name=둘리&email=dooly@gmail.com";

//1. escape: URL 전부를 encoding
var url2 = escape(url);
console.log(url2); 

//2. encodingURL:  URL 전체 중 파라미터 encoding한다. url전체를 encoding해야하는 경우 사용 o
var url3 = encodeURIComponent(url);
console.log(url3); 

//3. encodeURLComponent: 개별적으로 값만 Encoding 해야하는 경우, 사용(x) 값만 사용(o)
var url4 = encodeURI(url);
console.log(url4); 

//4. 만들어야 할 URL이 "http://www.mysite.com/user?name=둘리&email=dooly@gmail.com" 인 경우
var url ="http://www.mysite.com/user";
var formDate = {
    name: "둘리",
    email:"dooly@gmail.com"
}

var toQueryString = function(o){
    var qs=[];
    for(prop in o){
        qs.push(prop + "=" + encodeURIComponent(o[prop]))
    }

   return qs.join('&');
}

console.log(url + "?"+toQueryString(formDate));