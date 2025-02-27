const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');

form.addEventListener('submit', (event) =>{ //take event parameter
    event.preventDefault(); //prevents the default action of refreshing page.
    userinput = username.value //the input is now stored inside userinput.
    if(userinput === 'nigger'){
        console.log('ma nigga');
    }
    else{
        console.log('wrong password cracka!');
    }
});

