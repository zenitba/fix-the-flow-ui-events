/* Animatie 1 */
let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}
/* Animatie 1 */

let frontend = document.querySelector('a:nth-of-type(1)')
frontend.addEventListener('click', rotationHandler)
frontend.addEventListener('animationend', rotationHandler)
function rotationHandler() {
  frontend.classList.toggle('rotate')
}

/* Animatie 2 */

let design = document.querySelector('a:nth-of-type(2)')
design.addEventListener('click', orangeHandler)
function orangeHandler() {
  design.classList.toggle('orange')
}

/* Animatie 3*/

let and = document.querySelector('a:nth-of-type(3)')
and.addEventListener('dblclick', violetHandler)
function violetHandler() {
  and.classList.toggle('violet')
}

/* Animatie 4*/

let development = document.querySelector('a:nth-of-type(4)')
development.addEventListener('click', spinningHandler)
development.addEventListener('animationend', spinningHandler)
function spinningHandler() {
  development.classList.toggle('spinning')
}

/* Animatie 5 */

let sprint5 = document.querySelector('a:nth-of-type(5)')
sprint5.addEventListener('click', shakingHandler)
function shakingHandler() {
  sprint5.classList.toggle('shaking')
}

/* Animatie 6 */

let fix = document.querySelector('a:nth-of-type(6)')
fix.addEventListener('click', verticalHandler)
function verticalHandler() {
  fix.classList.toggle('vertical-shaking')
}

/* Animatie 7 */

let the = document.querySelector('a:nth-of-type(7)')
the.addEventListener('click', horizontalHandler)
function horizontalHandler() {
  the.classList.toggle('horizontal')
}

/* Animatie 8 */

let flow = document.querySelector('a:nth-of-type(8)')
flow.addEventListener('click', discoHandler)
function discoHandler() {
  flow.classList.toggle('disco')
}

/* Animatie 9 */

let user = document.querySelector('a:nth-of-type(9)')
user.addEventListener('click', squareHandler)
function squareHandler() {
  user.classList.toggle('square')
}
/* Animatie 10 */
let flashing = document.querySelector('a:nth-of-type(10)')

flashing.addEventListener('click', flashHandler)
flashing.addEventListener('animationed', flashHandler)

function flashHandler() {
  flashing.classList.toggle('flash')
}