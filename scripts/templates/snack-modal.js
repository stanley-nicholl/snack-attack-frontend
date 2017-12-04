function snackDetailsTemplate(id, snackName, image, description){

return `<div class="mx-auto ">

  <!-- MODAL GO!  -->


  <div class="col mx-auto modal" id="snackCard-${id}" role='dialog' aria-labelledby="${snackName}+${id}" aria-hidden="true">

    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header d-flex flex-column snackDeetsHeader">
            <button type="button" class="close" data-dismiss='modal' aria-label="Close" ><span aria-hidden="true"> &times;</span></button>
          <h2 class="modal-title snack-header" id="${snackName}+${id}">${snackName}</h2>
          <div class="d-flex ">
            <div class="float-left">
              <ul class="d-flex ulNoBullets  mt-3"><medium><strong>rating </strong></medium>
                <li><a href="#"><i class="fa fa-star"></i></a></li>
                <li><a href="#"><i class="fa fa-star"></i></a></li>
                <li><a href="#"><i class="fa fa-star-half-full"></i></a></li>
                <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                <li><a href="#"><i class="fa fa-star-o"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="float-right align-self-end">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" id="reviewSnackBtn">Review Snack</button>
          </div>


        </div>
          <div class="row ">
          <div class="modal-body snackDeetsFormat">
            <div class="float-left" style="min-width: 50%">
            <img src="${image}" class="img-fluid" alt="Fat cat">
            <a href="#snackCard-${id}">
              <div class="mask"></div>
            </a>
            </div>
            <div class="col">
              <div class="float-right ">
                <h3 class="snack-sub-header"> Details</h3>
                <p> ${description}</p>
              </div>
              <div class="reviews ">
                <h3 class="snack-sub-header"> Reviews</h3>
                <div id="reviewContainer">
                  <div>
                  <h4 class="float-left">Title <small>Username</small></h4>
                    <ul class="d-flex floast-right ulNoBullets "><medium><strong>rating </strong></medium>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star"></i></li>
                      <li><i class="fa fa-star-half-full"></i></li>
                      <li><i class="fa fa-star-o"></i></li>
                      <li><i class="fa fa-star-o"></i></li>
                    </ul>
                  <div>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicingLorem ipsum dolor sit amet, consectetur adipisicing</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
`}
