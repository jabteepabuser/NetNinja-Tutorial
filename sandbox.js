const tasksli = document.querySelectorAll('li'); //select li's
const tasksul = document.querySelector('ul'); // select the ul plate
const button = document.querySelector('button'); //select the button

button.addEventListener('click', ()=>{ //add event listener to button 
    const addli = document.createElement('li'); //add an li element onclick to ul.
    addli.textContent = 'something new'; //assign the text into the added li.
    tasksul.append(addli); //append addli into taskul parent.
});


tasksli.forEach(task => { //for each task in li
    task.addEventListener('click',(event)=>{ //add even listener onclikc
        task.remove(); //remove element onlick.
        event.stopPropagation(); //makes sure that the event above only occurs in the li which is the child.
    });
});

tasksul.addEventListener('click', (event)=>{ //add event listener to ul to ensure new li within the ul is removed.
    if(event.target.tagName === 'LI'){ //if the target of the click event is an LI element
        event.target.remove(); //then remove that LI tag.
    }
});