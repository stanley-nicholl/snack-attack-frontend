window.User = {
  getAllSnacks(){
    console.log('in user-routes FE');
    return axios.get(`${baseSnacksURL}`)

  }
}
