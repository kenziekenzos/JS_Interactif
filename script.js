//———————————————————————— Fonctionnalité #1 ————————————————————————
var onFooterClick = document.querySelector('footer');
 count = 0;
onFooterClick.addEventListener('click', fooTer );
  

function fooTer () {
    console.log("click");
    count += 1;
            };

//———————————————————————— Fonctionnalité #2 ————————————————————————

let navbarHeaderEl = document.getElementById('navbarHeader');
let burgerBtn = document.getElementsByClassName('navbar-toggler');

console.log(navbarHeaderEl);
console.log(burgerBtn);


function collapseToggle(){
	navbarHeaderEl.classList.toggle('collapse');
}

burgerBtn[0].addEventListener('click', collapseToggle);


//———————————————————————— Fonctionnalité #3 ————————————————————————


let card = document.querySelectorAll(".card-body p");
let btnEdit = document.querySelectorAll(".card .btn");

function changeToRed () {
    card[0].style.color='red';
}
  
btnEdit[1].addEventListener('click', changeToRed); 


//———————————————————————— Fonctionnalité #4 ————————————————————————


let caard = document.querySelectorAll(".card-body p")[1];
let boutnEdit = document.querySelectorAll(".card .btn")[3];

console.log(caard);
console.log(boutnEdit);

function changeToGreen()
    {if (caard.style.color === '#212529'){ 
            caard.style.color = 'green' ; 

    } else { caard.style.color === '#212529'   
            }
}

boutnEdit.addEventListener('click', changeToGreen);



//function changeToRed () {
//    caard[0].style.color='green';
//}
//  
//boutnEdit[1].addEventListener('click', changeToRed); 
