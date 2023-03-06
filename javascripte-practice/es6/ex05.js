/**
 *   Arrow function
 */
const numbers = [1,2,3,4,5];


const power = function(x){
    return x * x;
}


numbers.forEach(function(n){
    process.stdout.write('${n}: ${power(n)}\t');

});

//ex 1
console.log('\n---------\n');
numbers.forEach(function(n){
   // let result =(function(){
    //  return x*x;
    //})(n);
    //let result =((x)=>{return x*x})(n);

    let result =( x => x*x)(n);
    process.stdout.write(`${n}: ${result}\t`);
});


//ex 2
console.log('\n---------\n');
numbers.forEach(function(n){
     process.stdout.write(`${n}: ${( x => x*x)(n)}\t`);
 });

 //ex 3
 console.log('\n---------\n');
 numbers.forEach(n => process.stdout.write(`${n}: ${( x => x*x)(n)}\t`));

 //ex3 여러행 함수
 console.log('\n---------\n');
 [5, 3, 15, 1045, 4, 92].forEach(e => {
    if(e % 5){
        process.stdout.write(`${e}: ${( x => x*x)(e)}\t`);
    }
});


















