// 45 assignment questions
//question 2 : Personal Message: Store a person’s name in a variable,
 //and print a message to that person. Your message should be simple, 
 //such as, “Hello Eric, would you like to learn some Python today?”
 let personName1: string = "Eric";
 console.log(`Hello ${personName1},would you like to learn some python today?`);




  //question 3 : Name Cases: Store a person’s name in a variable,
//and then print that person’s name in lowercase,uppercase, and titlecase.
let userName: string = "m haris";
console.log(userName.toUpperCase());
console.log(userName.toLocaleLowerCase());
console.log(userName.charAt(0).toUpperCase()+userName.slice(1).toLowerCase());




//question 4 :Famous Quote: Find a quote from a famous person you admire. 
//Print the quote and the name of its author. Your output should look something like the following, 
//including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.')




//question no 5 : Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a 
//variable called famous_person. Then compose your message and store it in a new variable called message. 
//Print your message.
let personName: string ="Albert Einstein";
let message: string =`${personName} once said, “A person who never made a mistake never tried anything new.`;
console.log(message);




//question no 6 :tripping Names: Store a person’s name, and include some whitespace 
//characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n",.
//at least once. Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.
let fullName: string = "\n\tM haris\n\t"; // This saves the name with whitespace
console.log(fullName); // Shows the name with whitespace
console.log(fullName.trim()); // Shows the name without whitespace




//question no 7 :Number Eight: Write addition, subtraction, multiplication, and division operations that each 
//result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(6+2);//addition
console.log(10-2);//subtraction
console.log(4*2);//multiplication
console.log(16/2);//division





//question no 8 :You should create four lines that look like this:

//console.log(5 + 3)

//Your output should simply be four lines with the number 8 appearing once on each line


console.log(5 + 3);
console.log(4 * 2);
console.log(10 - 2);
console.log(16 / 2);





//question no 9:Favorite Number: Store your favorite number in a variable. Then, using that variable, 
//create a message that reveals your favorite number. Print that message.
let favouriteNumber:number =25;
console.log(`my favourite number is ${favouriteNumber}`)






//question no 10:Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
 //If you don’t have anything specific to write because your programs are too simple at this point, 
//just add your name and the current date at the top of each program file. Then write one sentence
 //describing what the program does.
 //5/14/2024
 // this program print the userName
 let userName1:string = "haris"
console.log(`my name is ${userName1}`)





//question no 11: Names: Store the names of a few of your friends in a array called names.
//Print each person’s name by accessing each element in the list, one at a time.
let names: string[] = ["hashir", "asad", "anus", "ali", "maaz"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);





//question no 12:Greetings: Start with the array you used in Exercise 11, but instead of just 
//printing each person’s name, print a message to them. The text of each message should be the same, 
//but each message should be personalized with the person’s name.
let friendsName: string[] =["hashir", "asad", "anus", "ali", "maaz"];
for (let i=0;i<friendsName.length;i++){
  console.log(`my name ${friendsName[i]}`)
}




//question no 13:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a 
//car, and make a list that stores several examples. Use your list to print a series of statements about 
//these items, such as “I would like to own a Honda motorcycle.”
let favoriteTransporation:string[]=["Honda motorcycle","coralla car","hayabusa bike"];
for(let i=0; i<favoriteTransporation.length;i++){
  console.log(`L will like to own a ${favoriteTransporation[i]}`)
}





//question no 14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
//Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
// Array of people to invite to dinner
// first method for_loop
let guestList1:string[] =["hashir", "asad", "anus", "ali", "maaz"];
for(let i=0; i< guestList1.length;i++){
  console.log(`${guestList1[i]} would you like to join me for dinner?`)
}
// second method for_each
let guestList2:string[] =["hashir", "asad", "anus", "ali", "maaz"];
guestList2.forEach(invitations =>{
  console.log(`${invitations} would you like to join me for dinner?`)
})





