function snackReviewsTemplate(review){
  const { id, content, title} = review

return `
  <div class='justify-content-start'>
    <div>
      <h4 id='reviewT-${id}'>${title}</h4>
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
    <p class='noReview' id='review-${id}'>${content} </p>
    <hr>
  </div>

`
}

function hasReview(content){
  return content ? content : 'Be the first to review this snack!'
}
