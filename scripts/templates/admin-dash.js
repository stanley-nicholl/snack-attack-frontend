function adminDashTemplate(){
  return `<h2 class="content-header mb-3 text-center text-white bg-dark">ADMIN DASHBOARD</h2>

  <div class="main-actions d-flex">
    <!--Card-->
    <div id="snack-management" class="card card-cascade mr-3">

      <!--Card image-->
      <div class="view gradient-card-header d-flex justify-content-center align-items-center peach-gradient">
          <h2 class="h2-responsive mr-3">Manage Snacks</h2>
          <img class="snack-logo mb-2" src="../img/snack_logo.svg" alt="">
      </div>

      <!--/Card image-->

      <!--Card content-->
      <div class="card-body text-center">

        <p class="card-description">You are the guardian of our snacking future. It is up to you ensure the best of snacks are available to all of our potential <span>hulks</span> out there. Use your s-k-ills to add, edit, and delete snacks for our guests.</p>
        <p class="card-punch"><span>It's up to you to feed our tired, our hungry masses.</span></p>
      </div>
      <!--Button-->
      <a id="load-snacks" class="btn btn-primary mx-5 mb-3 peach-gradient">Weild Snack Tools</a>
      <!--/.Card content-->

    </div>
    <!--/.Card-->

    <!--Card-->
    <div id="user-management" class="card card-cascade ml-3">

      <!--Card image-->
      <div class="view gradient-card-header d-flex justify-content-center align-items-center blue-gradient">
          <h2 class="h2-responsive mr-3">Manage Users</h2>
          <img class="snack-logo mb-2" src="../img/user_logo.svg" alt="">
      </div>

      <!--/Card image-->

      <!--Card content-->
      <div class="card-body text-center">

        <p class="card-description">It's a dog eat dog world out there. Keep the piece, maintain order, and ensure a good time for our snackers. Here you can add and remove users along with moderate their reviews if one of them gets just a bit too <span>hangry</span>.</p>
        <p class="card-punch"><span>With great power comes great responsibility.</span></p>
      </div>
      <!--Button-->
      <a id="load-users" class="btn btn-primary mx-5 mb-3 blue-gradient">Weild User Tools</a>
      <!--/.Card content-->

    </div>
    <!--/.Card-->
  </div>`

}
