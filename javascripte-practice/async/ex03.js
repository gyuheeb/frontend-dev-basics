const fetch = require('./ex02');

const ex03 = async function(param){   // 비동기 함수를 하나 이상 호출한다.
    
    try{
    const data = await fetch(param);   //blocking (동기화)
    console.log(data);
    }catch(err){
        console.error(err);
    }
}

ex03("data");
console.log("wait .............");



















