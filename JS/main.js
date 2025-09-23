
//56
// console.log("The value of c is" + c);
// var c = 9;

// function scopehani() {
//     if (true) {
//         var a = 8;
//         console.log("a is" + a);
//     }
//     console.log(a);
// }
// scopehani();   


//57
// declaration function -> hoisiting ok
// hoistFunction();
// function hoistFunction() {
//     console.log("Hello, this is nhheidi");
// }

// nonHoistFunction();
// let nonHoistFunction = function () {
//     console.log("Hello. this is nonHoisedFunction");
// }


//58
// caculate n! using recursion 
// function recur(n) {
//     if (n === 0 || n === 1) {
//         return n;
//     } else {
//         return n * recur(n - 1);
//     }
// }
// let n = Number(prompt("Enter n number"));
// let result = recur(n);
// alert(n + "! is " + result);  

//59
// Display (MaxLength=20) message, if length oversized. cut and display
// let message = prompt("Enter your message");
// if (message.length <= 20) {
//     alert("your entered message is: " + message);
// } else {
//     let cutMessage = message.slice(0, 20);
//     alert("Your entered message is:" + cutMessage);

// }

//64
// find a character
// let message = prompt("enter your string here");
// let char = prompt("enter the character u wanna find out");
// let theFirstChar = message.indexOf(char);
// let theLastChar = message.lastIndexOf(char);
// let notFound = message.includes(char);
// alert("the char u wanna findout first and last place is: " + theFirstChar + "and" + theLastChar);
// alert(notFound);


//66
// spilt()
// let films = "5cm/s, laputa, chihiro";
// let arr = films.split(",");
// console.log(arr);

//67
// enter a message, count the uppercase character, lowercase character, space,number character;  
//trim isnt used this case to save time;     

// let mess = prompt("Enter ur message");
// let lowCharNum = mess.length;
// console.log("ur mess length is: " + lowCharNum);
// let spaceArr = mess.split(" ");
// let spaceNum = spaceArr.length - 1;
// console.log("the space Num is: " + spaceNum);
// console.log(spaceArr);
// let numNum = 0;
// let numUpper = 0;
// for (let i = 0; i < mess.length; i++) {
//     if (mess[i] >= "0" && mess[i] <= "9") {
//         numNum += 1;
//     } else if (mess[i] >= "A" && mess[i] <= "Z") {
//         numUpper += 1;
//     }
// }
// console.log("the UppercaseChar is:" + numUpper);
// console.log("the numberCharacter is:" + numNum);

//password check
//minLength is 6
// at least 1 Uppercase character
// at least 1 lowercase character
// at least 1 number 

// let pw = prompt("enter ur password");
// let upperCheck = 0;
// let lowerCheck = 0;
// let numCheck = 0;
// while (pw.length < 6) {
//     pw = prompt("too short. plese enter at least 6 character password");
// }
// for (let i = 0; i < pw.length; i++) {
//     console.log(pw[i]);
//     if (pw[i] >= "A" && pw[i] <= "Z") {
//         upperCheck += 1;
//     } else if (pw[i] >= "a" && pw[i] <= "z") {
//         lowerCheck += 1;
//     } else if (pw[i] >= "0" && pw[i] <= "9") {
//         numCheck += 1;
//     }

// }
// console.log(upperCheck);
// console.log(lowerCheck);
// console.log(numCheck);
// while (numCheck == 0 || upperCheck == 0 || lowerCheck == 0) {
//     pw = prompt("password not allowed. please try again");
// }
// alert("Open sesame!");


// convert entered mess from fixed password
// example
// rule
// abcdefghijklmnopqrstuvwxyz
// xcvbnmasdfghjklqwertyuiop

//test case
// enter message ; abcde
// converted password ; xcvbn

// String.LastIndexOf(SearchValue, endindex); 
// String.indexof(searchvalue, index);  
// String.includes(searchString, fromIndex);                       
// .charAt(index); 

// let mess = prompt("Enter your message");
// const a = "abcdefghijklmnopqrstuvwxyz";
// const b = "xcvbnmasdfghjklqwertyuiop";
// let convertedPassword = "";

