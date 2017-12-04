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
      })
  Reviews.getAllReviews()
    .then(reviews => {
      reviews = reviews.data.reviews
      console.log(reviews);
      reviewsArray=reviews
      for( let i = 0; i < reviews.length; i++) {
        functionSnackArray.forEach(snack => {
          // reviews[i].id === reviewID
          let reviewP = document.getElementById(`review-${snack.id}`)
          let reviewTitle = document.getElementById(`reviewT-${snack.id}`)
          // let reviewUsername = document.getElementById(`userName${snack.id}`)
          if(snack.id === reviews[i].snack_id){
            reviewP.innerHTML += reviews[i].content
            reviewTitle.innerHTML =reviews[i].title
            // addUserToReview(reviews[i].user_id, `userName-${snack.id}`)
          }
        })
      }
      for( let i = 0; i < reviews.length; i++) {
        functionSnackArray.forEach(snack => {
          let reviewP = document.getElementById(`review-${snack.id}`)
          if (reviewP.innerHTML.length === 1){
            reviewP.innerHTML ='Be the first to review this snack!'
          }
        })
      }
    })




  }

function addUserToReview(id, snackId){
  console.log(snackId);
  let reviewElement = document.getElementById(snackId)
  console.log(reviewElement);
  Users.getUser(id)
    .then( user => {

      // console.log(user.data.users.username);
      // reviewElement.innerHTML=`${user.data.users.username}`
    })
}

loadHomePage()
