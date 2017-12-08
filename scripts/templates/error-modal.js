function errorModalTemplate(message){
  const result = `
  <div class="text-center">
      <i class="fa fa-warning fa-4x mb-3 animated rotateIn"></i>
      <p>${message}</p>
  </div>
  `
  return result
}