// for (let i = 0; i < mess.length; i++) {
//     a.indexOf(mess[i]);
//     console.log(a.indexOf(mess[i]));
//     let convertChar = b.charAt(a.indexOf(mess[i]));
//     console.log(convertChar);
//     console.log(convertedPassword.concat(convertChar));
//     convertedPassword = convertedPassword.concat(convertChar);
// }
// console.log("message after being converted is: " + convertedPassword);
// alert("your message after being converted is: " + convertedPassword);


// count the disappear time of word  
// test case
// " city of stars are u shining just for me, city of stars there so much that i can't see"
// city: 2 time appears 


// let message = prompt("Hi, enter something");
// let char = prompt("enter the word u want to count its time appeared");
// let arr = message.split(" ");
// console.log(arr);
// let times = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === char) {
//         times += 1;
//     }
// }
// alert(char + "appeared times is:" + times);   
// console.log(times);    

//seperate num and char 
// input: abc123 
// output:  num is 123 and char is abc;  
// let message = prompt("Hi, enter something");
// let num = "";
// let char = "";
// for (let i = 0; i < message.length; i++) {
//     if (message[i] >= "a" && message[i] <= "z") {
//         char = char.concat(message[i]);
//     } else if (message[i] >= 0 && message[i] <= 9) {
//         num = num.concat(message[i]);
//     }
// }
// alert("num is: " + num + " char is: " + char);

//73
// let currentDate = new Date();
// console.log(typeof currentDate);
// let year = currentDate.getFullYear;
// let currentTimeStamp = new Date().getTime(); 
// console.log(currentTimeStamp);    

//74
// let myDate1 = new Date(2025, 10, 21);
// console.log(myDate1);
// console.log((myDate1).toLocaleDateString());
// let myDate2 = new Date("2025-09-21T00:27:15");
// console.log(myDate2);
// console.log(myDate2.toLocaleDateString());

//77
// enter year of birth and show/ display the age
// let year = Number(prompt("Enter ur year of birth"));
// while (!(year > 0 && year % 1 === 0)) {
//     year = Number(prompt("Please enter ur real year of birth"));
// }
// let currentTime = new Date();
// let currentYear = currentTime.getFullYear();
// console.log(currentTime);
// console.log(currentYear);
// let age = currentYear - year;
// alert("Your age now is: " + age);

//78
//write a program to count down time by seconds
// let time = Number(prompt("Enter the coutdown time"));
// while (!(time > 0 && time % 1 === 0)) {
//     time = Number(prompt("not allơwed number, pleaser enter again"));
// }
// function countdown() {
//     console.log(time);
//     if (time === 0) {
//         clearInterval(stopInterval);
//         console.log("Oops, time up");
//     }
//     time--;
// }
// let stopInterval = setInterval(countdown, 1000);

//79 not understand much well 
// you are chatting with user A 
// user A offline 
// calculate and show the time A has offlined


// let timeStamp = Number(prompt("input timeStamp here"));
// function timeSince(timeStamp) {
//     let now = new Date();
//     console.log("Current timeStamp is: " + now.getTime());
//     let timeDifference = now - timeStamp;
//     let second = Math.floor(timeDifference / 1000);
//     let minutes = Math.floor(second / 60);
//     let hours = Math.floor(minutes / 60);
//     let day = Math.floor(hours / 24);
//     let month = Math.floor(day / 30);
//     let year = Math.floor(month / 12);
//     if (year > 0) {
//         console.log("Online " + year + " year ago");
//     } else if (month > 0) {
//         console.log("Online " + month + " month ago");

//     } else if (day > 0) {
//         console.log("Online " + day + " day ago");

//     } else if (hours > 0) {
//         console.log("Online " + hours + " hours ago");

//     } else if (minutes > 0) {
//         console.log("Online " + minutes + " minutes ago");

//     }

// }
// timeSince(timeStamp);  

//80
//Spread
// let M1 = [1, 2, 3];
// let M2 = [...M1];
// console.log(M2);
// M2[0] = 99;
// console.log(M2);

