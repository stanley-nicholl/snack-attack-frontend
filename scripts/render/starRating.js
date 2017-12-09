
function starRating(snackId){

  let stars = document.getElementsByClassName('stars')
  let rating=0
  let ulRating = document.querySelector('#ulStarReview')
  // console.log('snackId', snackId);
  ulRating.dataset.snackId = snackId
  for (var i = 0; i < stars.length; i++) {
    //add listeners to each star
    stars[i].addEventListener ('click', event => {

      if(event.target.classList =='stars fa fa-star-o'){
        event.target.classList='stars fa fa-star'

        let starIdNum = event.target.id.split('-')[1]
        starIdNum = Number.parseInt(starIdNum)
        rating=starIdNum
        ulRating.dataset.rating=rating

        fillStarsUp(starIdNum)

      }
      else if( event.target.classList =='stars fa fa-star' ){
        event.target.classList='stars fa fa-star'
        let starIdNum = event.target.id.split('-')[1]
        starIdNum = Number.parseInt(starIdNum)
        rating = starIdNum

        ulRating.dataset.rating=rating
        fillStarsDown(starIdNum+1)


      }

    })

  }


}

function fillStarsDown(starIdNum){
  // console.log(starIdNum-1);
  while(starIdNum <= 5){
    let star = document.querySelector(`#star-${starIdNum}`)
    star.classList='stars fa fa-star-o'
    starIdNum++
  }

}

function fillStarsUp(starIdNum){
// console.log(starIdNum);
  while(starIdNum > 0){
    let star = document.querySelector(`#star-${starIdNum}`)
    star.classList='stars fa fa-star'
    starIdNum--
  }
}
