
let viewportWidth = $(window).width()
var loginModal = document.getElementById('login-modal');

viewportWidth > 800 ? loginModal.innerHTML = loadLargeLoginModal() : loginModal.innerHTML = loadSmallLoginModal()


loginModal.style.display = "block"
document.getElementById('close').addEventListener('click', (event) => {
  loginModal.style.display = "none";
})
window.onclick = function(event) {
  if (event.target == modal) {
      loginModal.style.display = "none";
  }
}

document.getElementById('join-button').addEventListener('click', (event) => {
  const body = {}
  body.first_name = document.getElementById('create-first_name').value
  body.last_name = document.getElementById('create-last_name').value
  body.username = document.getElementById('create-username').value
  body.password = document.getElementById('create-password').value
  body.email = document.getElementById('create-email').value
  // AXIOS CALL TO CREATE AUTHENTICATION ROUTE
})

document.getElementById('signin-button').addEventListener('click', (event) => {
  const body ={}
  body.username = document.getElementById('login-username').value
  body.password = document.getElementById('login-password').value
  // AXIOS CALL TO LOGIN AUTHENTICATION ROUTE
})
