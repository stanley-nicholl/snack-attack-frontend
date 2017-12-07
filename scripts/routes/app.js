//FOR ADMIN FOR ADMIN FOR ADMIN

const localhostUserURL = 'http://localhost:3000/api/users'
const herokuUserURL = 'https://snack-attack.herokuapp.com/api/users'
const baseUserURL = window.location.href.includes('127.0.0.1') ? localhostUserURL : herokuUserURL

const localhostSnacksURL = 'http://localhost:3000/api/snacks'
const herokuSnacksURL = 'https://snack-attack.herokuapp.com/api/snacks'
const baseSnacksURL = window.location.href.includes('127.0.0.1') ? localhostSnacksURL : herokuSnacksURL

const localhostReviewsURL = 'http://localhost:3000/api/reviews'
const herokuReviewsURL = 'https://snack-attack.herokuapp.com/api/reviews'
const baseReviewsURL = window.location.href.includes('127.0.0.1') ? localhostReviewsURL : herokuReviewsURL

const localhostAuthURL = 'http://localhost:3000/auth'
const herokuAuthURL = 'https://snack-attack.herokuapp.com/auth'
const baseAuthURL = window.location.href.includes('127.0.0.1') ? localhostAuthURL : herokuAuthURL
