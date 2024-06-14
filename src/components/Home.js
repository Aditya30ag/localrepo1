import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className={`d-flex flex-row mb-3navbar-expand-lg bg-${this.props.mode} navbar-${this.props.mode}`}>
          <div className="p-2"><Link to="/business"><button className="btn btn-outline-info" type="button">Business</button></Link></div>
          <div className="p-2"><Link to="/entertainment"><button className="btn btn-outline-info" type="button">Entertainment</button></Link></div>
          <div className="p-2"><Link to="/general"><button className="btn btn-outline-info" type="button">General</button></Link></div>
          <div className="p-2"><Link to="/health"><button className="btn btn-outline-info" type="button">Health</button></Link></div>
          <div className="p-2"><Link to="/science"><button className="btn btn-outline-info" type="button">Science</button></Link></div>
          <div className="p-2"><Link to="/sports"><button className="btn btn-outline-info" type="button">Sports</button></Link></div>
          <div className="p-2"><Link to="/technology"><button className="btn btn-outline-info" type="button">Technology</button></Link></div>
        </div>
    )
  }
}
