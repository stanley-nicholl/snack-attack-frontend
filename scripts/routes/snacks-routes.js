window.Snacks = {
  getAllSnacks () {
    AddTokenToHeader()
    return axios.get(`${baseSnacksURL}`)
  },
  getSnack (id) {
    AddTokenToHeader()
    return axios.get(`${baseSnacksURL}/${id}`)

  },
  destroySnack (id) {
    AddTokenToHeader()
    return axios.delete(`${baseSnacksURL}/${id}`)
  },
  updateSnack (id, body) {
    AddTokenToHeader()
    return axios.put(`${baseSnacksURL}/${id}`, body)
  },
  getAllSnackReviews (id) {
    AddTokenToHeader()
    return axios.get(`${baseSnacksURL}/${id}/reviews`)
  }
}


window.AddTokenToHeader = function () {
    let token = localStorage.getItem('auth')
    axios.defaults.headers.common['auth'] = token
}
