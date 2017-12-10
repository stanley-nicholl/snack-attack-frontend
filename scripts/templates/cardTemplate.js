function cardTemplate(id, name, image, description, rating){
  // console.log(rating);


  let stars = []
  for(let i = 0; i < 5; i++){

    if(i+1 <= rating){
      stars[i]='dstars fa fa-star'
    }
    else{
      stars[i]="dstars fa fa-star-o"
    }
  }

  return  `
      <div class="card" id='snack-${id}'>

        <!--Card image-->
        <div class="view overlay hm-white-slight">
          <img src="${image}" class="img-fluid" alt="${name}">
          <a href="#snackCard-${id}" data-target='#snackModal' data-toggle='modal' class='modalBtn' >
            <div id='snack-${id}' class="mask"></div>
          </a>
        </div>
        <!--/.Card image-->

        <!--Button-->
      <a href="#snackCard-${id}" data-toggle='modal' data-target='#snackModal' class="btn-floating modalBtn btn-action blue-gradient"><i id='snack-${id}' class="fa fa-chevron-right"></i></a>
        <!--Card content-->
        <div class="card-body">
            <!--Title-->
          <h4 class="card-title">${name}</h4>
          <hr>
          <!--Text-->
          <p class="card-text">${description}</p>
        </div>
        <!--/.Card content-->

        <!-- Card footer -->
        <div class="card-data blue-gradient">
          <ul>
            <li><a href="#"><small>rating</small></a></li>
            <li><a href="#"><i class='${stars[0]}'></i></a></li>
            <li><a href="#"><i class='${stars[1]}'></i></a></li>
            <li><a href="#"><i class='${stars[2]}'></i></a></li>
            <li><a href="#"><i class='${stars[3]}'></i></a></li>
            <li><a href="#"><i class='${stars[4]}'></i></a></li>
          </ul>
        </div>
        <!-- Card footer -->
      </div>`
  }
