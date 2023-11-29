let getbackground = document.querySelector('.background');
let getheadline = document.querySelector('.headline');


function color(){
    let colorchange = Math.random()*5;

    if(colorchange > 0 && colorchange < 0.5){
        getbackground.addEventListener('click' , function(){
            document.body.style.backgroundColor = 'green';
        })
        getheadline.innerText = 'green';
    }
    else if(colorchange > 1 && colorchange < 2){
        getbackground.addEventListener('click' , function(){
            document.body.style.backgroundColor = 'white';
        })
        getheadline.innerText = 'white';
        
    }
    else if(colorchange > 2 && colorchange < 3){
        getbackground.addEventListener('click' , function(){
            document.body.style.backgroundColor = 'red';
        })
        getheadline.innerText = 'red';
        
    }
    else if(colorchange > 3 && colorchange < 4){
        getbackground.addEventListener('click' , function(){
            document.body.style.backgroundColor = 'blue';
        })
        getheadline.innerText = 'blue';
        
    }
    else if(colorchange > 4 && colorchange < 5){
        getbackground.addEventListener('click' , function(){
            document.body.style.backgroundColor = 'yellow';
        })
        getheadline.innerText = 'yellow';
        
    }
    else if(colorchange > 5 && colorchange < 6){
        getbackground.addEventListener('click' , function(){
            document.body.style.backgroundColor = 'orrange';
        })
        getheadline.innerText = 'orrange';
        
    }
   
}