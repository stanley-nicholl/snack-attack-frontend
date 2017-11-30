//FOR ADMIN FOR ADMIN FOR ADMIN

const localhostUserURL = 'http://localhost:3000/api/users'
const herokuUserURL = 'https://snack-attack.herokuapp.com/api/users'
const baseUserURL = window.location.href.includes('127.0.0.1') ? localhostUserURL : herokuUserURL
