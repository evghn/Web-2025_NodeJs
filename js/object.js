const user = {
  name: "Vasya",
  name2: "Vasya2",
  1: "_",
  "second name": "",
  key: 25,
  obj: {
    obj2: {
      obj: {},
    },
  },
  info() {
    return `name: ${this.name}\nname2: ${this.name2}`;
  },
  // info2: () => {
  //     console.log(this);

  //     return `name: ${this.name}\nname2: ${this.name2}`;
  // },

  // obj: 2
};

user["second name"] = "Petya";

user["login user"] = "login_vasya";
user.age = 25;
user.age2 = 35;
// const key = prompt("key:");
// const value = prompt("value:");

// user[key] = value;

// delete user[key]
// delete user.key
// delete user.name
// console.log(user)

const user2 = { ...user };

user2.name = "Vova";
// console.log(user2 === user, user2, user);

// const name = user2.name
// const age = user2.age

const { name2: name, age2: age, ...obj } = user;

const keySearch = "age";
// if (keySearch in user) {
//     console.log(user[keySearch]);
// } else {
//     console.log("no");
// }

// let res2 = ""

// for (const key in user) {
//     console.log(`"${key}": ${user[key]}`);
// }

// console.log(
//     Object
//         .keys(user)
//         .map(key => `"${key}": ${user[key]}`)
//         .join("\n")
// );

// console.log(Object.values(user));
// console.log(
//     Object
//         .entries(user)
//         // .map(el => `"${el[0]}": ${el[1]}`)
//         // .join("\n")
// );

// const info2 = "info"
// if (info2 in user) {
//     console.log(user[info2]());
// }

// console.log(user?.info2?.data?.props);

const wallet = {
  balance: 0,
  inc(val = 0) {
    this.count += val;
  },
  dec(val = 0) {
    if (this.balance - val >= 0) {
      this.balance -= val;
      return true;
    }
    return false;
  },
  getValue() {
    return this.balance;
  },
  onBuy(cost) {
    return this.dec(cost);
  },
};

const orders = [
  {
    id: 1,
    amount: 5,
    total: 500,
  },
  {
    id: 2,
    amount: 3,
    total: 500,
  },
  {
    id: 3,
    amount: 2,
    total: 500,
  },
  {
    id: 4,
    amount: 5,
    total: 1500,
  },
  {
    id: 5,
    amount: 5,
    total: 2500,
  },
  {
    id: 6,
    amount: 4,
    total: 5500,
  },
  {
    id: 7,
    amount: 15,
    total: 500500,
  },
];

const sortField = "total";
const directSort = "down";

function sortObjects(arrayObjects, field, direct = "up") {
  return arrayObjects.sort((val1, val2) => {
    return direct === "up"
      ? val1[field] - val2[field]
      : val2[field] - val1[field];
  });
}

// console.log(sortObjects(orders, sortField, directSort));

// console.log(
//     orders
//         .reduce((sum, val) => sum + val.total, 0) / orders.length
// )

function changeValue(obj, amount = 0, total = 0) {
    return {        
        id: obj.id, 
        amount, 
        total
    } 
}

console.log(orders[2]);

orders[2] = changeValue(orders[2], 10, 500)

console.log(orders[2]);
