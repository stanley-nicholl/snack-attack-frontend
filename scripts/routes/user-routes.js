window.Users = {
  getAllUsers () {
    AddTokenToHeader()
    return axios.get(`${baseUserURL}`)
  },
  getUser (id) {
    AddTokenToHeader()
    return axios.get(`${baseUserURL}/${id}`)

  },
  destroyUser (id) {
    AddTokenToHeader()
    return axios.delete(`${baseUserURL}/${id}`)
  },
  updateUser (id, body) {
    AddTokenToHeader()
    return axios.patch(`${baseUserURL}/${id}`, body)
  },

  createUser(body) {
    return axios.post(`${baseUserURL}`, body)
  }
}
