window.Reviews = {
  getAllReviews () {
    AddTokenToHeader()
    return axios.get(`${baseReviewsURL}`)
  },
  getReview (id) {
    AddTokenToHeader()
    return axios.get(`${baseReviewsURL}/${id}`)

  },
  destroyReview (id) {
    AddTokenToHeader()
    return axios.delete(`${baseReviewsURL}/${id}`)
  },
  updateReview (id, body) {
    AddTokenToHeader()
    return axios.put(`${baseReviewsURL}/${id}`, body)
  }
}
