/*Cuando quiero que todo los elementos se carguen (estructura html) antes del js*/
window.onload = function(){
    var board = document.querySelector('.board-js');

    /* el primero es un evento y el segundo es calboard o es una funcion */
    board.addEventListener('click', addX);

/*    board.removeEventListener('dblclick', function(event){ 
        event.target.style.backgroundColor = 'red';
    });

    board.removeEventListener('mouseover', function(event){ 
        event.target.style.backgroundColor = 'yellow';
    });*/
      
};
/* agregar texto con textContent*/
var centinel = true;
function addX(event){ 
    if (event.target.matches('td') && event.target.textContent === ''){
        if (centinel)
          event.target.textContent = 'x';
        else 
          event.target.textContent = 'o';

        centinel = !centinel;
    }
};

