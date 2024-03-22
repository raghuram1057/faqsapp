// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isPlus: true}

  onChangeIcon = () => {
    const {isPlus} = this.state
    this.setState({isPlus: !isPlus})
  }

  render() {
    const {faqsDetails} = this.props
    const {isPlus} = this.state
    const {questionText, answerText} = faqsDetails
    const altText = isPlus ? 'plus' : 'minus'
    const updateIcon = isPlus
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

    const showHideclassName = isPlus ? 'hide-container' : ''
    return (
      <li className="faqs-list-item">
        <div className="question-container">
          <h1 className="question-text">{questionText}</h1>
          <button type="button" className="button" onClick={this.onChangeIcon}>
            <img alt={altText} src={updateIcon} className="plus-minus-img" />
          </button>
        </div>
        <div className={showHideclassName}>
          <hr className="hr-line" />
          <p className="answer-text">{answerText}</p>
        </div>
      </li>
    )
  }
}
export default FaqItem