// function sum(a, b, c) {
//     return a + b + c;
// }
// let array = [1, 2, 3];

// let result = sum(...array);
// console.log(result);

//array combine
// let A1 = [1, 2, 3];
// let A2 = [4, 5, 6];
// let result = [...A1, ...A2];
// console.log(result);

//create new array and add more 
// let A3 = [7, 8, 9];
// let A5 = [...A3, 10];
// console.log(A5); 

//transfor iterable -> array 
// let myName = "Pooh";
// let arrName = [...myName];
// console.log(arrName); 

//85
//sort(); 
// let A1 = ["b", "c", "a"];
// console.log(A1.sort());   

//56
// console.log("The value of c is" + c);
// var c = 9;

// function scopehani() {
//     if (true) {
//         var a = 8;
//         console.log("a is" + a);
//     }
//     console.log(a);
// }
// scopehani();   


//57
// declaration function -> hoisiting ok
// hoistFunction();
// function hoistFunction() {
//     console.log("Hello, this is nhheidi");
// }

// nonHoistFunction();
// let nonHoistFunction = function () {
//     console.log("Hello. this is nonHoisedFunction");
// }


//58
// caculate n! using recursion 
// function recur(n) {
//     if (n === 0 || n === 1) {
//         return n;
//     } else {
//         return n * recur(n - 1);
//     }
// }
// let n = Number(prompt("Enter n number"));
// let result = recur(n);
// alert(n + "! is " + result);  

//59
// Display (MaxLength=20) message, if length oversized. cut and display
// let message = prompt("Enter your message");
// if (message.length <= 20) {
//     alert("your entered message is: " + message);
// } else {
//     let cutMessage = message.slice(0, 20);
//     alert("Your entered message is:" + cutMessage);

// }

//64
// find a character
// let message = prompt("enter your string here");
// let char = prompt("enter the character u wanna find out");
// let theFirstChar = message.indexOf(char);
// let theLastChar = message.lastIndexOf(char);
// let notFound = message.includes(char);
// alert("the char u wanna findout first and last place is: " + theFirstChar + "and" + theLastChar);
// alert(notFound);


//66
// spilt()
// let films = "5cm/s, laputa, chihiro";
// let arr = films.split(",");
// console.log(arr);

//67
// enter a message, count the uppercase character, lowercase character, space,number character;  
//trim isnt used this case to save time;     

// let mess = prompt("Enter ur message");
// let lowCharNum = mess.length;
// console.log("ur mess length is: " + lowCharNum);
// let spaceArr = mess.split(" ");
// let spaceNum = spaceArr.length - 1;
// console.log("the space Num is: " + spaceNum);
// console.log(spaceArr);
// let numNum = 0;
// let numUpper = 0;
// for (let i = 0; i < mess.length; i++) {
//     if (mess[i] >= "0" && mess[i] <= "9") {
//         numNum += 1;
//     } else if (mess[i] >= "A" && mess[i] <= "Z") {
//         numUpper += 1;
//     }
// }
// console.log("the UppercaseChar is:" + numUpper);
// console.log("the numberCharacter is:" + numNum);

//password check
//minLength is 6
// at least 1 Uppercase character
// at least 1 lowercase character
// at least 1 number 

// let pw = prompt("enter ur password");
// let upperCheck = 0;
// let lowerCheck = 0;
// let numCheck = 0;
// while (pw.length < 6) {
//     pw = prompt("too short. plese enter at least 6 character password");
// }
// for (let i = 0; i < pw.length; i++) {
//     console.log(pw[i]);
//     if (pw[i] >= "A" && pw[i] <= "Z") {
//         upperCheck += 1;
//     } else if (pw[i] >= "a" && pw[i] <= "z") {
//         lowerCheck += 1;
//     } else if (pw[i] >= "0" && pw[i] <= "9") {
//         numCheck += 1;
//     }

// }
// console.log(upperCheck);
// console.log(lowerCheck);
// console.log(numCheck);
// while (numCheck == 0 || upperCheck == 0 || lowerCheck == 0) {
//     pw = prompt("password not allowed. please try again");
// }
// alert("Open sesame!");


