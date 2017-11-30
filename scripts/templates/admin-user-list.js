function adminUserListTemplate(users){

  let result = `<h2 class="content-header mb-3 text-center text-white bg-dark">ADMIN USER DASHBOARD</h2>
  <div class="d-flex justify-content-end row">
    <div class="col-3 d-flex justify-content-end pr-3 mb-3">
      <a id="add-snack" class="btn btn-primary blue-gradient mr-0">Add User</a>
    </div>
  </div>`
  users.forEach(user => {
    const {id, firstName, lastName, username, email, reviews dateJoined} = user
    result += `
      <table class="table table-hover">
        <thead>
          <tr class="head-row blue-gradient">
            <th width="6%">#</th>
            <th width="14%">first name</th>
            <th width="14%">last name</th>
            <th width="14%">username</th>
            <th width="14%">email</th>
            <th width="14%">reviews</th>
            <th width="10%">date joined</th>
            <th width="14%"></th>
            <th width="14%"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">${user.id}</th>
            <td valign="middle">${user.firstName}</td>
            <td valign="middle">${user.lastName}</td>
            <td valign="middle">${user.username}</td>
            <td valign="middle">${user.email}</td>
            <td valign="middle">${user.reviews}</td>
            <td valign="middle">${user.dateJoined}</td>
            <td valign="middle"><a id="edit${id}" class="edit btn btn-warning py-2 mr-0">Edit</a></td>
            <td valign="middle"><a id="delete${id}" class="delete btn btn-danger py-2 mr-0">Delete</a></td>
          </tr>
        </tbody>
      </table>
    `
  })

  return result
}
