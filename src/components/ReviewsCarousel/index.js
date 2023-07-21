// Write your code here

import {Component} from 'react'

import './index.css'

const leftArrow = 'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png'
const rightArrow =
  'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  renderReviews = reviews => {
    const {imgUrl, username, companyName, description} = reviews

    return (
      <div className="user-reviews-container">
        <img src={imgUrl} alt={username} className="user-image" />
        <p className="name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex + 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    const reviewsListsIndex = reviewsList[activeIndex]
    return (
      <div className="app-container">
        <h1 className="app-heading">Reviews</h1>
        <div className="review-container">
          <button
            className="button"
            type="button"
            data-testid="leftArrow"
            onClick={this.onClickRightArrow}
          >
            <img src={leftArrow} alt="left arrow" className="left-arrow" />
          </button>
          {this.renderReviews(reviewsListsIndex)}
          <button
            className="button"
            type="button"
            data-testid="rightArrow"
            onClick={this.onClickLeftArrow}
          >
            <img src={rightArrow} alt="right arrow" className="left-arrow" />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
