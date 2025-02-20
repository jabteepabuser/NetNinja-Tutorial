--FOR LOOPS:
for(*initialize the counter*;*condition*;*increment or decrement after each iteration*){ the operation will be placed here.}

example:
for(let i = 0; i < 5; i++ or i--){
    console.log(i)
}

--FOR LOOPS WITH ARRAYS:

example:
array = ['John','IP','Bruce']

for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

which logs out: John, IP, Bruce


--WHILE LOOP:
let i = 0; *looper*

while(i < 5){
    console.log(`loop ${i}`);
    i++;
}
*THIS TIME THE CONDITION IS ONLY THE ONE INSIDE THE PARENTHESIS KINDA LIKE PYTHON.*

--WHILE LOOP WITH ARRAYS:
let i = 0;
arrayname = ['jon','man','pat']

while(i < arrayname.length){
    console.log(arrayname[i]);
    i++;
}

which logs out: john, man, pat

--IF STATEMENTS:
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

--LOGICAL OPERATORS SYMBOLS
AND = &&
OR  = ||

--LOGICAL NOT:
let user = false;

if(user){
    THIS WILL NOT RUN INSIDE OF HERE SINCE USER IS FALSE.
}

if(!user){
    THIS WILL NOW RUN SINCE WE SWITCHED FALSE INTO !FALSE WHICH IS = TRUE.
}

--DOUBLE EQUALS VS TRIPLE EQUALS

= means assignment
== comparison but ignores the types
=== also comparison however, it considers both types.

therefore, === is much more preferrable in terms of comparison operators.

--BREAK AND CONTINUE
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

--SWITCH CASE:

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