function snackDetailsTemplate(id, snackName, image, description){

return `<div class="mx-auto ">
  <div class="col mx-auto modal" id="snackCard-${id}" role='dialog' aria-labelledby="${snackName}+${id}" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header d-flex flex-column snackDeetsHeader">
          <button type="button" class="close" data-dismiss='modal' aria-label="Close"><span aria-hidden="true"> &times;</span></button>
          <h2 class="modal-title snack-header" id="snackName"></h2>
          <div class="d-flex col-12 justify-content-between">
            <div class="">
              <ul id='ulStarReview' class="d-flex ulNoBullets  mt-3">
                <medium><strong>rating </strong></medium>
                <li><a href="#"><i class="fa fa-star"></i></a></li>
                <li><a href="#"><i class="fa fa-star"></i></a></li>
                <li><a href="#"><i class="fa fa-star-half-full"></i></a></li>
                <li><a href="#"><i class="fa fa-star-o"></i></a></li>
                <li><a href="#"><i class="fa fa-star-o"></i></a></li>
              </ul>
            </div>
            <div class="">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" id="reviewSnackBtn-${id}">Review Snack</button>
            </div>
          </div>

        </div>
        <div class="row ">
          <div class="modal-body snackDeetsFormat">
            <div class="float-left" style="min-width: 50%">
              <img src="${image}" class="img-fluid" alt="Pic of ${snackName}">
              <a href="#snackCard-${id}">
                <div class="mask"></div>
              </a>
            </div>
            <div class="col float-right">
              <div class=" ">
                <h3 class="snack-sub-header"> Details</h3>
                <p> ${description}</p>
              </div>





              <div class="reviews ">

                <h3 class="snack-sub-header"> Reviews</h3>
                <div id="reviewContainer-${id}">

                <!--
                  <div class='justify-content-start'>
                    <div>
                      <h4 id='reviewT-${id}'></h4>
                    </div>
                    <div>
                      <h5><small id='userName-${id}'></small></h5>
                    </div>
                    <div class='justify-content-start'>
                      <ul class="d-flex ulNoBullets " id='ulStarReview'>
                        <medium><strong>rating </strong></medium>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star-half-full"></i></li>
                        <li><i class="fa fa-star-o"></i></li>
                        <li><i class="fa fa-star-o"></i></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <p id='review-${id}'> </p>
                  </div>
*********         -->
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
