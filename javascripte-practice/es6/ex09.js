/**
 *  Parenthesis- less function & Template Literal
 */

const div =function(s, ...v){
   // console.log(typeof(s), s instanceof Array, s.length);
   console.log(s, v);
    return function(){
        return '<div></div>';
    }
}


const StyleDiv =div`
    color: #f00;
    ${()=>{}}
    font-size: 20px;
    ${'hello'}
    font-weight: bold;
    `;