console.log("Functions in JS")

/**
 * Functions : 
 * Group of stmts / instruction together
 * 
 * 
 * 
 * 2 things: 
 * 1. function  Definitions/ declarations
 * 2. funtion Calling 
 * 
 * 
 * FUNCTIONS <==> Methods 
 * 
 * 
 * SYNTAX:
 * 
 * function functionName(){
 * // Your Code goes here....
 * }
 * 
 *  WHY:: 
 * Time Saving
 * Code simplification
 * Code redundancy is reduction / No duplication of Code .
 * 
 * 
 */  


// function Welcome(){
//     // My code ..
//     console.log('I am a Welcome function..')
//     console.log('Welcome Executed')
//     //20 
// }


// Welcome()
// Welcome()
// Welcome()
// Welcome()


// Parmetertized functions: 
function GreetingRam(){
    console.log("Welcome RAM")
}
function GreetingShyam(){
    console.log("Welcome SHYAM")
}

function Greeting(name){
    console.log('Welcome',name)
}

GreetingRam()
GreetingShyam()
Greeting('MOHAN')
Greeting('Sohan')

// MULTIPLE paramerter functions 

function addtwonumber(a,b){
    console.log('Your anser is ',a+b)
}

addtwonumber(3,4)
addtwonumber(10,25)

addtwonumber()

// Default paramerterized params 

function multipletwonumber(a=5,b=2){
    console.log("multipletwonumber",a*b)
}
multipletwonumber(2,3)
multipletwonumber()


// Returning and non reutring functions;

function subofnumber(a,b){
    console.log('Inside the subofnumber function')
    c = a-b;
    return c;
}
// function subofnumber(a,b){  return  a-b;    }

res = subofnumber(10,8)
console.log('result is ',res)



// Basic of Functions:   

// Other ways to write functions : 


function mygreeting(){
    console.log('mygreeting funcs')
}

const myfun = ()=>{
    console.log('my functions ')
}


const mynameoffunction = (a,b)=>{
    console.log('adding',a+b)
}



const mynameoffunctionUpdate = (a,b)=>console.log('adding',a+b)
const squarefun = a =>  a*a*a;


mynameoffunctionUpdate(12,32)

console.log(squarefun(8))
mygreeting()
myfun()



// Promise.then(
//     mynameoffunction
// )
// Promise.then(
//     (a,b)=>{
//         console.log('adding',a+b)
//     }
// )



