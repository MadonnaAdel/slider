
var imgs = Array.from( document.getElementsByTagName("img")) ;
var lighterContainer = document.querySelector(".lighter-container");
var container = document.querySelector(".container");
var lighter= document.querySelector('.lighter-container .lighter');
var nextButton =document.getElementById('next');
var closeButton=document.getElementById('close'); 
var prvButton =document.getElementById('prv');



for(var i=0 ; i < imgs.length ; i++ ){  
    imgs[i].addEventListener('click', function(e){
        arrimge = imgs.indexOf( e.target);
        var imgSrc = e.target.getAttribute('src');
        lighterContainer.classList.replace('d-none' , 'd-flex');
        container.style.filter = ` blur(4px) `;  
        lighter.style.backgroundImage=` url(${imgSrc})`;  
})
};

var arrimge = 0;

function Slider(i){
    arrimge = arrimge + i ;
    if( arrimge >= imgs.length ){
        arrimge = 0;
    }
    else if( arrimge == -1){
        arrimge = imgs.length -1 ;
    }
    var imgSrc = imgs[arrimge].getAttribute('src');
    lighter.style.backgroundImage=` url(${imgSrc})`;  
};

function close(){
    lighterContainer.classList.replace('d-flex' , 'd-none');
    container.style.filter = ` blur(0px) `;  
};
nextButton.addEventListener('click', function(){Slider(1)});
prvButton.addEventListener('click', function(){Slider(-1)});
closeButton.addEventListener('click', close);
document.addEventListener('keydown' , function(e){
    if (e.key == "ArrowLeft"){
        Slider(1);
    }
    else if (e.key == "ArrowRight"){
        Slider(-1);
    }
    else if (e.key == "Escape"){
        close();
    }
})

