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

let s = "text1";
let s1 = "text2 s";

// console.log("text 'text'");
// console.log('text "text"');

s += " " + s1;
// console.log(s);

s = `  ${s} + " " + ${s1} = ${a + 5}  `;
// console.log(s.trim());

// string . trim() -> string
// console.log(256.trim().length);

// Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.Выведете в консоль:
// 1) Успеете ли вы взяться за работу?
// 2) Сколько вы заработаете?
// *) расчитать ситуацию(ии) когда не сможете выполнить заказ

// const daysAll = 40 / 5; // days count
// const holydays = 3
// if (11 <  daysAll + holydays) {
//     console.log(`Работу не выполним`);
// } else if (daysAll < 11 - 2) {
//     console.log(`Работу выполним за: ${daysAll} дней`);
//     console.log(`Заработаем: ${daysAll * 5 * 80 } $`);
// }

//Вася положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц. Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года после снятия вклада и остаток после покупки.

// Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах

// const cost = 14500;
// const rate = 7 / 12 / 100;
// const summAll = 12000 * (1 + rate) ** (2 * 12)

// if ( cost <= summAll ) {
//     console.log(`Сумма вклада: ${summAll}$`);
//     console.log(`Остаток от покупки: ${summAll - cost } $`);

// } else {
//      console.log(`Дом не купить`);
// }

// php
// $s = "   text   ";
//  result <- str_trim($s)
// $s = str_trim($s)
//echo  strlen($s) -> 4

let c;

const b = c ?? 20;

c = null || undefined;

// c ??= 20
// c = c ?? 20
if (c === null || c === undefined) {
  c = 20;
} else {
  c = 2;
}

// console.log(c);

/*
const value = condition 
    ? true -> 
    : false -> 
*/
// a = 55

// a < 6 ? (a > 4 ? 'Yes' : (a <= 4 ? 'No': '!!!')) : '???'

// a = undefined ?? NaN ?? null ?? "" ?? " "
// console.log(a);

//

//

// alert(undefined ?? NaN ?? null ?? "" ?? " ");
/*
switch (var) {
    case value: 
        action do;
}
*/

a = 3;
c;
if (a == 3) {
  c = 10;
} else if (a == 4) {
  c = 15;
} else if (a == 5) {
  c = 25;
} else if (a == 7) {
  c = a;
} else if (a == 10) {
  c = 5;
} else {
  c = null;
}

let d;
switch (a) {
  case 3:
    c = 10;
    d = false;
    break;
  case 4:
    c = 15;
    d = false;
    break;
  case 10:
    c = 5;
    d = true;
    break;
  default:
    d = true;
}
// console.log(`c = ${c}, d = ${d}`);
// c = 10 d = false
// c = null d = true

const role = "client"; // user client admin manager director
let _hello;
switch (role) {
  case "user":
  case "client":
  case "manager": // role === 'user' | 'client' | 'manager'
    block = false;
    // hello(role)

    break;

  case "admin":
    block = true;
    break;

  case "director":
    block = true;
    break;

  default:
    block = false;
}

switch (true) {
  case a < 5: // true === a < 5
    block = true;
    break;
  case a >= 100:
    block = false;
    break;
  default:
    block = false;
}
// console.log(block);

const size = 254; // G
let alfa;
let summByte = 1;
/*


k = 1024 (2 ** 10)
M = 1024 * 1024
G = 10204 * 1024 *1024
T = 10204 * 1024 *1024 * 1024
*/

alfa = "G";
switch (alfa) {
  case "T":
    summByte *= 1024;
  case "G":
    summByte *= 1024;
  case "M":
    summByte *= 1024;
  case "k":
    summByte *= 1024;
  case "b":
    summByte *= size;
}

// console.log(summByte);

// scope
/*


*/

// let f = 1;
// let y
// {
//     // local scope
//     let v = 3 + f; // 4
//     console.log(v)
//     {
//         let v = 4 + f  // 4 + 1
//         f++
//          console.log('302', v)
//         {
//             let k = 5 + f + v
//             console.log(k, f)
//             y = v
//         }
//     }
// }
//  console.log(y)

// console.log(f)

