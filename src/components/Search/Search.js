import React, { Component } from 'react';


class Search extends Component {

  state = {
    newGif: ''
  }

  componentDidMount = () => {
    this.getGif()
  }

  getGif = () => {
    console.log( 'in getGIF' )
    // this.props.dispatch({
    //   type: 'FETCH_GIF' ???
    // })
  }

  handleChangeFor = ( event ) => {
    console.log( 'in handleChangeFor:', event.target.value );
    this.setState({
      newGif: {
        ...this.state.newGif,
        newGif: event.target.value
      }
    });
}

  render() {
    return (
      <div>
        <h1>We're in Search!</h1>
        <input required type= "text" placeholder="Search for GIF" onChange={( event ) => this.handleChangeFor( event )}></input>
        <button onClick={ this.getGif }>Submit</button>
      </div>
    );
  }
  
}

export default Search;