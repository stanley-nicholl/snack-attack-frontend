let cardContainer = document.querySelector('#cardContainer')

function loadHomePage(){
//get all snacks then format them into an object with {images, name, description, rating}
  User.getAllSnacks()
    .then(snacks => {
      let snackArray = snacks.data.snacks

      let snackArr = snackArray.map(snack => {
        let {id, img, name, description} = snack
        return {id, img, name, description}
      })

      return snackArr
      })
      .then (snack => {

        for(let i in snack){
          // console.log(snack[i]);
          let newDiv = document.createElement('div')
          newDiv.className = 'col-xl-4 col-md-6 col-sm-7 mt-5'
          newDiv.id='snackCardId' + `${snack[i].id}`
          cardContainer.appendChild(newDiv)
        newDiv.innerHTML=cardTemplate(snack[i].id, snack[i].name, snack[i].img, snack[i].description)
        }
      })
  }

loadHomePage()
function snackModal(){

}
