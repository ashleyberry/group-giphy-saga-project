import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';


class Favorites extends Component {

 componentDidMount() {
    this.getFavorites();
  }

  getFavorites() {
    this.props.dispatch({
      type: 'FETCH_FAVORITE',
    });
  }

  onButtonCLick( event ) {
    console.log('in onButtonClick:', event.target.value )
  }

  handleSubmit(){
    console.log(' in handleSubmit' )
  }

  render() {
    console.log('redux state is', this.props.reduxState);
    
    return (
      <div>
        <ul>{this.props.reduxState.map((item) => {
          return (
          <li>
            <img
              height='200'
              width='200'
              src={item.url}
              />
              <br />

             
              <label for="category">Choose a category:</label> 
              <select id="category" name="category">
                <option value="1">funny</option>
                <option value="2">cohort</option>
                <option value="3">cartoon</option>
                <option value="4">nsfw</option>
                <option value="5">meme</option>
              </select> 
              <input type="submit" id="category"></input>
          
          </li>
          )
        })}
        </ul>
        <h1>We're in Favorites!</h1>
      </div>
    );
  }      
}

const mapStateToProps = (reduxState) => ({
  reduxState: reduxState.gifReducer
});
export default connect(mapStateToProps)(Favorites);