//question no 15:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list
let guestList3:string[] =["hashir", "asad", "anus", "ali", "maaz"];
let notGuest:string|undefined = guestList1.splice(1,1)[0];
console.log(`${notGuest} not coming in dinner`)
guestList1.push("tabish")
console.log(guestList3)
guestList1.forEach(invitations => {
  console.log(`${invitations} would you like to join me for dinner?`)
});





//question no 16:More Guests: You just found a bigger dinner table, so now more space is available. Think of //three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestList4:string[] =["hashir", "asad", "anus",  ];
let dinner:string="l have a bigger dinner table"
console.log(dinner)
guestList1.unshift("maaz")
console.log(guestList1)
guestList1.splice(Math.floor(guestList1.length/2),0,"nouman")
console.log(guestList4)
guestList1.push("fawad")
console.log(guestList4)





//question no 17:• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guestList5:string[]=[ 'hashir', 'anus', 'tabish' ]
let removed_People= guestList5.pop()
console.log(`${removed_People} sorry you can't invited for dinner`)
console.log(`${guestList5} you are still invited`)
guestList5.splice(0,2)
console.log(guestList5)




/*question no:18Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

let places: string[] = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];

console.log("Original order:", places);
console.log("Alphabetical order:",places.slice().sort())
console.log("Original order:", places);
console.log("reverse Alphabetical order:",places.slice().sort().reverse())
console.log("Original order:", places);
console.log("reverse order:",places.reverse())
console.log("reverse order:",places.reverse())
console.log("Alphabetical order:",places.sort())
console.log(" reverseAlphabetical order:",places.reverse ())





//question no 19:Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guestList:string[] =["hashir", "asad", "anus", "ali", "maaz"];
console.log(`I am inviting ${guestList.length} people to dinner `)





//question no 20:Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let countries: string[] = ["mount everst", "sutlej", "pakistan", "karachi", "urdu"];
console.log("Countries I'd like to visit:", countries);





//question no 21:They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let items:{ personName:string; age:16; isAdmission:boolean;}={
personName:"M haris",
age:16,
isAdmission:true
}
console.log(`my name is ${items.personName} and my age is ${items.age} and l can read in class 12 ${items.isAdmission}` )





//question no 22:Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let friends: string[] = ["haris", "usman", "zimal"];

console.log(friends[4]); // Intentional error: Arrays are zero-indexed, so index 4 is out of bounds.
console.log(friends[1])  // Correcting the error by accessing a valid index.





/*question no 23;Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

let car22 = 'subaru';
let bike1 = 'yamaha';
let fruit1 = 'apple';
let number11 = 10;
let number22 = 20;
let city01 = 'New York';
let country = 'USA';
let sportName = "football";
let age23 = 25;
let temperature22 = 75;
//statements that answer true
//car
console.log("Is car == 'subaru'? I predict True.")
console.log(car22 == 'subaru')
//bike
console.log("Is bike =='yamaha'? I predict True.")
console.log(bike1 == 'yamaha')
//fruit
console.log("Is fruit == 'apple'? l predict True.")
console.log(fruit1 == 'apple')
//number 1,number 2
console.log("Is 'number1'< 'number2'? Is predict True")
console.log(number11 < number22)
//city
console.log("Is city == 'New York'? I predict True.")
console.log(city01 == 'New York')
//statements that answer false
//country
console.log("Is country == 'karachi'? I predict False.")
console.log(country == 'karachi')
//is Raining
console.log("Is Raining == 'false'? I predict FALSE.")
console.log( sportName == 'cricket')
//age
console.log("age >= 16? I predict FALSE.")
console.log( age23 <= 16)
//temperature
console.log(" temperature <= 100 ? I predict FALSE.")
console.log( temperature22 >= 100)
//age and temprature
console.log(" age >= temperature ? I predict FALSE.")
console.log( age23 >= temperature22 )





/*question no 24:More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
let car = 'Subaru';
let bike = 'Yamaha';
let fruit = 'Apple';
let number1 = 10;
let number2 = 20;
let age25 = 25;
let temperature = 75;
let colors = ['red', 'green', 'blue'];
let city = 'new york';

//Tests for equality and inequality with string
//car (true statement)
console.log("Testing equality with strings:Is car == 'subaru'? I predict True.")
console.log(car == 'Subaru')
//bike (true statement)
console.log("Testing equality with strings:Is bike =='yamaha'? I predict True.")
console.log(bike == 'Yamaha')
//fruit (true statement)
console.log("Testing equality with strings:Is fruit == 'apple'? l predict True.")
console.log(fruit == 'Apple')
//fruit (False statement)
console.log("Testing equality with strings:Is fruit == 'apple'? l predict False.")
console.log(fruit == 'apple')
//bike (False statement)
console.log("Testing equality with strings:Is bike =='yamaha'? I predict False.")
console.log(bike == 'yamaha')
//Tests using the lower case function
//car (true statement)
console.log("Tests using the lower case function:Is car.toLowecase == 'subaru'? I predict True.")
console.log(car.toLowerCase() == 'subaru')
//bike (true statement)
console.log("Tests using the lower case function:Is bike.toLowecase == 'subaru'? I predict True.")
console.log(bike.toLowerCase() == 'yamaha')
//city (true statement)
console.log("Tests using the lower case function:Is city.toLowecase == 'subaru'? I predict True.")
console.log(city.toLowerCase() == 'new york')
//fruit (False statement)
console.log("Tests using the lower case function:Is fruit.toLowecase == 'subaru'? I predict False.")
console.log(city.toLowerCase() == 'Apple')
//car (False statement)
console.log("Tests using the lower case function:Is car.toLowecase == 'subaru'? I predict False.")
console.log(car.toLowerCase() == 'Subaru')
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//number1 and mumber2 (true statement)
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:Is car == 'subaru'? I predict true.")
console.log(car == 'Subaru')
//number1 and mumber2 (false statement)
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:Is car != 'subaru'? I predict False.")
console.log(car != 'Subaru')
//temperature and age (true statement)
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:Is temperature > age? I predict True.")
console.log(temperature > age25)
//temperature and age (false statement)
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:Is temperature < age? I predict False.")
console.log(temperature < age25)
//number 1 and temperature(true statement)
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:Is temperature >= age? I predict True.")
console.log(temperature >= number1)
// number 2 and age
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:Is temperature <= age? I predict False.")
console.log(temperature <= number1)
//Tests using "and" and "or" operators 
// AND operator && (true statement)
console.log("Tests using 'and' and 'or' operators:Is num3 && num4 ? I predict True.")
let num3 = number1 < number2;
let num4 =number1 == 10
console.log(num3 && num4)
//AND operator && (false statement)
console.log("Tests using 'and' and 'or' operators:Is num5 && num6 ? I predict False.")
let num5 = number1 > number2;
let num6 =number1 == 10
console.log(num5 && num6)
// OR operator || (true statement)
console.log("Tests using 'and' and 'or' operators:Is num7 || num8 ? I predict True.")
let num7 = number1 < number2;
let num8 =number1 == 10
console.log(num7 && num8)
// OR operator || (false statement)
console.log("Tests using 'and' and 'or' operators:Is num9 || num10 ? I predict True.")
let num9 = number1 > number2;
let num10 =number1 == 20
console.log(num9 && num10)
//Test whether an item is in a arraylet 
// red (true statement)
console.log("Test whether an item is in a arrayle:colors.includes(red) ? I predict True.")
console.log(colors.includes('red'))
// green (true statement)
console.log("Test whether an item is in a arrayle:colors.includes('green') ? I predict True.")
console.log(colors.includes('green'))
// blue (true statement)
console.log("Test whether an item is in a arrayle:colors.includes('blue') ? I predict True.")
console.log(colors.includes('blue'))
//Test whether an item is not in a array
//red (False statement)
console.log("Test whether an item is in a arrayle:colors.includes(red) ? I predict False.")
console.log(!colors.includes('red'))
//red (False statement)
console.log("Test whether an item is in a arrayle:colors.includes(green) ? I predict False.")
console.log(!colors.includes('green'))
//red (False statement)
console.log("Test whether an item is in a arrayle:colors.includes(blue) ? I predict False.")
console.log(!colors.includes('blue'))





//question no 25:Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alienColor24:string ="red";
if(alienColor24 =="green"){
  console.log("that player earned just five points")
}
else{
  console.log("The version that fails will have no output")
}





/*question no 26:Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/
let alienColor25:string ="green";
if(alienColor25 =="green"){
  console.log("that player earned just five points for shooting the alien")
}
else {
  console.log("that player earned just 10 points ")
}





/*question no 27:Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
// when the color is green
let alienColor:string ="green";
if(alienColor =="green"){
  console.log("that player earned just five points ")
}
else if(alienColor =="yellow") {
  console.log("that player earned just 10 points ")
}
else if(alienColor =="red") {
  console.log("that player earned just 15 points ")
}
// when the color is yellow
let alienColor1:string ="yellow";
if(alienColor1 =="green"){
  console.log("that player earned just five points ")
}
else if(alienColor1 =="yellow") {
  console.log("that player earned just 10 points ")
}
else if(alienColor1 =="red") {
  console.log("that player earned just 15 points ")
}
// when the color is red
let alienColor2:string ="red";
if(alienColor2 =="green"){
  console.log("that player earned just five points ")
}
else if(alienColor2 =="yellow") {
  console.log("that player earned just 10 points ")
}
else if(alienColor2 =="red") {
  console.log("that player earned just 15 points ")
}





/*question no 28:Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.*/

