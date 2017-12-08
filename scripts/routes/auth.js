window.Auth = {

  login (body) {
    AddTokenToHeader()
    return axios.post(`${baseAuthURL}/login`, body).then(response => {
      if (response.data.authorization) {
        localStorage.setItem('snackToken', response.data.authorization)
      }
    })
  },

   signup (body) {
     AddTokenToHeader()
      return axios.post(`${baseAuthURL}/signup`, body).then(response => {
      })
    },

    current(){
      AddTokenToHeader()
      return axios.get(`${baseAuthURL}/current`)
    }
}


window.AddTokenToHeader = function () {
    let token = localStorage.getItem('snackToken')
    axios.defaults.headers.common['auth'] = token
}
