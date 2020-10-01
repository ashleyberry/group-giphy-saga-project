import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Search extends Component {
  state = {
    giphyData: [],
  };

  componentDidMount = () => {
    axios({
      method: 'GET',
      url: '/api/search',
    })
      .then((res) => {
        console.log('res is', res);

        this.setState({
          giphyData: res.data.data,
        });
      })
      .catch((err) => {
        console.log('error on client side');

        console.error(err);
      });
  };

  render() {
    return (
      <div>
        <h1>We're in Search!</h1>

        <input required type='text' placeholder='Search for GIF'></input>
        <button onClick={this.getNewGif}>Submit</button>
        <br></br>
        {this.state.giphyData.map((item) => (
          <img src={item.images.fixed_width_small.url} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
});
export default connect(mapStateToProps)(Search);
