import React, { Component } from 'react';
import {connect} from 'react-redux';

class Search extends Component {

  componentDidMount = () => {
    this.getGif()
  }

  getGif = () => {
    console.log( 'in getGIF' )
    this.props.dispatch({
      type: 'FETCH_GIF',
      payload: 'GIF',
    })
  }

  render() {
    return (
      <div>
        <h1>We're in Search!</h1>
        <input required type= "text" placeholder="Search for GIF"></input>
        <button onClick={ this.getGif }>Submit</button>
      </div>
    );
  }
}

export default connect()(Search);