let age: number = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}





/*question no 29:Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
let fruits :string[] =["apples","bananas","kiwi"]
if(fruits.includes("apples")){
  console.log("you really like apple!")
}
else if(fruits.includes("bananas")){
  console.log("you really like bananas!")
}
else if(fruits.includes("kiwi")){
  console.log("you really like kiwi!")
}





/*question no 30:Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
let helloAdmin :string[] =["Admin","user1","user2","user3"]
helloAdmin.forEach(userName =>{
if ( userName === "Admin"){
  console.log( "Hello admin,would you like to see a status report?")
}
else{
  console.log(` Hello ${userName}, thank you for logging in again.`)
}
})





//question no 31:No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.
let usernames: string[] = [];

if (usernames.length > 0) {
    console.log(`hello ${usernames}`);
} else {
  console.log("we need to find some user")
}





/*question no 32:Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.*/
let current_users: string[] = ["haris", "asad", "anus", "umar", "usman"];
let new_users: string[] = ["haris", "hashir", "hasham", "usman", "ali"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() == newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});






 /*question no 33:Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// Store the numbers 1 through 9 in an array*/
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  let ordinal: string;

  // Use an if-else chain to determine the proper ordinal ending
  if (number === 1) {
    ordinal = number + "st";
  } else if (number === 2) {
    ordinal = number + "nd";
  } else if (number === 3) {
    ordinal = number + "rd";
  } else {
    ordinal = number + "th";
  }

  // Print each result on a separate line
  console.log(ordinal);
}





