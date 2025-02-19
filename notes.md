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

if(password == 'password'){
    console.log('correct password');
}
else if (password == ''){
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
else if (age = ''){
    console.log('please enter a value');
}
else{
    console.log('you are old enough');
}

--LOGICAL OPERATORS SYMBOLS
AND = &&
OR  = ||