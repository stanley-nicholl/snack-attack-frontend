function adminSnackListTemplate(snacks){
  let result =
  `
  <h2 class="content-header mb-3 text-center text-white bg-dark">MANAGE SNACKS</h2>
  <div class="d-flex justify-content-between row align-items-center">
    <a id="back-to-dashboard" class="ml-3 mb-2">< BACK TO DASHBOARD</a>
    <div class="col-3 d-flex justify-content-end pr-3 mb-3">
      <a id="add-snack" class="btn btn-primary peach-gradient mr-0">Add Snack</a>
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
      <td valign="middle"><button type="button" id="snack-edit${id}" class="btn btn-warning edit" data-toggle="modal" data-target="#snack-modal">Edit</button></td>
      <td valign="middle"><button type="button" id="snack-delete${id}" class="btn btn-danger delete" data-toggle="modal" data-target="#delete-snack-modal">Delete</button></td>
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

function  adminAddSnackTemplate(){
  return `
  <div class="md-form form-sm mx-4 mb-3">
      <p class="snack-description mb-0">snack name</p>
      <input type="text" id="snack-name" class="form-control mt-0 pt-0" required>
  </div>

  <div class="md-form form-sm mx-4 mb-4">
      <p class="snack-description mb-0">snack description</p>
      <input type="text" id="snack-description" class="form-control mt-0 pt-0" required>
  </div>

  <div class="md-form form-sm mx-4 mb-3">
      <p class="snack-description mb-0">snack price</p>
      <input type="text" id="snack-price" class="form-control mt-0 pt-0" required>
  </div>

  <div class="md-form form-sm mx-4 mb-3">
      <p class="snack-description mb-0">snack image</p>
      <input type="text" id="snack-image" class="form-control mt-0 pt-0" required>
  </div>

  <div class="form-group mx-4 mb-3">
     <input type="checkbox" id="snack-perishable" value="true" checked>
     <label for="snack-perishable">perishable</label>
  </div>

  <div class="text-center mt-1-half">
      <button id="add-snack-btn" class="btn btn-info peach-gradient mb-4">Add Snack<i class="fa fa-send ml-1"></i></button>
  </div>
  `
}

function adminEditSnackTemplate(snack){
  const {id, name, price, description, is_perishable, img} = snack
  let result = `
  <div class="md-form form-sm mx-4 mb-3">
      <p class="snack-description mb-0">snack name</p>
      <input type="text" id="snack-name" class="form-control mt-0 pt-0" value="${name}" required>
  </div>

  <div class="md-form form-sm mx-4 mb-4">
      <p class="snack-description mb-0">snack description</p>
      <input type="text" id="snack-description" class="form-control mt-0 pt-0" value="${description}" required>
  </div>

  <div class="md-form form-sm mx-4 mb-3">
      <p class="snack-description mb-0">snack price</p>
      <input type="text" id="snack-price" class="form-control mt-0 pt-0" value="${price}" required>
  </div>

  <div class="md-form form-sm mx-4 mb-3">
      <p class="snack-description mb-0">snack image</p>
      <input type="text" id="snack-image" class="form-control mt-0 pt-0" value="${img}" required>
  </div>

  <div class="form-group mx-4 mb-3">
     <input type="checkbox" id="snack-perishable" value="true" ${isChecked(is_perishable)}>
     <label for="snack-perishable">perishable</label>
  </div>

  <div class="text-center mt-1-half">
      <button id="update-snack-btn" class="btn btn-info peach-gradient mb-4">Update Snack<i class="fa fa-send ml-1"></i></button>
  </div>
  `
  return result
}

function isChecked(input){
  return input === true ? 'checked' : ''
}
