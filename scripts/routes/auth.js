Window.Auth = {
  authorizeRequest () {
    AddTokenToHeader()
    return axios.get(`${baseAuthURL}`)
  }
}
