let cardContainer = document.querySelector('#cardContainer')

function loadHomePage(){
//get all snacks then format them into an object with {images, name, description, rating}
  let functionSnackArray=[]
  let reviewsArray=[]

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
            //add event listeners to snack card buttons
            modalBtn[i].addEventListener('click', event => {
              let snack = event.target.id.split('-')[1]

              // get snack modal info to populate snack view
              Snacks.getSnack(snack)
              .then(snack => {
                let title = document.querySelector('#snackName')
                title.innerHTML = snack.data.snacks.name
                let pic = document.querySelector('#snackImage')
                pic.src  = snack.data.snacks.img
                let description = document.querySelector('#snackDescription')
                description.innerHTML = snack.data.snacks.description
                return snack.data.snacks.id
              })

              .then(id => {
                // get all reviews for one snack
                Snacks.getAllSnackReviews(id)
                .then( reviews => {
                  let reviewContainer = document.querySelector('#reviewContainer')
                  reviewContainer.innerHTML=''

                  reviews.data.reviews.forEach( el => {
                    let review = snackReviewsTemplate(el)
                    reviewContainer.innerHTML+=review
                  })

                  if(reviewContainer.innerHTML=== ''){
                    reviewContainer.innerHTML = 'Feelin mean and green? Be the first to review this snack!'
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
                  // console.log(reviews.data.reviews.id);
                })
              })

          })
        }


      // modalBtn.addEventListener('click', event => {
      //     console.log('hey fucker');
      // })

return  Reviews.getAllReviews()
      })

     // Reviews.getAllReviews()
    .then(reviews => {
      reviews = reviews.data.reviews
      // console.log(reviews);

// ***********  Rewrite to complete modal one at click time  ****************

      // for( let i = 0; i < reviews.length; i++) {
      // let reviewContainer =  document.getElementById(`reviewContainer-${reviews[i].snack_id}`)

      functionSnackArray.forEach(snack => {
          let newDiv = document.createElement('div')
          const reviewsForSnack = []
          if(snack.id === snack.id){
            // newDiv.innerHTML = snackReviewsTemplate(reviews[i].id, reviews[i].content, reviews[i].title)
            // reviewContainer.appendChild(newDiv)
            // addUserToReview(reviews[i].user_id, reviews[i].id)
            // reviewsForSnack.push(reviews[i])
          }
          if(reviewsForSnack.length === 0){

          }else{
            let reviewCode = ``
            reviewsForSnack.forEach(review => {
              reviewCode += snackReviewsTemplate(review)
              document.getElementById(`reviewContainer-${snack.id}`).innerHTML = reviewCode
            })
          }


        })

      // }


      functionSnackArray.forEach(snack => {
        // console.log(snack);
          for( let i = 0; i < reviews.length; i++) {

          // if(snack[i].content === null){
          //   console.log('heyo');
          // }
          // let reviewP = document.querySelectorAll('p.noReview')
          // console.log(reviewP);
          // if (reviewP === null){
          //   reviewP.innerHTML ='Be the first to review this snack!'
          // }
        }
      })
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