/*question no 34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/
let pizza:string[] =["Roman Pizza.","Sicilian Pizza.","Greek Pizza."]
for( let i=0;i<pizza.length;i++){
  console.log(`l like ${pizza[i]}`)
}
console.log("I really like pizza")





//question no 35:Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals:string[] =["dog","cat","parrot"]
for(let i=0;i<animals.length;i++){
  console.log(`A ${animals[i]}would make a great pet`)
}
console.log(" Any of these animals would you make a great pet")






//question no 36:T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size:string,message:string){
console.log(`making a ${size} T-shirt with a ${message} printed on shirt`)
}
make_shirt("small","black color is my favourite")





//question no 37:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function Shirt(size:string="large",message:string=  "l do coding"){
  console.log(`Making a ${size} t-shirt with the message "${message}" printed on it`)
}
Shirt()
Shirt("medium")
Shirt("small","coding is my hobby")





//question no 38:Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city:string ,country:string = "pakistan"){
  console.log(`${city} is in ${country}`)
}
describe_city("karachu")
describe_city("hyderbad")
describe_city("mumbai","india")






//question no 39 :City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

//"Lahore, Pakistan"

//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city:string,country:string): string {
  return `${city}, ${country}`;}
 let a= city_country("Lahore", "Pakistan")
 let b= city_country("madina","saduia arab")
 let c= city_country("mumbai","india")
console.log(a)
console.log(b)
console.log(c)





//question no 40 :Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

type Album = {
  artist: string;
  title: string;
  tracks?: number;
};
function make_album(artist: string, title: string, tracks?: number): Album {
  let album: Album = {
    artist: artist,
    title: title,
  };
  if (tracks !== undefined) {
    album.tracks = tracks;
  }
  return album;
}
let album1 = make_album("haris", "The fairly tale of boys house");
let album2 = make_album("david", "herry poter");
let album3 = make_album("funks", "mindnever", 8);
console.log(album1);
console.log(album2);
console.log(album3);




//question no 41:Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians1(magicians: string[]): void {
  for (let magician of magicians2) {
    console.log(magician);
  }}
let magicians6: string[] = ["haris", "david", "usman", ];
show_magicians(magicians6);






//question no 42:Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function make_great1(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
      magicians[i] = magicians[i] + " the Great";
  }
}
let magicians2:string[]=["haris","david","usman"]
make_great(magicians2);
make_great(magicians2)
console.log(magicians2)





//question no 43:Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Step 1: Define the original array of magicians' names
const magicians: string[] = ["Haris", "David","usman"];

// Step 2: Create the make_great function
function make_great(magicians: string[]): string[] {
  return magicians.map(magician => `${magician} the Great`);
}

// Step 3: Create the show_magicians function
function show_magicians(magicians: string[]): void {
  magicians.forEach(magician => console.log(magician));
}

// Step 4: Call make_great with a copy of the original array
const greatMagicians = make_great([...magicians]);

// Step 5: Call show_magicians with both arrays
console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);





//question no 44:Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// Step 1: Define the function with a rest parameter
function make_sandwich(...items: string[]): void {
  console.log("\nMaking a sandwich with the following items:");
  items.forEach(item => console.log(`- ${item}`));
  console.log("Your sandwich is ready!\n");
}

// Step 3: Call the function multiple times with different numbers of arguments
make_sandwich("cheese", "tomato", "Lettuce",);
make_sandwich("Turkey", "Bacon", "Avocado");
make_sandwich("Peanut Butter", "Jelly");






//question no 45:Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature.    Print the Object that’s returned to make sure all the information was stored correctly.*/
// Step 1 and 2: Define the function with required parameters and rest parameters for additional properties
function createCar(manufacturer: string, model: string, ...options: [string, any][]): { [key: string]: any } {
  // Step 3: Combine the required information and additional properties into a single object
  let car: { [key: string]: any } = {
    manufacturer: manufacturer,
    model: model,
  };

  // Adding the additional options to the car object
  for (let [key, value] of options) {
    car[key] = value;
  }

  return car;
}

// Step 4: Call the function with the required information and additional properties
let car1 = createCar("Toyota", "Camry", ["color", "Blue"], ["year", 2021]);
let car2 = createCar("Tesla", "Model 3", ["color", "Red"], ["autopilot", true]);
let car3 = createCar("Ford", "Mustang", ["color", "Black"], ["convertible", true]);

// Print the objects to verify the information
console.log(car1);
console.log(car2);
console.log(car3);}
