import React, { Component } from 'react';
import {Link, Navigate} from "react-router-dom";


class Gallery extends Component {
  constructor(props){
    super(props)
    const token = localStorage.getItem("token")

    let loggedIn = true
    if(token == null){
         loggedIn = false
    }

    this.state = {
      loggedIn
    }
  }

  render() {
    if(this.state.loggedIn === false){
      return <Navigate to="/" />
    }
    return (
      <div>
      hello gallery
      <Link to="/logout">Logout</Link>
  </div>
    );
  }
}

export default Gallery;
