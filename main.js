let body = document.querySelector('body')
let oclock = document.createElement('p')


oclock.style.fontSize = '36px'
oclock.style.textAlign = 'center'
oclock.style.marginTop = '200px'

setInterval(() => {
let time = new Date()
let hour = time.getHours()
let min = time.getMinutes()
let second = time.getSeconds()
 
oclock.innerHTML = `${hour}:${min >= 10 ? min : '0' + min}:${
    second >= 10 ? second : '0' + second 
}`

},)

body.append(oclock)
