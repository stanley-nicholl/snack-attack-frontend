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
  },

  addSnack (body) {
    AddTokenToHeader()
    return axios.post(`${baseSnacksURL}`, body)

  }
}


window.AddTokenToHeader = function () {
    let token = localStorage.getItem('snackToken')
    axios.defaults.headers.common['auth'] = token
}
