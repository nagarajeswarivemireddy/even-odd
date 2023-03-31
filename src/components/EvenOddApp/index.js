// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: Math.ceil(Math.random(0, 100))}

  Increment = () => {
    this.setState(prevState => ({count: prevState.count}))
  }

  render() {
    const {count} = this.state
    let paragraphText
    if (count % 2 === 0) {
      paragraphText = 'Count is Even'
    } else {
      paragraphText = 'Count is Odd'
    }

    return (
      <div className="bg-container">
        <div className="countContainer">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">{paragraphText}</p>
          <button className="button" type="button" onClick={this.Increment}>
            Increment
          </button>
          <p1 className="lastMsg">
            *Increse By Random Number Between 0 and 100
          </p1>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
