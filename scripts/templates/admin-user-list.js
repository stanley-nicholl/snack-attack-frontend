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
        <th width="6%">#</th>
        <th width="14%">first name</th>
        <th width="14%">last name</th>
        <th width="14%">username</th>
        <th width="14%">email</th>
        <th width="10%">admin</th>
        <th width="14%"></th>
        <th width="14%"></th>
      </tr>
    </thead>
    <tbody>
    `
  users.forEach(user => {
    const {id, first_name, last_name, username, email, admin, dateJoined} = user
    result += `
      <tr>
        <th scope="row">${id}</th>
        <td valign="middle">${first_name}</td>
        <td valign="middle">${last_name}</td>
        <td valign="middle">${username}</td>
        <td valign="middle">${email}</td>
        <td valign="middle">${admin}</td>
        <td valign="middle"><a id="edit${id}" class="edit btn btn-warning py-2 mr-0">Edit</a></td>
        <td valign="middle"><button type="button" id="delete${id}" class="btn btn-danger delete" data-toggle="modal" data-target="#delete-modal">Delete</button></td>
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
