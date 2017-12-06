window.Snacks = {
  getAllSnacks () {
    return axios.get(`${baseSnacksURL}`)
  },
  getSnack (id) {
    return axios.get(`${baseSnacksURL}/${id}`)

  },
  destroySnack (id) {
    return axios.delete(`${baseSnacksURL}/${id}`)
  },
  updateSnack (id, body) {
    return axios.put(`${baseSnacksURL}/${id}`, body)
  },
  getAllSnackReviews (id) {
    return axios.get(`${baseSnacksURL}/${id}/reviews`)
  }
}
