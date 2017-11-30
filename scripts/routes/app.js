//FOR ADMIN FOR ADMIN FOR ADMIN

const localhostUserURL = 'http://localhost:3000/api/admin/users'
const herokuUserURL = 'https://eatseattle.herokuapp.com/api/admin/users'
const baseUserURL = window.location.href.includes('127.0.0.1') ? localhostUserURL : herokuUserURL
