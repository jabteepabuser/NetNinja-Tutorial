--//FOR LOOPS:
for(*initialize the counter*;*condition*;*increment or decrement after each iteration*){ the operation will be placed here.}

example:
for(let i = 0; i < 5; i++ or i--){
    console.log(i)
}

--//FOR LOOPS WITH ARRAYS:

example:
array = ['John','IP','Bruce'];

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

which logs out: John, IP, Bruce


--//WHILE LOOP:
let i = 0; *looper*

while(i < 5){
    console.log(`loop ${i}`);
    i++;
}
*THIS TIME THE CONDITION IS ONLY THE ONE INSIDE THE PARENTHESIS KINDA LIKE PYTHON.*

--//WHILE LOOP WITH ARRAYS:
let i = 0;
arrayname = ['jon','man','pat'];

while(i < arrayname.length){
    console.log(arrayname[i]);
    i++;
}

which logs out: john, man, pat

--//IF STATEMENTS:
example 1:
const password = 'password';

if(password === 'password'){
    console.log('correct password');
}
else if (password === ''){
    console.log('please enter password');
}
else{
    console.log('incorrect password');
}

example 2:
const age = 20;

if(age < 20){
    console.log('you are not old enough');
}
else if (age === ''){
    console.log('please enter a value');
}
else{
    console.log('you are old enough');
}

--//LOGICAL OPERATORS SYMBOLS
AND = &&
OR  = ||

--//LOGICAL NOT:
let user = false;

if(user){
    THIS WILL NOT RUN INSIDE OF HERE SINCE USER IS FALSE.
}

if(!user){
    THIS WILL NOW RUN SINCE WE SWITCHED FALSE INTO !FALSE WHICH IS = TRUE.
}

--//DOUBLE EQUALS VS TRIPLE EQUALS

= means assignment
== comparison but ignores the types
=== also comparison however, it considers both types.

therefore, === is much more preferrable in terms of comparison operators.

--//BREAK AND CONTINUE
let scores = [0, 10, 20, 30, 40, 50, 100];

for(i = 0; i < scores.length; i++){
    if(scores[i] === 0){
        continue; ignores 0 and keeps loop going.
    }
    
    console.log('your score is: , scores[i]);
    
    if(scores[i] === 100){
        console.log('Final score reached, GRATS!');
        break; this stops the whole loop when condition is true.
    }

}

--//SWITCH CASE:

let grade = prompt('Enter Grade')

switch(grade){ similar to if else statements basically
    case 'A': 
        console.log('grade is A');
        break; this uses break so that it does not execute ones below and this code block stops.
    case 'B':
        console.log('grade is B');
        break;
    case 'C':
        console.log('grade is C');
        break;
    default:
        console.log('invalid grade');
}


--//FUNCTIONS:

let myfunction = function(input1,input2){ OK SO INPUT1 and INPUT2 ARE VARIABLES CALLED ARGUMENTS
    console.log(`hello ${input1}, this is another input --> ${input2}`);
};

myfunction('brodie', 'idk lol') BRODIE AND IDK LOL ARE THE PARAMETERS FOR THOSE ARGUMENTS

OUTPUT = hello brodie, this is another input --> idk lol

--//FUNCTIONS WITH DEFAULT PARAMETERS IN CASE NO PARAMETERS ARE INPUT:

 let myfunction = function(input1 = 'user',input2 = 'welcome'){ HOWEVER, IF THERE ARE PARAMETERS THAT ARE INPUT INTO THE FUNCTION CALL, THESE TWO GET OVERWRITTEN.
    console.log(`hello ${input1}, this is another input --> ${input2}`);
};

myfunction();
OUTPUT = hello user, this is another input --> welcome


--//RETURN REFRESHER:
let calculateArea = function(radius){
    let area = 3.14 * radius ** 2;
    return area; WHICH IS 78.5
}

let radiusEqualsFive = calcArea(5);
*NOW, IN THIS CASE calcArea(5) is going to turn into 78.5*
*GREAT, NOW WE CAN CONSOLE LOG IT INSTEAD OF DOING IT INTO THE LOCAL SCOPE OF calculateArea*
console.log(radiusEqualsFive); -----> *78.5*

--//ARROW FUNCTIONS:

EXAMPLE STRUCTURE
let/const VariableName = (ANYPARAMETERS) => {
    console.log(example code);
}

--//ARROW FUNCTION WITH ONLY ONE PARAMETER: *The difference here is that the parentheses are unnecessary*
let/const VariableName = ANYPARAMETER => {
    console.log(example code);
}

--//ARROW FUNCTION WITH ONLY ONE SINGLE RETURN CODE:
*BEFORE SIMPLIFICATION*
let/const VariableName = ANYPARAMETER => {
    return 5 * ANYPARAMETER;
}

*AFTER SIMPLIFICATION*
let/const VariableName = ANYPARAMETER => 5 * ANYPARAMETER
*In this case, we removed the {} and put the code inside of it after the =>*


*EXAMPLE WHERE THIS DOES NOT WORK*
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
} return total; *THERE IS MORE THAN 1 LINES OF CODE INTO THIS BLOCK SO THIS DOES NOT WORK.*

