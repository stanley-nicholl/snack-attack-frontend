function loadLargeLoginModal(){
  return `
  <div class="login-modal-content">
    <div class="layer">
      <span id="close" class="close text-white">&times;</span>
      <div class="login-modal-header">
        <h1 class="text-white text-center mt-4 font-weight-bold login-title">Being Hangry Sucks</h1>
        <h6 class="text-center font-weight-bold login-subtitle">Snack hard, your friend'll thank thee!</h6>
      </div>
      <div class="login-form-section px-5">
        <div class="row justify-content-between mt-4">
          <div class="col6">
            <h3 class="text-white column-title">JOIN US</h3>
          </div>
          <div class="col6 pl-5">
            <h3 class="text-white column-title">SIGN IN</h3>
          </div>
        </div>
        <div class="row justify-content-between pt-3">
          <div class="col6 d-flex justify-content-between">
            <div class="md-form double">
              <input type="text" id="create-first_name" class="form-control text-white" tabindex="1">
              <label for="create-first_name" class="text-white active">first name</label>
            </div>
            <div class="md-form double">
              <input type="text" id="create-last_name" class="form-control text-white" tabindex="2">
              <label for="create-last_name" class="text-white active">last name</label>
            </div>
          </div>
          <div class="col6 border border-light border-right-0 border-top-0 border-bottom-0 pl-5">
            <div class="md-form">
              <input type="text" id="login-email" class="form-control text-white" value="cmunkydev@gmail.com" tabindex="6">
              <label for="login-email" class="text-white active">email</label>
            </div>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col6">
            <div class="md-form">
              <input type="text" id="create-email" class="form-control text-white" tabindex="3">
              <label for="create-email" class="text-white active">email</label>
            </div>
          </div>
          <div class="col6 border border-light border-right-0 border-top-0 border-bottom-0 pl-5">
            <div class="md-form">
              <input type="password" id="login-password" class="form-control text-white" value="password" tabindex="7">
              <label for="login-password" class="text-white active">password</label>
            </div>
          </div>
        </div>
        <div class="row justify-content-between m">
          <div class="col6 d-flex justify-content-between">
            <div class="md-form double">
              <input type="text" id="create-username" class="form-control text-white" tabindex="4">
              <label for="create-username" class="text-white active">username</label>
            </div>
            <div class="md-form double">
              <input type="password" id="create-password" class="form-control text-white" tabindex="5">
              <label for="create-password" class="text-white active">password</label>
            </div>
          </div>
          <div class="col6 border border-light border-right-0 border-top-0 border-bottom-0 pl-5"></div>
        </div>
        <div class="row justify-content-between">
          <div class="col6 d-flex justify-content-center">
            <button type="button" id="join-button" class="btn peach-gradient">Create Account</button>
          </div>
          <div class="col6 border border-light border-right-0 border-top-0 border-bottom-0  d-flex justify-content-center pl-5">
            <button type="button" id="signin-button" class="btn blue-gradient">Sign In</button>
          </div>
        </div>
      </div>
      <p id="login-modal-error"></p>
    </div>
  </div>
  `
}

function loadSmallLoginModal(){
  return `
  <div class="login-modal-content">
    <div class="layer">
      <span id="close" class="close text-white">&times;</span>
      <div class="login-modal-header">
        <h3 class="text-white text-center mt-4 font-weight-bold login-title">Being Hangry Sucks</h3>
        <h6 class="text-center font-weight-bold login-subtitle">Snack hard, your friend'll thank thee!</h6>
      </div>
      <div class="row justify-content-between px-5 pt-4">
        <div class="col7">
          <h4 class="text-white column-title text-center mb-5">SIGN IN</h4>
        </div>
        <div class="col7">
          <div class="md-form">
            <input type="text" id="login-email" class="form-control text-white">
            <label for="login-email" class="text-white active">email</label>
          </div>
        </div>
        <div class="col7">
          <div class="md-form">
            <input type="password" id="login-password" class="form-control text-white">
            <label for="login-password" class="text-white active">password</label>
          </div>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col7 d-flex justify-content-center mb-5">
          <button type="button" id="signin-button" class="btn blue-gradient">Sign In</button>
        </div>
      </div>
      <div class="login-form-section px-5">
        <div class="row justify-content-between mt-4">
          <div class="col7">
            <h4 class="text-white column-title text-center mb-5">JOIN US</h4>
          </div>
        </div>
        <div class="row justify-content-between mb-5">
          <div class="col7 d-flex justify-content-between">
            <div class="md-form double">
              <input type="text" id="create-first_name" class="form-control text-white">
              <label for="create-first_name" class="text-white active">first name</label>
            </div>
            <div class="md-form double">
              <input type="text" id="create-last_name" class="form-control text-white">
              <label for="create-last_name" class="text-white active">last name</label>
            </div>
          </div>
          <div class="col7">
            <div class="md-form">
              <input type="text" id="create-email" class="form-control text-white">
              <label for="create-email" class="text-white active">email</label>
            </div>
          </div>
          <div class="col7 d-flex justify-content-between">
            <div class="md-form double">
              <input type="text" id="create-username" class="form-control text-white">
              <label for="create-username" class="text-white active">username</label>
            </div>
            <div class="md-form double">
              <input type="password" id="create-password" class="form-control text-white">
              <label for="create-password" class="text-white active">password</label>
            </div>
          </div>

          <div class="col7 d-flex justify-content-center">
            <button type="button" id="join-button" class="btn peach-gradient">Create Account</button>
          </div>
        </div>


        <!-- <div class="row justify-content-between">
          <div class="col7">
            <h4 class="text-white column-title text-center mb-5">SIGN IN</h4>
          </div>
          <div class="col7">
            <div class="md-form">
              <input type="text" id="login-email" class="form-control text-white">
              <label for="login-email" class="text-white active">email</label>
            </div>
          </div>
          <div class="col7">
            <div class="md-form">
              <input type="password" id="login-password" class="form-control text-white">
              <label for="login-password" class="text-white active">password</label>
            </div>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col7 d-flex justify-content-center">
            <button type="button" id="signin-button" class="btn blue-gradient">Sign In</button>
          </div>
        </div> -->
      </div>
      <p id="login-modal-error"></p>
    </div>
  </div>`
}
