import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className="text" style={{marginLeft:'620px'}}>
        <img src={loading} alt='loading'/>
      </div>
    )
  }
}
