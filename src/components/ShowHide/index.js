// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  showFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  showLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="cards-container">
          <div className="eachCard">
            <button type="button" onClick={this.showFirstName}>
              Show/Hide Firstname
            </button>
            {firstName ? <p className="show-hide-card">Joe</p> : null}
          </div>
          <div className="eachCard">
            <button type="button" onClick={this.showLastName}>
              Show/Hide Lastname
            </button>
            {lastName ? <p className="show-hide-card">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
