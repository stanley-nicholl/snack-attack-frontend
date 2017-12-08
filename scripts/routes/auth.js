window.Auth = {
  authorizeRequest () {
    AddTokenToHeader()
    return axios.get(`${baseAuthURL}`)
  },

  login (body) {
    return axios.post(`${baseAuthURL}/login`, body).then(response => {
      if (response.data.authorization) {
        localStorage.setItem('snackToken', response.data.authorization)
      }
    })
  },

   signup (body) {
      return axios.post(`${baseAuthURL}/signup`, body).then(response => {
        // Auth.login(body)
      })
    }
}
