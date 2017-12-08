function starRating(){
  let stars = document.getElementsByClassName('stars')
  let starRating=0
  for (var i = 0; i < stars.length; i++) {
    //add listeners to each star
    stars[i].addEventListener ('click', event => {

      if(event.target.classList =='stars fa fa-star-o'){
        event.target.classList='stars fa fa-star'

        let starIdNum = event.target.id.split('-')[1]
        starIdNum = Number.parseInt(starIdNum)

        fillStarsUp(starIdNum)

      }
      else if( event.target.classList =='stars fa fa-star' ){
        event.target.classList='stars fa fa-star'

        let starIdNum = event.target.id.split('-')[1]
        starIdNum = Number.parseInt(starIdNum)
        starRating = starIdNum
        fillStarsDown(starIdNum+1)

      }
    })
  }
  // console.log(starRating);
  return starRating
}

function fillStarsDown(starIdNum){
  while(starIdNum <= 5){
    let star = document.querySelector(`#star-${starIdNum}`)
    star.classList='stars fa fa-star-o'
    starIdNum++
  }
}

function fillStarsUp(starIdNum){
  while(starIdNum > 0){
    let star = document.querySelector(`#star-${starIdNum}`)
    star.classList='stars fa fa-star'
    starIdNum--
  }
}
