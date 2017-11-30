// const users = [
//   {name: "stan",
//   id: 1
// },
// {name: "matt",
// id: 2
// }
// ]

function loadPage(){
  document.getElementById('content').innerHTML = adminDashTemplate()
  document.getElementById('load-snacks').addEventListener('click', (event) => {
    event.preventDefault()
    loadSnackList()
  })
  document.getElementById('load-users').addEventListener('click', (event) => {
    event.preventDefault()
    loadUserList()
  })
}

loadPage()

function loadUserList(){
  Admin.getAllUsers()
    .then(users => {
      document.getElementById('content').innerHTML = adminUserListTemplate(users)
      document.getElementById('back-to-dashboard').addEventListener('click', loadPage())
      addDeleteListening()
      addEditListening()
    })
}

function loadSnackList(){

}

function addDeleteListening(){
  let deleteBtns = document.querySelectorAll('.delete')
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault()
      const target = event.target.id
      Admin.destroyUser(id)
        .then(result => {
          loadUserList()
        })
      })
    })
}

function addEditListening(){

}
