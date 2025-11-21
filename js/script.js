

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
const arr = [1, 2, t < 10 ? "a" : "c", 3, 45, 10];
arr.push(20);
// console.log(arr.at(-2));

// console.log(arr.length);
// console.log(arr);
// arr.length = 5
// console.log(arr);
// arr.length = 0
// // console.log(arr);
// arr.length = 5
// console.log(arr.at(-1));
arr.push(4);
arr[0] = 10;
arr.length += 5;
arr.push(4);
arr.push(true);
arr.push(null);
arr.push([1, null, [null, false, "ok"]]);
arr[1] = function (x) {
  return x ** 2;
};

arr.push("ok2");

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

// console.log(
//     [1, 2, 3, 4, 5]
//         .map(val => val ** 2)
//         .filter(val => val % 2)
//         .join(', ')
//         // forEach(val => console.log(val))
// );

// Пользователь:
//
// Возраст
// Наличие работы
// Деньги
//
// Нужно проверить может ли он купить новый ноутбук за 2000$?
// Он может брать не только свои деньги, но и взять кредит. Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 100$ если ему просто больше 24-х лет и 0 в ином случае. Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false.

function canBy(age, money, price, job = false) {
  function getCredit(age, job) {
    switch (true) {
      case age >= 24 && job:
        return 500;
      case age >= 24:
        return 100;
    }

    return 0;
  }

  return price <= money + getCredit(age, job);
}

prices = [
  [100, 200],
  [150, 130],
  [180, 220],
  [240, 140],
  [80, 120],
];

const priceFilter = (delta = false, outString = false) => {
  const res = prices
    .map((val) => {
      val[2] = delta ? val[1] < val[0] : val[1] > val[0];
      return val;
    })
    .filter((val) => val[2]);

  return outString
    ? res.map((val) => `[${val[0]}, ${val[1]}]`).join(", ")
    : res;
};

// console.log(priceFilter(true, true));

// map

function myMap(array, func) {
  const res = [];
  if (Array.isArray(array) && array.length) {
    for (let val of array) {
      res.push(func(val)); // x => x ** 2
    }
  }

  return res;
}

const priceFilter2 = (delta = false, outString = false) => {
  let res = myMap(prices, (val) => {
    val[2] = delta ? val[0] > val[1] : val[1] > val[0];
    return val;
  });
  console.log(res);

  res = res.filter((val) => val[2]);

  return outString
    ? myMap(res, (val) => `[${val[0]}, ${val[1]}]`).join(", ")
    : res;
};

// console.log(priceFilter2(true, true));

// const ar2 = [1, 2, 3, 4, 5]

// console.log(myMap(ar2, x => x ** 2))

// global

function userLogin() {
  let user;

  
  const f = function (userName = prompt("", "")) {
    user = userName || "guest";
    return user;
  };

  return f;
}

// const funcUser = userLogin();

// console.log(funcUser());
// // user = "petya";
// console.log(funcUser());
// // user = "kolya";
// console.log(funcUser("oleg"));
// console.log(user);




// counter 
/*
val
+ (1) -> x
- (1) -> x
get -> val
set -> val = x
reset -> val =0
*/


function getCounter() {
  let count = 0;

  return [
    (x = Number(prompt("Введите число '+'"))) => {
      x = x || 1;
      count += x;
    },
    (x = Number(prompt("Введите число '-'"))) => {
      x = x || 1;
      count -= x;
    },
    () => {
      alert(`count = ${count}`)
      return count},
    (x = Number(prompt("Введите число - set"))) => {
      x = x || 0; 
      count = x;
    },
    () => {
      count = 0;
    }
  ]
}


const counter = getCounter();

// console.log(counter);
const text = `
1 - inc
2 - dec
3 - get value
4 - set value
5 - reset value
6 - exit
`;

while (false) {
  let val =  Number(prompt(text))
  val = val || 6  
  
  if (val === 6) {
    console.log('The end!');
    
    break;
  }

  switch (val) {
    case 1:
      counter[0]();
      console.log(`inc: - ok`);
      break;
    case 2:
      counter[1]();
      console.log(`dec: - ok`);
      break;
    case 3:
      console.log(`count: ${counter[2]()}`);
      break;
    case 4:
      counter[3]()
      console.log(`set: ok`);
      break;
    case 5:
      counter[4]()
      console.log(`reset: ok`);
      break;
    
  }
}

