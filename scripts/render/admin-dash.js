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
  Users.getAllUsers()
    .then(users => {
      const userArray = users.data.name
      document.getElementById('content').innerHTML = adminUserListTemplate(userArray)
      document.getElementById('back-to-dashboard').addEventListener('click', (event) => {
        loadPage()
      })
      addDeleteListening()
      addEditListening()
    })



}

function loadSnackList(){
  Snacks.getAllSnacks()
    .then(snacks => {
      const snackArray = snacks.data.name
      console.log(snackArray);
      document.getElementById('content').innerHTML = adminSnackListTemplate(snackArray)
      document.getElementById('back-to-dashboard').addEventListener('click', (event) => {
        loadPage()
      })
      addDeleteListening()
      addEditListening()
    })
}

function addDeleteListening(){
  let deleteBtns = document.querySelectorAll('.delete')
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault()
      const target = event.target.id.substring(6)
      document.getElementById('confirm-delete').addEventListener('click', (event) =>{
        event.preventDefault()
        Users.destroyUser(target)
          .then(result => {
            $('#delete-modal').modal('hide')
            loadUserList()
          })
      })
    })
  })
}

function addEditListening(){
  let editBtns = document.querySelectorAll('.edit')
  editBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault()
      const target = event.target.id.substring(4)
      console.log(target);
      // Users.updateUser(id, body)
      //   .then(result => {
      //     loadUserList()
      //   })
      })
    })
}
