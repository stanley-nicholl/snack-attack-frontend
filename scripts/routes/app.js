//FOR ADMIN FOR ADMIN FOR ADMIN

const localhostUserURL = 'http://localhost:3000/api/users'
const herokuUserURL = 'https://hangrysnacks.herokuapp.com/api/users'
// const baseUserURL = window.location.href.includes('127.0.0.1') ? localhostUserURL : herokuUserURL
const baseUserURL = herokuUserURL
const localhostSnacksURL = 'http://localhost:3000/api/snacks'
const herokuSnacksURL = 'https://hangrysnacks.herokuapp.com/api/snacks'
// const baseSnacksURL = window.location.href.includes('127.0.0.1') ? localhostSnacksURL : herokuSnacksURL
const baseSnacksURL = herokuSnacksURL
const localhostReviewsURL = 'http://localhost:3000/api/reviews'
const herokuReviewsURL = 'https://hangrysnacks.herokuapp.com/api/reviews'
// const baseReviewsURL = window.location.href.includes('127.0.0.1') ? localhostReviewsURL : herokuReviewsURL
const baseReviewsURL = herokuReviewsURL

const localhostAuthURL = 'http://localhost:3000/auth'
const herokuAuthURL = 'https://hangrysnacks.herokuapp.com/auth'
// const baseAuthURL = window.location.href.includes('127.0.0.1') ? localhostAuthURL : herokuAuthURL
const baseAuthURL = herokuAuthURL
