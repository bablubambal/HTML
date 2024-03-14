console.log("Learning LOOPS IN JS")

// tAsk1: print 1-3 

// console.log(1)
// console.log(2)
// console.log(3)



// task2: print number 1-10 
// console.log(4)

//task3: print number 1-100

/**
 * Loops : 
 *  3 types of loops
 * 
 * 1. for Loop :
 * 2. While Loop :
 * 3. Do while Loop
 * 
 */

// for(i=1; i<5;i++){
//     console.log("hello")
//     console.log(i)
// }

// task3 solun 
// for(i=1; i<2;i--){console.log(i)}





// While and Do while : 
let i = 10 
while(i<=3){
    console.log(i)
    i = i+1
}

console.log('*****')
let j = 10;
do {
    console.log(j)
    j= j+1
} while (j<=3); 



//advve loops concets: 

/***
 * different way of using for loop:
 * 
 */
console.log("ADV")

a = ['shyam',1,2,8,9,23,234,23453]

// 1.way 
// for(i=0;i<a.length;i++){
//     console.log(a[i])
// }

// 2.way 
// a.forEach(ele => {
//     console.log(ele)
// });

// 3.way
// for (const key in a) {
    
//     console.log(a[key])
// }

// 4.way
for (const iterator of a) {
    console.log(iterator)
}