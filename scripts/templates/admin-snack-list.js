function adminSnackListTemplate(snacks){
  let result = `<h2 class="content-header mb-3 text-center text-white bg-dark">ADMIN SNACK DASHBOARD</h2>
  <div class="d-flex justify-content-end row">
    <div class="col-3 d-flex justify-content-end pr-3 mb-3">
      <a id="add-snack" class="btn btn-primary blue-gradient mr-0">Add Snack</a>
    </div>
  </div>`
  snacks.forEach(snack => {
    result += `
      
    `
  })

  return result
}
