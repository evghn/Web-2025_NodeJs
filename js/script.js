// Number

// String - строки

// Boolean (true / false)

// null - признак (способ описания) пустого значения

// undefined



// BigInt 
// Symbol


// Array []
// Object {}

// однострочный комментарий

/*
многострочный комментарий

*/

/**
 *  JS DOC
 *  
 */


// let a = 1
// console.log(a, typeof a); 
// a = 'text'
// console.log(a, typeof a); 

// let b = 5
// console.log(b, typeof b); 
// b = 6
// console.log(b, typeof b); 


// number

// + - * / ** % 

let a = 1;

// a = a + 2;
// a = a / 3;

// a = a ** 2 + 3;

// console.log(a % 2)
// a = 1;
// a = a + 1; // 2
// a += 1; //3

// console.log(a++);
// console.log(a);


// console.log(++a);

// // --
// a = a - 1;
// a -= 1;
// a--;
// --a;

// a *= 2;
// a /= 2;
// a **= 2;


let s = "text1"
let s1 = 'text2 s'

// console.log("text 'text'");
// console.log('text "text"');

s += " " + s1
// console.log(s);

s = `  ${s} + " " + ${s1} = ${a + 5}  `;
console.log(s.trim());

// string . trim() -> string
console.log(256.trim().length);


// php
// $s = "   text   ";
//  result <- str_trim($s)
// $s = str_trim($s)
//echo  strlen($s) -> 4
