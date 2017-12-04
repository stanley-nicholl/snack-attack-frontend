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
      const userArray = users.data.users
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
      const snackArray = snacks.data.snacks
      snackArray.sort(snackSort)
      document.getElementById('content').innerHTML = adminSnackListTemplate(snackArray)
      document.getElementById('back-to-dashboard').addEventListener('click', (event) => {
        loadPage()
      })
      addNewSnackListening()
      addDeleteListening()
      addEditListening()
    })
}

function snackSort(a,b) {
  if (a.id < b.id) return -1;
  return  (a.id > b.id) ? 1 : 0;
}



function addDeleteListening(){
  let deleteBtns = document.querySelectorAll('.delete')
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault()
      const target = event.target.id.split('-delete')
      document.getElementById('confirm-delete').addEventListener('click', (event) =>{
      event.preventDefault()
      if(target[0] === 'user'){
        Users.destroyUser(target[1])
          .then(result => {
            $('#delete-modal').modal('hide')
            loadUserList()
          })
      }else{
        Snacks.destroySnack(target[1])
          .then(result => {
            $('#delete-modal').modal('hide')
            loadSnackList()
          })
      }
    })
  })
})
}

function addNewSnackListening(){
  document.getElementById('add-snack').addEventListener('click', (event)=> {
    event.preventDefault()
    document.getElementById('snack-modal-body').innerHTML = adminAddSnackTemplate()
    $('#snack-modal').modal('toggle')
    document.getElementById('add-snack-btn').addEventListener('click', (event) =>{
      event.preventDefault()
      console.log('test');
      const body = {}
      body.name = document.getElementById('snack-name').value
      body.description = document.getElementById('snack-description').value
      body.img = document.getElementById('snack-image').value
      body.price = document.getElementById('snack-price').value
      body.is_perishable = $('#snack-perishable').is(':checked')
      Snacks.addSnack(body)
        .then(result => {
          console.log('test2');
          $('#snack-modal').modal('hide')
          loadSnackList()
          document.getElementById('success-modal-content').textContent = `Your snack has been added for your adoring fans. The collective masses say 'thank you'!`
          $('#success-modal').modal('toggle')
        })
    })
  })
}

function addEditListening(){
  let editBtns = document.querySelectorAll('.edit')
  editBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault()
      const target = event.target.id.split('-edit')
      if(target[0] === 'user'){
        Users.getUser(target[1])
          .then(user => {
            const userToEdit = user.data.users
            document.getElementById('user-modal-body').innerHTML = adminEditUserTemplate(userToEdit)
            $('#user-modal').modal('toggle')
            document.getElementById('update-user-btn').addEventListener('click', (event) => {
              event.preventDefault()
              const activeStatus = $('#active').is(':checked')
              const adminStatus = $('#admin').is(':checked')
              const body = {
                username: userToEdit.username,
                email: userToEdit.email,
                first_name: userToEdit.first_name,
                last_name: userToEdit.last_name,
                active: activeStatus,
                admin: adminStatus
              }
              // ROUTE NOT WORKING  ROUTE NOT WORKING  ROUTE NOT WORKING
              Users.updateUser(target[1], body)
                .then(result => {
                  $('#user-modal').modal('hide')
                  loadUserList()
                  document.getElementById('success-modal-content').textContent = `${body.username} updated. Nice work!`
                  $('#success-modal').modal('toggle')
                })
            })
          })
      }else{
        Snacks.getSnack(target[1])
          .then(snack => {
            const snackToEdit = snack.data.snacks
            document.getElementById('snack-modal-body').innerHTML = adminEditSnackTemplate(snackToEdit)
            $('#snack-modal').modal('toggle')
            document.getElementById('update-snack-btn').addEventListener('click', (event) => {
              event.preventDefault()
              const body = {}
              body.name = document.getElementById('snack-name').value
              body.description = document.getElementById('snack-description').value
              body.img = document.getElementById('snack-image').value
              body.price = document.getElementById('snack-price').value
              body.is_perishable = $('#snack-perishable').is(':checked')
              Snacks.updateSnack(target[1], body)
                .then(result => {
                  $('#snack-modal').modal('hide')
                  loadSnackList()
                  document.getElementById('success-modal-content').textContent = `${body.name} updated. Nice work!`
                  $('#success-modal').modal('toggle')
                })
          })
      })
    }
    })
  })
}
