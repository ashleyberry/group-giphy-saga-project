import React, { Component } from 'react';
import axios from 'axios';
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
              <br/>
              <label for="category">Choose a category:</label> 
              <select name="category">
                <option value="funny">funny</option>
                <option value="cohort">cohort</option>
                <option value="cartoon">cartoon</option>
                <option value="nsfw">nsfw</option>
                <option value="meme">meme</option>
              </select> 
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