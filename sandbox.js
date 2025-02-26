const content = document.querySelectorAll('p');

content.forEach(item =>{
    if(item.textContent.includes('error')){
        item.classList.add('error');
    }
    else if(item.textContent.includes('success')){
        item.classList.add('success');
    }
    else{
        item.classList.add('normal');
    }
});

