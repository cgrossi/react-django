import React, { Component } from 'react';
import axios from 'axios';

class SumNums extends Component {
  state = {
    x: null,
    y: null,
    sum: null
  }

  // Update state on input change
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // Make request to backend for processing
  handleSubmit = async (e) => {
    e.preventDefault()

    let response = await axios({
      method: 'post',
      url: 'https://sleepy-temple-91736.herokuapp.com/item/example',
      data: {
        x: +this.state.x,
        y: +this.state.y
      }
    })

    this.setState({ sum: response.data.sum })
  }

  render() {
    return (
      <div>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <input 
            type="number"
            name="x" 
            defaultValue={this.state.x} 
            placeholder="First Number..." 
            />
          <input 
            type="number" 
            name="y"
            defaultValue={this.state.y} 
            placeholder="Second Number..." 
            />
          <button type="submit">Get Sum!</button>
        </form>
        <h3>The sum is: {this.state.sum}</h3>
      </div>
    )
  }
}

export default SumNums