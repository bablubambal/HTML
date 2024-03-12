console.log('Operators in JS')
/**
 * 1. Arithmetic operators [ +,-,*,/,%]
 * 2. Comparison operators [ == ,<,> ,<= ,=> !=]
 * 3. Logical operators [ and or not]
 * 4. Bitwise operators 
 * 5. Unit operator
 * 6. Assignment  = 
 * 
 */

a = 20
b = 10

c = a+b
c = a-b;
c = a*b;
c = a/b;
c = a%b;
console.log("The resulet is c: ",c)

// console.log(a=b)
console.log(a==b)
// 20 == 10  | true or false 

console.log(a>b)
console.log(a>=b)
console.log(a<b) 
console.log(a<=b)

console.log(10 === 10)

// Logical operators are used to check more than one condition 

console.log("logical operators")
console.log(a>b && a==b )
console.log(a>b || a==b )
console.log(!!!true)


console.log("*****")

d = 30

d += 3
d -= 5
d = d -5 

d -= 5

console.log(d)


e = 3;
e++
e++
e--
// e = e+1  e++
console.log(e)


// ternary opertors 

// condition  ? what to do when true: what to do when flase 


a = 1
b = 3

a>b ? console.log('Checking true value') : console.log('false value')



a ==b ? true: false 

