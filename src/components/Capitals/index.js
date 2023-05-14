import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]
class Capitals extends Component {
  state = {
    name: countryAndCapitalsList[0].id,
  }

  changeState = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name} = this.state
    const findCapital = countryAndCapitalsList.find(each => {
      if (each.id === name) {
        return true
      }
      return false
    })
    console.log(findCapital)
    return (
      <div className="bg-color">
        <div className="sub-div">
          <h1 className="heading">Countries and Capitals</h1>
          <select
            value={name}
            onChange={this.changeState}
            id="country"
            className="for-select"
          >
            {countryAndCapitalsList.map(each => (
              <option value={each.id} key={each.id}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="country" className="label">
            is capital of which country?
          </label>
          <h1 className="paragraph">{findCapital.country}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
