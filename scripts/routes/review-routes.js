window.Reviews = {
  getAllReviews () {
    return axios.get(`${baseReviewsURL}`)
  },
  getReview (id) {
    return axios.get(`${baseReviewsURL}/${id}`)

  },
  destroyReview (id) {
    return axios.delete(`${baseReviewsURL}/${id}`)
  },
  updateReview (id, body) {
    return axios.put(`${baseReviewsURL}/${id}`, body)
  }
}
