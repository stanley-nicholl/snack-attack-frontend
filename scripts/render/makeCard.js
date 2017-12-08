const cardContainer = document.querySelector('#cardContainer')

function showReviewModal(){

  let newDiv = document.createElement('div')

}
const makeReview = (event) => {
  let reviewObj={}
  let newReviewTitle = document.querySelector('#newReviewTitle').value
  let newReviewContent = document.querySelector('#newReviewContent').value
  let {title=newReviewTitle, content=newReviewContent} = reviewObj

  starRating()
  // needs  snack_id, user id, rating, title, content
  Reviews.makeReview(newReviewTitle, newReviewContent).
  then(el => {
    console.log(el);
  })
  .catch(err => {
    console.log(err);
  })

}



function loadHomePage(){
//get all snacks then format them into an object with {images, name, description, rating}
  let functionSnackArray=[]
  let reviewsArray=[]
  // let storage = localStorage.getItem('Auth')

  Snacks.getAllSnacks()
    .then(snacks => {
      let snackArray = snacks.data.snacks
      functionSnackArray=snackArray
      let snackArr = snackArray.map(snack => {
        let {id, img, name, description} = snack
        return {id, img, name, description}
      })

      return snackArr
      })
      .then (snack => {

        for(let i in snack){
          let newDiv = document.createElement('div')
          newDiv.className = 'col-xl-4 col-md-6 col-sm-7 mt-5'
          cardContainer.appendChild(newDiv)
          newDiv.innerHTML = cardTemplate(snack[i].id, snack[i].name, snack[i].img, snack[i].description, snack[i].rating)
        }
        let modalBtn = document.querySelectorAll(`.modalBtn`)

        for (let i = 0; i < modalBtn.length; i++){
            //add event listeners to snack card buttons and images
            modalBtn[i].addEventListener('click', event => {

              let id = event.target.id.split('-')[1]

              // get snack modal info to populate snack view
              Snacks.getSnack(id)
              .then(snack => {
                // grab title pic and description for one snack
                let title = document.querySelector('#snackName')
                title.innerHTML = snack.data.snacks.name

                let pic = document.querySelector('#snackImage')
                pic.src  = snack.data.snacks.img

                let description = document.querySelector('#snackDescription')
                description.innerHTML = snack.data.snacks.description


                let newSnackBtn = newButton()
                newSnackBtn.innerHTML =newButton()

                let reviewModalBtnContainer = document.querySelector('#reviewModalBtnContainer')
                reviewModalBtnContainer.innerHTML=newSnackBtn

                let submitReviewBtn = document.querySelector('#submitReviewBtn')
                let snackBtn = document.querySelector('#reviewSnackBtn')

                if(snack.data.userType === 'guest'){

                  snackBtn.innerHTML = 'Login to review\<br>\ this snack'
                  starRating()
                  submitReviewBtn.removeEventListener('click', makeReview)
                  submitReviewBtn.addEventListener('click', makeReview)

                  }
                 else if(snack.data.userType === 'user' || snack.data.userType === 'admin') {
                  snackBtn.innerHTML = 'Review this snack'
                  // Reviews.updateReview(reviewId, body)
                  snackBtn.addEventListener('click', event => {
                    //review snack
                  })
                }

                return snack.data.snacks.id
              })

              .then(id => {
                // get all reviews for one snack
                Snacks.getAllSnackReviews(id)
                .then( reviews => {
                  let reviewContainer = document.querySelector('#reviewContainer')
                  reviewContainer.innerHTML=''

                  //for each review populate title, content and id
                  reviews.data.reviews.forEach( el => {
                    let review = snackReviewsTemplate(el)
                    reviewContainer.innerHTML+=review
                  })

                  if(reviewContainer.innerHTML=== ''){

                    reviewContainer.innerHTML = "Feelin' mean and green? Be the first to review this snack!"
                  }
                  return reviews
                })
                .then(reviews => {
                  reviews.data.reviews.forEach(el => {
                    let userNamePH = document.querySelector(`#userName-${el.id}`)

                    Users.getUser(el.user_id)
                    .then(user => {
                      userNamePH.innerHTML=user.data.users.username
                    })

                  })

                })
              })
          })
        }
      })

  }

function addUserToReview(userId, reviewId){
  Users.getUser(userId)
    .then( user => {
      let reviewElement = document.getElementById(`userName-${reviewId}`)
      reviewElement.innerHTML=`${user.data.users.username}`
    })
}

loadHomePage()