--//CALLBACK FUNCTIONS:
// callback = a function that is passed as an argument
//                    to another function.

//                    used to handle asynchronous operations:
//                    1. Reading a file
//                    2. Network requests
//                    3. Interacting with databases

//                    "Hey, when you're done, call this next."



let sum = (callbackFunc) => {
    let value = 5;
    callbackFunc(value); 
}
*THERE IS NO NAME FOR THIS FUNCTION THAT WE PASSED AS AN ARGUMENT.* 
*BUT ITS STILL A FUNCTION*
sum(value => { 
    console.log(value);
});

--//FOREACH FUNCTIONS:

let people = ['john', 'wanker','willy']

people.forEach((person) => {
    console.log(person);
    //do something else for each cell.
})

*ADDING THE INDEX PARAMETER*
people.forEach((person, index) => {
    console.log(index, person);
    //do something else for each cell.
})


--//CREATING OBJECTS, BASICALLY KINDA LIKE DICTIONARIES.
let user = {
    name: 'alfred',
    age: 45,
    email: 'alfred@email.com',
    location: 'USSR',
    likes: ['sparring', 'marmalade']
};

//display a specific attribute
console.log(user.likes);

//modify an attribute within an object
user.age = 20;
console.log(user.age)

--//CREATING METHODS OR FUNCTIONS INSIDE OBJECTS:

let user = {
    name: 'alfred',
    loginMethod: () =>{
        console.log('user logged in.')
    },
    logoutMethod: () =>{
        console.log('user logged out.')
    }
};

user.loginMethod();
user.logoutMethod();

--// THE 'THIS' KEYWORD:
let user = {
    likes: ['sparring', 'marmalade'],
    logLikes: function(){  //ARROW FUNC CANNOR BE USED!!
        this.likes.forEach(like =>{ //IF 'THIS' IS USED.
            console.log(like);
        });
    }
}


user.logLikes();

--// ADDING, LOOPING, QUERYING MULTIPLE TAGS USING DOM:

const content = document.querySelectorAll('p'); *GRAB ALL P ELEMENTS*

content.forEach(item =>{ *SINCE WE USED QUERYSELECTOR WE CAN ITERATE USING FOREACH()*
    if(item.textContent.includes('error')){ *WE ARE ITERATING AND IF THE TEXT INSIDE OUR ITEM INCLUDES ERROR*
        item.classList.add('error'); *THEN WE ARE ADDING A CLASS CALLED ERROR WITHIN IT.*
    }
    else if(item.textContent.includes('success')){ *SAME WITH THIS ONE BUT WITH SUCCESS ON IT*
        item.classList.add('success');
    }
    else{
        item.classList.add('normal'); *ELSE JUST ADD NORMAL*
    }
});

--// ADDING CLICK EVENT LISTENERS:

const thebutton = document.querySelector('button.stupidButton'); *QUERY THE BUTTON*
const banner = document.querySelector('span#banner');  *QUERY ALSO THE BANNER TO CHANGE TEXT ONCLICK*

thebutton.addEventListener('click', () =>{ *IF THE BUTTON IS CLICKED EXECUTE THIS CALLBACK FUNC!*
    banner.innerText += 'NIGGER'; *ADD THE TEXT 'NIGGER' IN THE INNERTEXT OF THE SPAN CALLED BANNER*

});


--// 