// convert entered mess from fixed password
// example
// rule
// abcdefghijklmnopqrstuvwxyz
// xcvbnmasdfghjklqwertyuiop

//test case
// enter message ; abcde
// converted password ; xcvbn

// String.LastIndexOf(SearchValue, endindex); 
// String.indexof(searchvalue, index);  
// String.includes(searchString, fromIndex);                       
// .charAt(index); 

// let mess = prompt("Enter your message");
// const a = "abcdefghijklmnopqrstuvwxyz";
// const b = "xcvbnmasdfghjklqwertyuiop";
// let convertedPassword = "";

// for (let i = 0; i < mess.length; i++) {
//     a.indexOf(mess[i]);
//     console.log(a.indexOf(mess[i]));
//     let convertChar = b.charAt(a.indexOf(mess[i]));
//     console.log(convertChar);
//     console.log(convertedPassword.concat(convertChar));
//     convertedPassword = convertedPassword.concat(convertChar);
// }
// console.log("message after being converted is: " + convertedPassword);
// alert("your message after being converted is: " + convertedPassword);


// count the disappear time of word  
// test case
// " city of stars are u shining just for me, city of stars there so much that i can't see"
// city: 2 time appears 


// let message = prompt("Hi, enter something");
// let char = prompt("enter the word u want to count its time appeared");
// let arr = message.split(" ");
// console.log(arr);
// let times = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === char) {
//         times += 1;
//     }
// }
// alert(char + "appeared times is:" + times);   
// console.log(times);    

//seperate num and char 
// input: abc123 
// output:  num is 123 and char is abc;  
// let message = prompt("Hi, enter something");
// let num = "";
// let char = "";
// for (let i = 0; i < message.length; i++) {
//     if (message[i] >= "a" && message[i] <= "z") {
//         char = char.concat(message[i]);
//     } else if (message[i] >= 0 && message[i] <= 9) {
//         num = num.concat(message[i]);
//     }
// }
// alert("num is: " + num + " char is: " + char);

//73
// let currentDate = new Date();
// console.log(typeof currentDate);
// let year = currentDate.getFullYear;
// let currentTimeStamp = new Date().getTime(); 
// console.log(currentTimeStamp);    

//74
// let myDate1 = new Date(2025, 10, 21);
// console.log(myDate1);
// console.log((myDate1).toLocaleDateString());
// let myDate2 = new Date("2025-09-21T00:27:15");
// console.log(myDate2);
// console.log(myDate2.toLocaleDateString());

//77
// enter year of birth and show/ display the age
// let year = Number(prompt("Enter ur year of birth"));
// while (!(year > 0 && year % 1 === 0)) {
//     year = Number(prompt("Please enter ur real year of birth"));
// }
// let currentTime = new Date();
// let currentYear = currentTime.getFullYear();
// console.log(currentTime);
// console.log(currentYear);
// let age = currentYear - year;
// alert("Your age now is: " + age);

//78
//write a program to count down time by seconds
// let time = Number(prompt("Enter the coutdown time"));
// while (!(time > 0 && time % 1 === 0)) {
//     time = Number(prompt("not allơwed number, pleaser enter again"));
// }
// function countdown() {
//     console.log(time);
//     if (time === 0) {
//         clearInterval(stopInterval);
//         console.log("Oops, time up");
//     }
//     time--;
// }
// let stopInterval = setInterval(countdown, 1000);

//79 not understand much well 
// you are chatting with user A 
// user A offline 
// calculate and show the time A has offlined


// let timeStamp = Number(prompt("input timeStamp here"));
// function timeSince(timeStamp) {
//     let now = new Date();
//     console.log("Current timeStamp is: " + now.getTime());
//     let timeDifference = now - timeStamp;
//     let second = Math.floor(timeDifference / 1000);
//     let minutes = Math.floor(second / 60);
//     let hours = Math.floor(minutes / 60);
//     let day = Math.floor(hours / 24);
//     let month = Math.floor(day / 30);
//     let year = Math.floor(month / 12);
//     if (year > 0) {
//         console.log("Online " + year + " year ago");
//     } else if (month > 0) {
//         console.log("Online " + month + " month ago");

