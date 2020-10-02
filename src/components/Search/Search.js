import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Search extends Component {
  state = {
    giphyData: [],
    newGif: {},
  };

  componentDidMount = () => {
    this.getGif();
  };
  getGif = () => {
    console.log('want to send', this.state.newGif.newGif);

    axios({
      method: 'GET',
      url: '/api/search',
      params: {
        search: this.state.newGif.newGif,
      },
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
  handleChangeFor = (event) => {
    console.log('in handleChangeFor:', event.target.value);
    this.setState({
      newGif: {
        ...this.state.newGif,
        newGif: event.target.value,
      },
    });
    console.log('this.state', this.state);
  };

  render() {
    return (
      <div>
        <h1>We're in Search!</h1>
        <input
          required
          type='text'
          placeholder='Search for GIF'
          onChange={(event) => this.handleChangeFor(event)}
        ></input>
        <button onClick={this.getGif}>Submit</button>
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
