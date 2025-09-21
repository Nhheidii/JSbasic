//91
// OB in JS

// let character = {

//     //field
//     fullName: "Winne The Pooh",
//     birthYear: 1998,
//     adddress: {
//         country: "Viet Nam",
//         city: "Ninh Binh"
//     },
//     nums: [1, 2, 3],

//     //constructor
//     // fullname: this.fullName,
//     // birthYear: this.birthYear,
//     // adddress: this.adddress,
//     // nums: this.nums,

//     //method
//     eat: function () {
//         console.log("She eats honey");
//     },
//     getAge: function () {
//         return 2025 - this.birthYear;
//     },
//     getNum: function () {
//         return this.nums.reduce((a, b) => a + b, 0);
//     },

// }
// character.email = "totoro1371998@gmail.com";  
// console.log(character.getAge());
// console.log(character.getNum());
// console.log(character.fullName);
// character.eat(); 

// delete character.fullName;
// console.log(character);  

//96
// let target = {};
// let source1 = {
//     name: "Winne the Pooh",
// }
// let source2 = {
//     age: 27,
// }
// let target1 = Object.assign(target, source1, source2);
// console.log(target1);
// let target2 = { ...source1, ...source2 };
// console.log(target2);

// console.log(source1.hasOwnProperty("name"));


//100
//add field to prototype  
// function character(fullName, birthYear, adddress) {

//     //field
//     this.fullName = fullName,
//         this.birthYear = birthYear,
//         this.adddress = adddress,

//         this.showInfor = function () {
//             return (this.fullName + this.birthYear + this.adddress)
//         }

// }
// const character1 = new character("Winne the Pooh", 1998, "VietNam");
// console.log(character1);
// character.prototype.calcAge = function () {
//     console.log(2025 - this.birthYear);
// }
// console.log(character1);
// console.log(character1.hasOwnProperty("calcAge"));

//101
//class

// class character {
//     constructor(name, age, address) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
//     showInfor() {
//         console.log(this.name + this.age + this.address);
//     }
// }
// const character1 = new character("Pooh", 27, "VietNam");
// console.log(character1);
// console.log(character1.showInfor());
// console.log(Object.getPrototypeOf(character1));
// console.log(Object.getPrototypeOf(character1) === character.prototype);
// character.prototype.birthYear;
// character.prototype.calcAge = function (currentYear) {
//     console.log(currentYear - this.birthYear);
// }
// character1.birthYear = 1998;
// character1.calcAge(2025);     

//102
//Instance method
// class circle {
//     constructor(radius) {
//         this.radius = radius;
//     }
//     //instance method 
//     draw() {
//         console.log("draw is called");
//     }

//     //static method
//     static calcArea(radius) {
//         return Math.PI * radius * radius;

//     }

// }
// // const c1 = new circle(10);
// // const c2 = new circle(5);
// // console.log(c1.draw());
// // console.log(c2.draw());

// console.log(circle.calcArea(5)); 

//103
//inherite
// class school {
//     contructor(name, id, birthYear) {
//         this.name = name;
//         this.id = id;
//         this.birthYear = birthYear;
//     }
//     calcAge(currentYear) {
//         return currentYear - this.birthYear;
//     }
// }

//104
// calculate area of square and rectangle using inheritance
// class shape {
//     constructor(name) {
//         this.name = name;
//     }
//     //method
//     calcArea = function () {
//         return null;
//     }
// }

// class square extends shape {
//     constructor(name, side) {
//         super(name);
//         this.side = side;
//     }

//     calcArea = function () {
//         return this.side * this.side;
//     }
// }

// class rectangle extends shape {
//     constructor(name, height, width) {
//         super(name);
//         this.height = height;
//         this.width = width;
//     }

//     calcArea = function () {
//         return this.height * this.width ;
//     }
// }

// const square1 = new square("square1", 5);
// const rectangle1 = new rectangle("rec1", 5, 20);
// console.log(square1);
// console.log(rectangle1);
// console.log(square1.calcArea());
// console.log(rectangle1.calcArea());

//105
//getter and setter
// class school {
//     constructor(name, id, birthYear, score) {
//         this.name = name;
//         this.birthYear = birthYear;
//         this.id = id;
//         this._score = score;
//     }

//     calcAge(currentYear) {
//         return currentYear - this.birthYear;
//     }
//     get score() {
//         return this._score;
//     }
//     set score(value) {
//         if (value > 0 && value <= 100) {
//             this._score = value;
//         } else {
//             console.log("error");
//         }
//     }
// }
// const pooh = new school("Pood", 10001, 1998, 9);

//106
//Encapsulation
// class wallet {
//     constructor(bankName, pin) {
//         this.bankName = bankName;
//         this.pin = pin;
//         this.balance = 0;
//     }

//     //method
//     deposit(value) {
//         this.balance += value;
//     }

//     withdraw(value1) {
//         if (value1 > this.balance) {
//             console.log("Oops. Over your balance");
//         } else {
//             this.balance -= value1;
//             console.log("Withdraw succeed!")
//         }
//     }
// }
// const myWallet = new wallet("Yuchou", 1307);
// myWallet.deposit(1000);
// myWallet.withdraw(200);
// console.log(myWallet.balance);

//107
//private
// class wallet {
//     #pin;
//     #balance;
//     #isPinEnter = false;


//     constructor(bankName, pin) {
//         this.bankName = bankName;
//         this.#pin = pin;
//         this.#balance = 0;
//     }

//     //method
//     deposit(value) {
//         this.#balance += value;
//     }

//     withdraw(value1) {
//         if (value1 > this.#balance) {
//             console.log("Oops. Over your balance");
//         } else {
//             this.#balance -= value1;
//             console.log("Withdraw succeed!")
//         }
//     }
// }
// const myWallet = new wallet("Yuchou", 1307);
// myWallet.deposit(1000);
// myWallet.withdraw(200);
// console.log(myWallet.#balance);
// console.log(myWallet.#pin);



