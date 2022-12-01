//let weather = "sunny";

//if (weather == "sunny") {
  //  console.log ("well, i better wear some suncream")
// } else if (weather == "rainy") {
  //  console.log ("better take an umbrella")

// } else {
 //   console.log("it could go either way")
// }

// let a = 3;
// a = "1";  //took the let
//if (a !== 1) {

// if (a == 1) {
// console.log ("a = 3")  // switched the one to a 4
// } else {
// console.log ("a is not 1")
// }

// if (1 === "1") {
//    console.log(true);
// }
 // else { 
 //   console.log(false);
 // }

// let place = "Manc";
// let weather = "cloudy";

// if (place == "Manc" && weather == "Snowing") {
  //  console.log("Cloudy is fine")
// }
// else if (place == "Manc" && weather == "cloudy") {
  //  console.log("obvs")
// }
// else {
  //  console.log("What it isnt raining?");
// }

// const grade = 87;

// switch (true) {
    // case grade >= 70:
    // console.log("Distinction");
    // break; // broken out of the switch statement
    // case grade>= 60:
      //  console.log("Merit");
    // break;
    // case grade >= 50:
       // console.log("Pass")
       // break;
      //  default:
      //      console.log ("Failed")
// }

// const drinkingAge = 87;

 // switch (true) {
    // case grade >= 30:
    // console.log("Able to drink");
    // break; // broken out of the switch statement
     //case grade>= 18:
       // console.log("Show some id");
    // break;
    // case grade >= 10:
      //  console.log("Can't drink sorry")
      //  break;
      //  default:
       //     console.log ("Can't Drink, Sorry")
// }

// Activity 1
// let age = 17;
// let country = "UK";

// if (age > 17 && country == "UK"){
 //   console.log("Yes I can serve you");
// }
// else {
  //  console.log('You arent old enough');
// }

// Activity 2
// let pizzaTopping = "peperoni"

// if (pizzaTopping == "peperoni") {
 //   console.log("These are important ingredients for my pizza")
// }
// else if (pizzaTopping == "BBQ") {
// console.log("Not my favorite pizza topping but its fine")
// }

//Activity 3

// let password = "pass"

// if(password.length < 8){
  //  console.log("Password is too short");
// }
// else {
// console.log(password);
// }


// Activity 4
//let num = 24

//if ((num % 3 == 0) || (num % 5 == 0)) {
    //console.log("This number is divisable by 3 or 5");
//}
//else {
    //console.log("Something else");
//}


// Activity 5

//let number = 30;

//if ((number % 3 == 0) || (number % 5 == 0)) {
    //console.log("fiz Buzz");
//}
//else { 
  //if ((number % 3 == 0) || (number %! 5 == 0))
    //console.log("fizz");
//} 
//else { if ((number %! 3 == 0) || (number % 5 == 0))
  //console.log("Buzz");
//}

//Activity 6
let number3 = 101101;
let reverse = parseInt (number3.toString().split('').reverse().join(''));

if (number3 == reverse) {
  console.log(`${number3} is a palindromic number`);
} 
else {
  console.log(`${number3} is not a palindromic number`);
}

// Activity 7
let time = 10;
let placeOfWork = "Clothing Store";
let cityOfHome = "Manchester";

if (time == 7 && time < 8) {
    console.log(`Im at home in ${cityOfHome}`)
} else if (time == 8) {
    console.log(`Im commuting to the ${placeOfWork}`)
} else {
    console.log(`Im at work in the ${placeOfWork}`)

}
//Activity 8

string= ("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi")
vowels = ["a","e","i","o","u"];

strLen = string.length;
    for (let i=0; i<strLen; i++){
        for(j=0; j<6; j++)
        if (string[i] == vowels[j]) {
            console.log (`${vowels[j]} Vowel found at ${[i]}`);
        }
    }
    console.log (`string location ${[i]} ${item.vowels[j]} was last Vowel found`);



console.log (`string location" ${i} ${item.vowels[j]} was last Vowel found`);


//activity 9
let word = "fdslkjlkfdsfsjdf";
let firstCharacter = word.charAt(0);
let lastCharacter = word.slice(-1);

if (firstCharacter === lastCharacter) {
    console.log("true")
} else {
    console.log("false")
}

//activity 10
let num1 = 6;
let num2 = 7;
let sum = num1 + num2;

if (sum % 2 === 0) {
    console.log("even")
} else {
    console.log(sum) //this will print as the odd number 
}

