const cardContainer = document.querySelector('#cardContainer')
let currentUser = {}
let thisSnackId

const makeReview = (event) => {

  let reviewObj={}
  let newReviewTitle = document.querySelector('#newReviewTitle').value
  let newReviewContent = document.querySelector('#newReviewContent').value

  starRating(thisSnackId)
  let ulRating = document.querySelector('#ulStarReview')
  let rating = ulRating.dataset.rating
  let snack_id = ulRating.dataset.snackId

  reviewObj.title = newReviewTitle
  reviewObj.content = newReviewContent
  reviewObj.rating = rating
  reviewObj.snack_id = snack_id
  reviewObj.user_id = currentUser.id

  // needs  snack_id, user id, rating, title, content
  Reviews.makeReview(reviewObj).then(el => {
    console.log(el);

  })
  .catch(err => {
  console.log(err);
  })
  //reset form
  let resetTitle = document.querySelector('#newReviewTitle')
    resetTitle.value=''
  let resetContent = document.querySelector('#newReviewContent')
  resetContent.value = ''
  let resetRating = document.querySelector('#newReviewTitle').value
  //
  // newReviewContent=''
  rating=''
  getSnackModal(snack_id)

}



function loadHomePage(){
  Auth.current()
  .then(users => {
    // console.log(currentUser);
    currentUser.type = users.data.currentUser.userType
    currentUser.first_name = users.data.currentUser.first_name
    currentUser.id = users.data.currentUser.id
    currentUser.username = users.data.currentUser.username
    document.getElementById('user').textContent = currentUser.first_name[0].toUpperCase() +currentUser.first_name.slice(1)
    console.log(currentUser);
    if(user.type !== 'admin') document.getElementById('admin').textContent = ''
  })

//get all snacks then format them into an object with {images, name, description, rating}
  let functionSnackArray=[]
  let reviewsArray=[]
  // let storage = localStorage.getItem('Auth')
  loadLoginModal()
  Snacks.getAllSnacks()
    .then(snacks => {

      let snackArray = snacks.data.snacks
      functionSnackArray=snackArray
      let snackArr = snackArray.map(snack => {
        let {id, img, name, description} = snack
        return {id, img, name, description}
      })
      // return snackArray?
      return snacks
      })
      .then (snackObj => {

        let snack = snackObj.data.snacks
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
              getSnackModal(id)

          })
        }
      })

  }

  function loadLoginModal(){
    const snackToken = localStorage.getItem('snackToken')
    if(!snackToken){
      let viewportWidth = $(window).width()
      var loginModal = document.getElementById('login-modal');

      viewportWidth > 800 ? loginModal.innerHTML = loadLargeLoginModal() : loginModal.innerHTML = loadSmallLoginModal()


      loginModal.style.display = "block"
      document.getElementById('close').addEventListener('click', (event) => {
        loginModal.style.display = "none";
      })
      window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
      }

      document.getElementById('join-button').addEventListener('click', (event) => {
        const body = {}
        body.first_name = document.getElementById('create-first_name').value
        body.last_name = document.getElementById('create-last_name').value
        body.username = document.getElementById('create-username').value
        body.password = document.getElementById('create-password').value
        body.email = document.getElementById('create-email').value
        // AXIOS CALL TO CREATE USER ROUTE
        Auth.signup(body)
        loginModal.style.display = "none";
      })

      document.getElementById('signin-button').addEventListener('click', (event) => {

        const body ={}
        body.email = document.getElementById('login-email').value
        body.password = document.getElementById('login-password').value
        // AXIOS CALL TO LOGIN AUTHENTICATION ROUTE
        Auth.login(body)
        loginModal.style.display = "none";
      })
    }else{
      return null
    }

  }
function getSnackModal(snackId){

  Snacks.getSnack(snackId)
  .then(snack => {

    let rating = snack.data.snacks.rating

    for(let i = 1; i <= 5; i++){

      if(rating > 5){
        let star = document.querySelector(`#sId-${i}`)
        star.classList.add('dstars', 'fa', 'fa-star')
      }
      else if( i <= rating){
        let star = document.querySelector(`#sId-${i}`)
        star.classList.add('dstars', 'fa', 'fa-star')
      }
      else{
        let star = document.querySelector(`#sId-${i}`)
        star.classList.add('dstars', 'fa', 'fa-star-o')
      }
    }
    // grab title, pic, and description for one snack
    let title = document.querySelector('#snackName')
    title.innerHTML = snack.data.snacks.name
    let pic = document.querySelector('#snackImage')
    pic.src  = snack.data.snacks.img
    let description = document.querySelector('#snackDescription')
    description.innerHTML = snack.data.snacks.description

    //create review snack button for one snack view
    let newSnackBtn = newButton()
    newSnackBtn.innerHTML =newButton()

    //add button to review modal
    let reviewModalBtnContainer = document.querySelector('#reviewModalBtnContainer')
    reviewModalBtnContainer.innerHTML=newSnackBtn

    let submitReviewBtn = document.querySelector('#submitReviewBtn')
      // submitReviewBtn.clasList.add("data-dismiss='modal'")
    let snackBtn = document.querySelector('#reviewSnackBtn')

    //adds unique snack title to the make a review modal
    let makeNewReviewTitle = document.querySelector('#makeNewReviewTitle')
    makeNewReviewTitle.innerHTML ='Write a new review for '+ snack.data.snacks.name

    //determine user type and display appropriate button for either make a review or signup
    if(snack.data.userType === 'guest'){

      snackBtn.innerHTML = 'Login to review\<br>\ this snack'
      // Reviews.updateReview(reviewId, body)
      snackBtn.addEventListener('click', event => {
        loadLoginModal()
      })

      }
     else if(snack.data.userType === 'user' || snack.data.userType === 'admin') {
      snackBtn.innerHTML = 'Review this snack'
      // console.log(snack.data.snacks.id);
      thisSnackId=snack.data.snacks.id
      starRating(snack.data.snacks.id)
      submitReviewBtn.removeEventListener('click', makeReview)
      submitReviewBtn.addEventListener('click', makeReview)
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
        let rating = el.rating
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
}


loadHomePage()
