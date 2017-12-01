function adminSnackListTemplate(snacks){
  let result =
  `
  <h2 class="content-header mb-3 text-center text-white bg-dark">MANAGE SNACKS</h2>
  <div class="d-flex justify-content-between row align-items-center">
    <a id="back-to-dashboard" class="ml-3 mb-2">< BACK TO DASHBOARD</a>
    <div class="col-3 d-flex justify-content-end pr-3 mb-3">
      <a id="add-user" class="btn btn-primary blue-gradient mr-0">Add Snack</a>
    </div>
  </div>
  <table class="table table-hover">
    <thead>
      <tr class="head-row peach-gradient">
        <th width="6%">#</th>
        <th width="14%">name</th>
        <th width="8%">price</th>
        <th width="26%">description</th>
        <th width="8%">perishable</th>
        <th width="14%"></th>
        <th width="14%"></th>
      </tr>
    </thead>
    <tbody>
    `
  snacks.forEach(snack => {
    const {id, name, price, description, is_perishable} = snack
    const shortDescription = description.substring(0, 141)
    const fullPrice = `$${price}`
    result += `
    <tr>
      <th scope="row">${id}</th>
      <td valign="middle">${name}</td>
      <td valign="middle">${fullPrice}</td>
      <td valign="middle">${shortDescription}</td>
      <td valign="middle">${is_perishable}</td>
      <td valign="middle"><a id="${id}edit" class="edit btn btn-warning py-2 mr-0">Edit</a></td>
      <td valign="middle"><a id="${id}delete" class="delete btn btn-danger py-2 mr-0">Delete</a></td>
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