// function hello(userName = 'user', role) {
// let _hello;
//    switch (role) {
//     case 'user':
//     case 'client':
//     case 'manager': // role === 'user' | 'client' | 'manager'
//         _hello = true;
//         break;
//     case 'admin':
//     case 'director':
//         _hello = false;
//         break;
//     default:
//         _hello = true
// }
//    return _hello
//     ? `Hello ${userName}`
//     : ""
// }

// let z = hello('admin,', 'admin')
// console.log(z);

const hello = function (userName = "user", role) {
  let _hello;
  switch (role) {
    case "user":
    case "client":
    case "manager": // role === 'user' | 'client' | 'manager'
      _hello = true;
      break;
    case "admin":
    case "director":
      _hello = false;
      break;
    default:
      _hello = true;
  }
  return _hello ? `Hello ${userName}` : "";
};
//  let z = hello('admin,', 'admin')
//  console.log(typeof hello);

//     hello()

// const calc = (x = 1, m) => {
//   if (typeof x === "number") {
//     if (typeof m === "number" || m === undefined) {
//       if (m === 0 || m) {
//         return x ** m;
//       } else {
//         return x ** 2;
//       }
//     }
//   }

//   return false;
// };

// console.log(calc(2, 6));

// function f2(x, y) {
//   function f1(x) {
//     console.log(x);
//   }

//   const res = x * y;
//   f1(res);

//   return res;
// }


// function inc(x, y) {
//     return x + y;
// }

// function dec(x, y) {
//     return x - y;
// }

// function pow(x, y) {
//     return x ** y;
// }

// function calc(x, y, func)  {
//     return func(x, y)
// } 

// console.log(calc(2, 5, inc));
// console.log(calc(2, 5, dec));
// console.log(calc(2, 5, pow));
// console.log(calc(2, 5, function(x, y) {
//     return x + y;
// }));

// console.log(calc(2, 5, (x, y) => x + y));

// function varToType(x, func) {
//     return func(x)
// }

// console.log(varToType('1', Number));
// console.log(varToType(100, String));

// function calc(num) {
//     return function (pow) {
//         return num ** pow; 
//     }
// }

// const calcRow = num => pow => num ** pow; 
 
// const pow = calc(2);
// console.log(calcRow(5)(2));

// let i = c = 0

// for (;;) { // i < 10  && c < 10
//     if ( i > 10 || c > 9) {
//         break;
//     }

//     c += 2;
//     console.log(i, c);
//     i--;
// }

// for(let i = 10; i > 0; i++) {
//     console.log(i);
    
// }

// for(;;){}

// let i = 0;
// while (i < 10) {
//     if (!(i % 2)) {
//         i++
//         continue
//     }
    
//     console.log(i);
    
//     i++;
// }
// let i = 10
// do {
// console.log(i)
// } while (i < 10)

// while (true) {
//     console.log('ok')
//     break;
// }

// Array
const t = 10;
const arr = [1,2,  t < 10 ? 'a' : 'c' , 3, 45, 10];
arr.push(20)
// console.log(arr.at(-2));

// console.log(arr.length);
// console.log(arr);
// arr.length = 5
// console.log(arr);
// arr.length = 0
// // console.log(arr);
// arr.length = 5
// console.log(arr.at(-1));
arr.push(4)
arr[0] = 10
arr.length += 5
arr.push(4)
arr.push(true);
arr.push(null);
arr.push([1, null, [null, false, "ok"]]);
arr[1] = function (x) {
    return x ** 2
};


arr.push('ok2');

// console.log(arr[1](3));
// console.log(arr.at(-1));


// console.log(arr.pop(), arr);

// for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//         console.log(`${i} => `, arr[i]);
//         continue;
//     }
//     console.log(`${i} => ${arr[i]}`);    
// }

// for (let value of arr) {
//     console.log(value);    
// }

// for (let index in arr) {
//     console.log(index,' => ', arr[index]);    
// }

// arr.forEach((value, index) => {
//     console.log(index, ' => ', value);    
// })

// [1, 2, 3, 4, 5].forEach((value, index) => {
//     console.log(index, ' => ', value);    
// })

// console.log("aaa".toUpperCase());

console.log(
    [1, 2, 3, 4, 5]
        .map(val => val ** 2)
        .filter(val => val % 2)
        .join(', ')
        // forEach(val => console.log(val))
);
