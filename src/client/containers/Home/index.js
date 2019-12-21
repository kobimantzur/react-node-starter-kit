import "./index.scss";

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { postRequest } from '../../reducers/Home/actions';

class Home extends Component {

  render() {
    return (
      <div>
        Home
        <div>
        <button onClick={() => this.props.postRequest()}>
        Navigate!</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({}) => {
  return {}

}
const mapDispatchToProps = {
  postRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
