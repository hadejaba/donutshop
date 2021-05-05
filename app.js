// array literal [] (stored in a variable)
var numbers = [3, 55, 87];
console.log(numbers);

// creating an array w the new js keyword
var strings = new Array("lime", "lemon", "cherry", "peach", "apple");
console.log(strings);

// creating an array with the new js keyword make the index
var booleans = new Array()
booleans[0] = 9 < 10;
booleans[1] = 11 === 11.5;
booleans[2] = 12 > 8;
booleans[3] = "sky" == "SKY";
console.log(booleans);

// create an array of your classmate names

var classmates = ["katie", "sky", "trent", "danielle", "april", "heather"];
//use the index position
console.log(classmates[2]);
//.length method (gives index of our array)
console.log(classmates.length);

// array methods
//built-in methods .methodname(data);

// .push adds an index to the end of an array
// can add numerous index by comma separation
classmates.push("mara", "john", "mark");
console.log(classmates);

// .pop removes an index from the END of an array
classmates.pop();
console.log(classmates);

// .shift removes an FIRST index from an array
classmates.shift();
console.log(classmates);

// .unshift ADDS an index to the BEGINNING of the array
classmates.unshift("kevin");
console.log(classmates);

// .splice ADD/REMOVE an index in the array
// replace 1 element at a certain index
// read backwards

// (2)index number, (1) change at index, "name" to add, 0= no one removed
// classmates.splice(0, 2, "eli");
// console.log(classmates);

// do a splice method get rid of the 2 students and add a new student in the 3 index
classmates.splice(3, 2, "eli");
console.log(classmates);

//looping over an array
// to see all the items in our array // iterations
// "for" loop while loop for Each loop
// 3 things we need to loop through data
// when to start, when to stop, and how to get to the next item
for (i = 0; i < classmates.length; i++) {
    console.log(classmates[i]);
}

// finding an index
// locate an array item returns the specific index of an array item
console.log(classmates.indexOf("heather"));

//Create an Array called "donuts" that list 7-10 different items
var donuts = ["Glazed", "Strawberry", "Chocolate", "Cherry", "Apple Fritter", "Cronut", "Long John"]

//1 Using a loop, iterate through this array and console.log all the donuts
for (i = 0; i < donuts.length; i++) {
    console.log(donuts[i]);
}


//2 Write the command to remove the first donut fron the array
donuts.shift();
// console.log(donuts);



//3 Write the command to remove the last donuts from the array
donuts.pop();
// console.log(donuts);


//4 Write the command to add a new donut "lime zest" to the front of the array
donuts.unshift("Lime Zest");
// console.log(donuts);

//5 Write the command to add another donut "lemon pie" to the end of the array
donuts.push("Lemon Pie");
// console.log(donuts);


//6 Use either the join() or toString() method to convert an array to a string.
console.log(donuts.toString());
console.log(donuts.join(", "));

//7 Write the command to make a copy of the array using slice.
// The copy should NOT include two donuts.
console.log(donuts.slice(0, 7));



//8 Write the command that gives the indexOf where "chocolate" is located.
console.log(donuts.indexOf('Chocolate'));


//9 Write the command that gives the indexOf where "glazed" is located (You may get a negative number).
console.log(donuts.indexOf('Glazed'));


//10 **Using the splice method, remove one donut from the array and add another.
donuts.splice(3, 2, "Mango");
// console.log(donuts);

//11 **Create a new variable called withSyed and set it equal to the people array concatenated with the string of "Bob".
let withSyed = donuts.concat("Bob");
console.log(donuts.concat("Bob"));

//12 **Create a function called getdonuts() that will display all the donuts in your array and display on your page.
function getdonuts() {
    document.getElementById("btn").innerHTML = donuts.sort();
}
