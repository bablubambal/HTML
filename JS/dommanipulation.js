console.log('Dom manipulation method')


// console.log(typeof(document),document)


/**
 * 1. by tag name; 
 * 2. by id
 * 3. class name
 */

//  res = document.getElementsByTagName('h1')



res = document.getElementById('p1')
//  res[0].innerText = 'Welcome updating via JS'

res = document.getElementsByClassName('heading')
// res.innerText = 'Para by id'
 console.log(res[0].innerHTML)
