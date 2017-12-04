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
          let newModalDiv = document.createElement('div')
          newDiv.className = 'col-xl-4 col-md-6 col-sm-7 mt-5'
          newDiv.id = 'snackCardId-' + `${snack[i].id}`
          cardContainer.appendChild(newDiv)
          newDiv.innerHTML = cardTemplate(snack[i].id, snack[i].name, snack[i].img, snack[i].description, snack[i].rating)
          cardContainer.appendChild(newModalDiv)
          newModalDiv.innerHTML = snackDetailsTemplate(snack[i].id, snack[i].name, snack[i].img, snack[i].description)
          let snackInfo={}

          snackInfo.id= snack[i].id
          snackInfo.name=snack[i].name
          snackInfo.img=snack[i].img
          snackInfo.description= snack[i].description
          snackInfo.rating= snack[i].rating

        }
        return Reviews.getAllReviews()
      })
  // Reviews.getAllReviews()
    .then(reviews => {
      reviews = reviews.data.reviews

      // reviewsArray=reviews

      for( let i = 0; i < reviews.length; i++) {
      // console.log(reviews[i].id);
      let reviewContainer =  document.getElementById(`reviewContainer-${reviews[i].snack_id}`)
        functionSnackArray.forEach(snack => {
          //
          // let reviewP = document.getElementById(`review-${snack.id}`)
          // let reviewTitle = document.getElementById(`reviewT-${snack.id}`)

          if(snack.id === reviews[i].snack_id){
            let newDiv = document.createElement('div')

            console.log(reviews[i].user_id);
            newDiv.innerHTML = snackReviewsTemplate(reviews[i].id, reviews[i].content, reviews[i].title)
            reviewContainer.appendChild(newDiv)
            addUserToReview(reviews[i].user_id, reviews[i].id)
          }
        })
      }
      // for( let i = 0; i < reviews.length; i++) {
      //   functionSnackArray.forEach(snack => {
      //     let reviewP = document.getElementById(`review-${snack.id}`)
      //     if (reviewP.innerHTML.length === 1){
      //       reviewP.innerHTML ='Be the first to review this snack!'
      //     }
      //   })
      // }
    })


  }

function addUserToReview(userId, reviewId){
  console.log(userId, reviewId);
  // let reviewElement = document.getElementById(`userName-${snackId}`)
  // console.log(reviewElement);
  Users.getUser(userId)
    .then( user => {
      // console.log(user.data.users.username);
      let reviewElement = document.getElementById(`userName-${reviewId}`)
      reviewElement.innerHTML=`${user.data.users.username}`
    })
}

loadHomePage()
