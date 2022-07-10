let modal = document.getElementById("modal-main");
let button = document.getElementById("btn-click")
let close = document.getElementById("close");
let closebtn = document.getElementById("close-btn");
let modals = document.querySelector('.modal')
let body = document.querySelector("body")
// Open Popup //

// ================================== //

// Click Open Me

button.addEventListener("click", function () {
  modal.style.display = "block"
  body.style.overflow = "hidden"
})




// Close Popup //

// ================================== //

// Click esc key

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modals.style.display = 'none'
    body.style.overflow = "auto"
  }
})

// Click close button

close.addEventListener("click", function () {
  modal.style.display = "none"
  body.style.overflow = "auto"
})

// Click X button

closebtn.addEventListener("click", function () {
  modal.style.display = "none"
  body.style.overflow = "auto"
})

// Click outside popup

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none"
    body.style.overflow = "auto"
  }
})