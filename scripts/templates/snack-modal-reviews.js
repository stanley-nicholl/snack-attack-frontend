function snackReviewsTemplate(review){
  const { id, content, title, rating} = review
  let stars = [
              // {star1=''},
              // {star2=''},
              // {star3=''},
              // {star4=''},
              // {star5=''}
              ]

  console.log(typeof rating, rating);
  for(let i = 0; i < 5; i++){
    console.log(stars[i]);
    if(i <= rating){
      stars[i]='dstars fa fa-star'
    }
    else{
      stars[i]="dstars fa fa-star-o"
    }
  }
  console.log(stars);


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
        <li><i class='${stars[0]}'></i></li>
        <li><i class='${stars[1]}'></i></li>
        <li><i class='${stars[2]}'></i></li>
        <li><i class='${stars[3]}'></i></li>
        <li><i class='${stars[4]}'></i></li>
      </ul>
    </div>
  </div>
  <div>
    <p class='noReview' id='review-${id}'>${content} </p>
    <hr>
  </div>

`
}
