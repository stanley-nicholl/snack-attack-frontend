function snackReviewsTemplate(reviewId, reviewContent, title){
return `
  <div class='justify-content-start'>
    <div>
      <h4 id='reviewT-${reviewId}'>${title}</h4>
    </div>
    <div>
      <h5><small id='userName-${reviewId}'></small></h5>
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
    <p id='review-${reviewId}'>${reviewContent} </p>
  </div>

`
}
