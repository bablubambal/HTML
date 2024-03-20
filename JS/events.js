console.log('Learning Evetns in JS')

/**
 * 3 kind of events: 
 * 1. Mouse Events - click,dblclick,mousedown,mouseover
 * 2. Keyboard Events - onkeydown,onkeypress,onkeyup
 * 3 Window Events - onLoad,onResize
 * 
 * .. touch evetnss...
 */

function btnclickfun(){
    console.log('You have clicked on a button')
}

function dblclickfun(){
    console.log('You have double clicked on a button')
}

function moveroverfunction(){
    console.log('Mouse Over Function runs')
}

function mleave(){
    console.log('Mouuse left')
}

function onkeypressss(){
    let key = document.getElementById('inp').value;
    console.log('you have pressed a key',key)
}

function mybulrfun(){
    console.log('You have clicke away from input')
} 
const myfocuas =()=>{
    console.log('Infocus')
}



/// another way of events in js | using event listeners

btn = document.getElementById('mybtn')
// function mybtnclick(){
//     console.log('mybtn id function clicked')
// }
// btn.addEventListener('click',mybtnclick)
// btn.addEventListener('click',function mybtnclick(){
//     console.log('mybtn id function clicked')
// })
// btn.addEventListener('click', ()=>{
//     console.log('mybtn id function clicked')
// })

btn.addEventListener('click', ()=>console.log('mybtn id function clicked'))


// btn.addEventListener('mouseover',()=>console.log('mybtn id funcction is moveserover'));
document.getElementById('mybtn').addEventListener('mouseover',()=>console.log('mybtn id funcction is moveserover'));


/**
 * Task: 
 * 
 * Make a Calculators with the Help of JS: 
 * Using clickevetns and eval function 
 * 
 * eval('sting')
 * 
 * 
 * another task: 
 * 
 * Recpiep books: 
 * 
 * List of recpsipe : 
 * tea coffe
 * when i click on any recipe | onclick ==> innerHTML of the below page showing recipe
 * 
 */