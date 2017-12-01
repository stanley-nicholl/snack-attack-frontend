function adminUserListTemplate(users){
  let result =
  `
  <h2 class="content-header mb-3 text-center text-white bg-dark">MANAGE USERS</h2>
  <div class="d-flex justify-content-between row align-items-center">
    <a id="back-to-dashboard" class="ml-3 mb-2">< BACK TO DASHBOARD</a>
    <div class="col-3 d-flex justify-content-end pr-3 mb-3">
      <a id="add-snack" class="btn btn-primary blue-gradient mr-0">Add User</a>
    </div>
  </div>
  <table class="table table-hover">
    <thead>
      <tr class="head-row blue-gradient">
        <th width="6%">#</th>
        <th width="14%">first name</th>
        <th width="14%">last name</th>
        <th width="14%">username</th>
        <th width="14%">email</th>
        <th width="14%">reviews</th>
        <th width="10%">joined</th>
        <th width="14%"></th>
        <th width="14%"></th>
      </tr>
    </thead>
    <tbody>
    `

  users.forEach(user => {
    const {id, name, lastName, username, email, reviews, dateJoined} = user
    result += `
      <tr>
        <th scope="row">${id}</th>
        <td valign="middle">${firstName}</td>
        <td valign="middle">${lastName}</td>
        <td valign="middle">${username}</td>
        <td valign="middle">${email}</td>
        <td valign="middle">${reviews}</td>
        <td valign="middle">${dateJoined}</td>
        <td valign="middle"><a id="edit${id}" class="edit btn btn-warning py-2 mr-0">Edit</a></td>
        <td valign="middle"><a id="delete${id}" class="delete btn btn-danger py-2 mr-0">Delete</a></td>
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