//     } else if (day > 0) {
//         console.log("Online " + day + " day ago");

//     } else if (hours > 0) {
//         console.log("Online " + hours + " hours ago");

//     } else if (minutes > 0) {
//         console.log("Online " + minutes + " minutes ago");

//     }

// }
// timeSince(timeStamp);  

//80
//Spread
// let M1 = [1, 2, 3];
// let M2 = [...M1];
// console.log(M2);
// M2[0] = 99;
// console.log(M2);

// function sum(a, b, c) {
//     return a + b + c;
// }
// let array = [1, 2, 3];

// let result = sum(...array);
// console.log(result);

//array combine
// let A1 = [1, 2, 3];
// let A2 = [4, 5, 6];
// let result = [...A1, ...A2];
// console.log(result);

//create new array and add more 
// let A3 = [7, 8, 9];
// let A5 = [...A3, 10];
// console.log(A5); 

//transfor iterable -> array 
// let myName = "Pooh";
// let arrName = [...myName];
// console.log(arrName); 

//85
//sort(); 
// let A1 = ["b", "c", "a"];
// console.log(A1.sort());
// console.log("b".charCodeAt());

// let A2 = ["baa", "a", "c"];
// console.log(A2.sort());

// let A3 = [3, 2, 11];
// console.log(A3.sort());

// let A5 = [9, 3, 5, 4];
// console.log(A5);
// let sortA5 = A5.sort((a, b) => a - b);
// console.log(sortA5);   

//86
//reduce
// let A1 = [1, 2, 3, 4, 5];
// let sum = A1.reduce(
//     //function
//     (accumulator, currentValue, currentIndex, array) => {
//         return accumulator + currentValue;
//     },
//     // initialValue
//     0
// )
// console.log(sum);    

//87
// Filter() 
//find even numbers
// let A1 = [1, 2, 3, 4, 5];
// let evenNum = A1.filter(
//     //function 
//     (currentValue, currentIndex, arrray) => currentValue % 2 === 0
// );
// console.log(evenNum);


//88
// enter the number of elements
// enter each element's value then output as an array
// let numOfEle = Number(prompt("Enter the number of elements"));
// while (!((numOfEle > 0) || (numOfEle % 1 === 0))) {
//     numOfEle = Number(prompt("not allowed number. Please try again"));
// }
// let array = [];
// for (let i = 0; i < numOfEle; i++) {
//     let j = i + 1;
//     let element = prompt("Input your " + j + "element here: ");
//     array.push(element);
// }
// alert("Your array is: " + array); 

//89
// create a random array of n elements 
// n -> user input 
// output all the elements of array 
// reverse array and show the output 
// sort by ascending order
// sum of the elements in arrray 
// let user enter a random number and check whether that number included in array or not 

// let arrayLength = Number(prompt("Enter a random number n and there will be random array( with n elements) generated"));
// while (!((arrayLength > 0) || (arrayLength % 1 === 0))) {
//     arrayLength = Number(prompt("Enter again"));
// }
// let array = [];
// for (let i = 0; i < arrayLength; i++) {
//     let randomNum = Math.floor(Math.random() * 100);
//     array.push(randomNum); 
// }

// console.log("===Your gened random array is:=== " + array);
// let reverseArray = array.slice().reverse();
// console.log("===Your random array after being reversed is:===");
// console.log(reverseArray);
// let arraayAscending = array.sort((a, b) => a - b);
// console.log("===Your random array in ascending order is:=== ");
// console.log(arraayAscending);
// let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log("===The total sum of elements in array is:===");
// console.log(sum);
// let checkNum = Number(prompt("Enter checkNumber here:"));
// let check = array.includes(checkNum);
// if (check) {
//     console.log("Yeah the checkNumber is included in array");
// } else {
//     console.log("Oops the checkNumber isn't included in array");
// }



