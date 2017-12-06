function adminUserListTemplate(users){
  let result =
  `
  <h2 class="content-header mb-3 text-center text-white bg-dark">MANAGE USERS</h2>
  <div class="d-flex justify-content-between row align-items-center">
    <a id="back-to-dashboard" class="ml-3 mb-2">< BACK TO DASHBOARD</a>
  </div>
  <table class="table table-hover">
    <thead>
      <tr class="head-row blue-gradient">
        <th width="5%">#</th>
        <th width="13%">first name</th>
        <th width="13%">last name</th>
        <th width="14%">username</th>
        <th width="14%">email</th>
        <th width="5%">active</th>
        <th width="10%">admin</th>
        <th width="12%"></th>
        <th width="14%"></th>
      </tr>
    </thead>
    <tbody>
    `
  users.forEach(user => {
    const {id, first_name, last_name, username, email, admin, dateJoined, active} = user
    result += `
      <tr>
        <th scope="row">${id}</th>
        <td valign="middle">${first_name}</td>
        <td valign="middle">${last_name}</td>
        <td valign="middle">${username}</td>
        <td valign="middle">${email}</td>
        <td valign="middle">${active}</td>
        <td valign="middle">${admin}</td>
        <td valign="middle"><button type="button" id="user-edit${id}" class="btn btn-warning edit" data-toggle="modal" data-target="#user-modal">Edit</button></td>
        <td valign="middle"><button type="button" id="user-delete${id}" class="btn btn-danger delete" data-toggle="modal" data-target="#delete-user-modal">Delete</button></td>
      </tr>


    `
  })
  result +=
  `
    </tbody>
    </table>
    `
  return result
}

function adminEditUserTemplate(user){
  const {id, first_name, last_name, username, email, admin, dateJoined, active} = user
  let result =  `
     <div class="md-form form-sm">
         <i class="fa fa-user prefix"></i>
         <h2 class="ml-5 pt-2">${first_name} ${last_name}</h2>
     </div>

     <div class="d-flex align-items-center">
        <i class="fa fa-font"></i>
        <p class="ml-4 pt-2">username: ${username}</p>
     </div>

     <div class="d-flex align-items-center">
        <i class="fa fa-envelope"></i>
        <p class="ml-4 pt-2">email: ${email}</p>
     </div>

     <div class="form-group">
        <input type="checkbox" id="active" ${isChecked(active)}>
        <label for="active">active</label>
     </div>

     <div class="form-group">
        <input type="checkbox" id="admin" ${isChecked(admin)}>
        <label for="admin">admin</label>
     </div>

     <div class="text-center mt-1-half">
         <button id="update-user-btn" class="btn btn-info blue-gradient mb-4">Update<i class="fa fa-send ml-1"></i></button>
     </div>
    `

    return result
  }

  function isChecked(input){
    return input === true ? 'checked' : ''
  }
