// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="faqs-bg-container">
        <div className="faqs-container">
          <h1 className="faqs-heading">FAQs</h1>
          <ul className="faqs-list-container">
            {faqsList.map(eachFaqs => (
              <FaqItem faqsDetails={eachFaqs} key={eachFaqs.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