// console.log(counter[2]());
 // 0 + 1
// counter[0](5); // 1 + 5
// console.log(counter[2]()); //6
// counter[1](); // 6 - 1
// console.log(counter[2]());
// counter[3](10); // -> 10
// console.log(counter[2]()); //10
// counter[4](); // -> 0
// console.log(counter[2]()); // 10



const data = [10, 2, 3, 4, 15, 6, 7, 15, '5']
// console.log(data);

const acc = data
  .filter(val => data
  .filter(val => val % 2))
  .reduce((acc, val) => acc + val)
  
  

// reduce((acc, val) => {
//   console.log(acc, val);
//   if (val % 2) {
// // нечетное
//     acc += val;
//   }
//   return acc;
// }, 0 )

// console.log(data.filter(val => val % 2));
const findFunc = (val) => (val % 2) && val < 8 && val > 2

const res1 = data.findIndex(findFunc)
const l = data.filter(findFunc)

if (l.length) {
  // code

  // l 
}

// const can = ['update', 'create', 'view', 'delete']
const canUser = ['update', 'create', 'view']

// console.log(canUser.includes('delete'));

const data2 = [2, 3, 4, 56, 7, 8, 9];

// console.log(data.concat(data2));


// const res2 = data.slice(4, -2).reverse()
// console.log(data, res2);

// const res2 = data.splice(4, 3)
// console.log(data, res2);


function calc (a, b, c, d) {
  return a + b + c + d;
}


// console.log(calc(data[0], data[1], data[2], data[3]));
// console.log(data.slice(0,4));
// console.log(...data.slice(0,4));

// console.log(calc(...data));

// console.log([...data, ...data2])


function calc2(a, b, c, d, ...data) {

  // if (data.length) {
  //   console.log(data);
  // }
console.log(a, b, c, d, data);

}



// console.log(calc2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const [a1, b1, c1, d1, ...res5] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(a1, b1, c1, d1, res5);

// const text2 = `
// 1. text1 
// 2. text2`;

// console.log(text2);
// console.log('1. text1\n2. text2');


const s11 = 'Вася Пупкин';
const s12 = '🥤User Name';

// console.log(typeof s11, s11);

// s11[0] = 'C';
// data[0] = 'C';

// console.log( data.at(-1), s11.charAt(1));
// console.log(s11.length, s12.length);
// console.log(s12[2], s12[0] + s12[1]);

// console.log(s11.toLowerCase().replaceAll("п", 'б'));

// console.log(s11);

// console.log(s11.padStart(12, '*'));

const card = "2222 2222 2222 3333";
// const card = "2222222222223333";
// console.log(
//   card,'\n',
//   card
//     .replaceAll(" ", "")
//     .slice(-4)
//     .padStart(16, "*")
// );



const phones = [
'+7(111)111-11-11',
'+7(222)-222-22-22',
'8(111)111-11-11',
'8(222)-222-22-22',
'+71111111111',
'81111111111',
'8(222) 222 22 22',
'+7(222)-222-22-22',



// incorrect
'+7(222)-222+72-22',
'+711111111',
'91111111111',
'8(222)222a222',
];

// console.log(
//   s11
//     .split(' ')
//     .join(' ')

// );

// console.log(
//  phones
//   .map(el => 
//     el
//       .replaceAll(" ", "")
//       .replaceAll("-", "")
//       .replaceAll("(", "")
//       .replaceAll(")", "")
//       .replace("+7", "8")    
//   )
//   .filter(el => 
//     el.startsWith("8") &&
//     Number(el) &&
//     el.length === 11
//   )
//   .map(el => `+7${el.slice(1)}`)
// )




const data32 = [1, 200,  30, 14, 5, 8, 149, 141, 30];
const dataS = ["text", "2 text", "2 Text", "Text", "2"];

const dataB = [true, true, false, null, undefined ]

console.log(data32.sort((a, b) => b - a));
console.log(dataS.sort());
console.log(dataB.sort());
