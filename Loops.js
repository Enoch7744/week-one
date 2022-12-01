// let favouriteDrinks = [
   // "Tango",
   // "Milk",
  //  "Fanta"
// ];
 // console.log(favouriteDrinks)

// let favouriteDrinks = [
   // "Coke",
   // "Fanta",
   // "REdbull",
   // "Tea"
// ]; 
// for(let i = 0; < favouriteDrinks.length; i++){
  //  console.log(favouriteDrinks[i]);
// }

// let favouriteDrinks = ["Tea", "Coffee", "Milk"]

// console.log(favouriteDrinks[0]);
// console.log(favouriteDrinks[1]);
// console.log(favouriteDrinks[2]);


// let first = 0;
// let last = 11;
// let inc= 1;

// for (let i = first; 1 < 11; i+=inc) {
  //  console.log ("i = " , i);
// }

// let multiplesTwo = [];
// for(let i = 0; i < 20; i++){
    // if (i % 2 == 0) {
     //   multiplesTwo.push(i);
  //  }
// }
// console.log('Numbers divisble by 2 between 0 and 20: ${multilplesTwo}.')

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while(currentCard != "Spade"){
   // console.log(currentCard);
  //  currentCard = cards[Math.floor(Math.random()*4)];
// }

// console.log(currentCard);

// let x = 1
// while (x >= 1) {
  //  console.log("x is", x);
 //   x += 1;
// }

//let age = 5;
//while(age <26 ) {
  //console.log("Your a child!");
  //age++;
//}
//console.log("Your An Adult")

//Activity 1

//let favouriteMovies = [
  //  "Spiderman",
  //  "Batman",
  //  "Superman",
  //  "Wonderwomwen",
  //  "Aquman"
 //];
 //favouriteMovies.push("Fanatastic Four", "Ninja Turtles")
 //for(let i = 0; i < favouriteMovies.length; i++){
  //console.log(favouriteMovies[i]);
//}

 
// Activity 2
//console.log(Math.floor(Math.random()))
//console.log(Math.floor(Math.random())*10)

//let max=50
//let min=1

//for (let i = 0; i < 6; i++) {           //Following Displays random no. 6 times between 1-50

    //let rndno = Math.floor(Math.random() * (max-min) + min);
    //console.log(rndno);
//}


//Activity 3




//Activity 4

//let films = ["Toy Story", "Timechanger", "Ghostbusters", "13 Hours: The Secret Soldiers of Benghazi"]; 

//for (let i = 0; < films.length; i++){
    //console.log(favouriteFilms[i]);
//} 
 //if (films[3] = "Ghostbusters");{
  //console.log(favouriteFilms)

//}


// Activity 5
let max=30
let min=1

for (let i = 0; i < 6; i++) {

    let rndno = Math.floor(Math.random() * (max-min) + min);
    console.log(rndno);
    if (rndno % 7 == 0){                //is no. divisible by 7 with no remainders
        console.log("Divisible by 7")
    }
    else{
        console.log ("Not Divisible");

    }
}

// Activity 6

let bobsFollowers = ["James", "Michael", "Lia", "Kathryn"];
let hannahsFollowers = ["Thomas", "Lia", "Jack", "Lauren"];

let matches = ``;

for (i = 0; i < bobsFollowers.length; i++) {
    for (i = 0; i < hannahsFollowers.length; i++) {
        console.log();
    }
}


// Activity 7
let cars = [
  "Mercedes",
  "BMW",
  "Volvo",
  "Audi"
];
let currentCar = "BMW";

while (currentCar != "Volvo") {
  console.log(currentCar);
  currentCar = cars[Math.floor(Math.random() * 4)];
}
console.log(currentCar);

let x = 1;
while (x <= 1) {
  console.log("x is ", x);
  x += 1;
}

// Advantages of loop are:
// validate a value in a given block of code by checking if the value meets a provided condition
// Loops are handy, if you want to run the same code over and over again, each time with a different value

//Disadvantages of Loops are:
//It's very restricting, you can't determine where to start or how long you want to go on for. Incrementing is always set to one at a time
//When you add a property in an array or object using the prototype and any other array arr that has no relation with that property when you iterate array x then you get that property






