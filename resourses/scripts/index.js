let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let homePoints = 0
let guestPoints = 0

let addHome1 = document.getElementById("add-home-1")
let addHome2 = document.getElementById("add-home-2")
let addHome3 = document.getElementById("add-home-3")

let addGuest1 = document.getElementById("add-guest-1")
let addGuest2 = document.getElementById("add-guest-2")
let addGuest3 = document.getElementById("add-guest-3")



addHome1.addEventListener("click", function() {
  homePoints++
  homeEl.textContent = homePoints
})

addHome2.addEventListener("click", function() {
  homePoints += 2
  homeEl.textContent = homePoints
})


addHome3.addEventListener("click", function() {
  homePoints += 3
  homeEl.textContent = homePoints
})


addGuest1.addEventListener("click", function() {
  guestPoints++
  guestEl.textContent = guestPoints
})
addGuest2.addEventListener("click", function() {
  guestPoints +=2
  guestEl.textContent = guestPoints
})

addGuest3.addEventListener("click", function() {
  guestPoints +=3
  guestEl.textContent = guestPoints
})