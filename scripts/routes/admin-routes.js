window.Admin = {
  getAllUsers () {
    return axios.get(`${baseUserURL}`)
  },
  getUser (id) {
    return axios.get(`${baseUserURL}/${id}`)

  },
  destroyUser (id) {
    return axios.delete(`${baseUserURL}/${id}`)
  },
  updateUser (id, body) {
    return axios.put(`${baseUserURL}/${id}`, body)
  }
}
