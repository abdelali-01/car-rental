let menu = document.getElementById('menu');
let navBar = document.querySelector('.nav-bar');
let m = document.querySelector('.m');

let signIn = document.querySelector('.sign-in');
let signInForm = document.querySelector('.signin-form');
let background = document.querySelector('.background');
let xClose = document.querySelectorAll('.fa-circle-xmark');

let two = document.querySelector('.two');
let signUp = document.querySelector('.sign-up');
let signUpForm = document.querySelector('.signup-form');
let createAct = document.getElementById('crt');

let signinBtn = document.getElementById('signin-btn');
let signupBbtn = document.getElementById('signup-btn');


let inputs = document.querySelectorAll('.signin-form input');
let attention = document.querySelector('.attention');

signIn.addEventListener('click',()=>{
    background.classList.toggle('hide-sign');
    signInForm.classList.toggle('scale');
    body.classList.toggle('hidden');
    two.classList.remove('hide-sign');
    signUpForm.classList.remove('scale')
});
signUp.addEventListener('click',()=>{
    two.classList.toggle('hide-sign');
    signUpForm.classList.toggle('scale');
    body.classList.toggle('hidden');
    background.classList.remove('hide-sign');
    signInForm.classList.remove('scale');
});
function closeIn(){
    background.classList.remove('hide-sign');
    signInForm.classList.remove('scale');
    body.classList.remove('hidden');
    reset()
};
function closeUp(){
    two.classList.remove('hide-sign');
    signUpForm.classList.remove('scale');
    body.classList.remove('hidden');
    reset()
};

function key(){
    attention.style.display = 'none';
}

function clickedin(){
    if(inputs[0].value != '' && inputs[1].value != ''  ){
        background.classList.remove('hide-sign');
        signInForm.classList.remove('scale');
        reset();
    }else{
        background.classList.add('hide-sign');
        signInForm.classList.add('scale');
    }
}
function clickedup(){
    if(inputs[3].value != '' && inputs[4].value != '' && inputs[5].value != '' && inputs[6].value != '' ){
        if(inputs[6].value == inputs[5].value && inputs[5].value.length == 8 ){
            closeUp();
            reset(); 
        }else {
            inputs[6].type = 'text' ;
            inputs[6].value = 'its not the same';
            inputs[6].style.color = 'red';
        }
    }else{
        two.classList.add('hide-sign');
        signUpForm.classList.add('scale');
        attention.style.display = 'block';
    }
}
function pswkey(){
    inputs[6].type = 'password' ;
    inputs[6].value = '';
    inputs[6].style.color = '#000';
}
function reset(){
    for(let i=0 ; i<inputs.length ; i++){
        inputs[i].value = '';
    }
}
createAct.onclick = function () {
    two.classList.toggle('hide-sign');
    signUpForm.classList.toggle('scale');
    closeIn();
}

menu.addEventListener('click',()=>{
    navBar.classList.toggle('hide-bar');
    m.classList.toggle('fa-bars');
    m.classList.toggle('fa-xmark');
})

function hideNavBar(){
    navBar.classList.add('hide-bar');
    m.classList.remove('fa-xmark');
    m.classList.add('fa-bars');
}

onscroll = function(){
    navBar.classList.add('hide-bar');
    m.classList.remove('fa-xmark');
    m.classList.add('fa-bars');
}
const sr = ScrollReveal({
    distance : '100px',
    duration:2500,
    delay:400,
    reset : true 
})
sr.reveal('.home .text' ,{delay:200, origin:'top'});
sr.reveal('.form' ,{delay:600, origin:'left'});

sr.reveal('.ride-content' ,{delay:400, origin:'top'});
sr.reveal('.box-car' ,{delay:400, origin:'bottom'});

sr.reveal('.about-img' ,{delay:700, origin:'left'});
sr.reveal('.about-text' ,{delay:400, origin:'top'});

let body =document.querySelector('body');

var eye = document.querySelector('.eye');
eye.addEventListener('click',()=>{
        eye.classList.toggle('fa-eye-slash');
        eye.classList.toggle('fa-eye');
    if(inputs[1].type === 'password'){
        inputs[1].type = 'text';
    }else{
       inputs[1].type = 'password' ;
    }
})

let sections = document.querySelectorAll('section');
let rentPage = document.querySelector('.Rent-page');
let bigImg = document.getElementById('big-img');
let One = document.getElementById('one');
let Two = document.getElementById('two');

let getScroll;
let nameOfcar = document.querySelector('#nameOfcar');
function rentEnter(img , name){
    for(let i = 0 ; i< sections.length ; i++){
        sections[i].style.display = 'none' ;
    };
    rentPage.classList.toggle('hide-rent');
    scroll({
        top : 0 ,
        behavior :"smooth" 
    })
    One.src = img ;
    bigImg.src = img ;
    Two.src = img ;
    getScroll = scrollY ;

    nameOfcar.innerHTML = name ;
}

function rentgo(){
    for(let i = 0 ; i< sections.length ; i++){
        sections[i].style.display = 'block' ;
    };
    rentPage.classList.add('hide-rent');
}
var backIcon = document.querySelector('.back-icon');

backIcon.addEventListener('click',()=>{
    for(let i = 0 ; i< sections.length ; i++){
        sections[i].style.display = 'block' ;
    };
    rentPage.classList.add('hide-rent');
    scroll({
        top : 1535 ,
    })
})
var favoriBtn = document.querySelector('.favori');
var favoriIcon = document.querySelector('.fa-heart');

favoriBtn.addEventListener('click',()=>{
    favoriIcon.classList.toggle('fa-regular');
    favoriIcon.classList.toggle('fa-solid');
})

let emailSubscribe = document.getElementById('email');
let alert = document.querySelector('.alert');
let okBtn = document.getElementById('ok');
function alertcall(){
    if(emailSubscribe.value != ''  ){
       alert.classList.remove('alert-hide');
       alert.classList.add('scale');
    }else{
        emailSubscribe.placeholder = 'Please Enter Your Email';
    }
    emailSubscribe.onfocus = function(){
        emailSubscribe.placeholder = 'Enter Your Email ...'
    }
}
okBtn.addEventListener('click',()=>{
    alert.classList.add('alert-hide');
    alert.classList.remove('scale');
    emailSubscribe.value = '';
})
let dateinput = document.querySelectorAll('.dateinput');

for(let i = 0 ; i<dateinput.length ; i++){
    dateinput[i].value = dateinput[0].value ;
}