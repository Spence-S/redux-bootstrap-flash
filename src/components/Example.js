import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import * as actions from '../actions';


import Flash from './Flash';

class Example extends Component{
  constructor(props) {
    super(props);
  }

  renderFlash = () => (
    <div>
      <Flash
        hideFlash={() => this.props.hideFlash()}
        show={ this.props.showFlash()}
        message={ this.props.message }
        status={ this.props.status }
      />
    </div>
  )

  render(){
    return(
      <div>
        { this.renderFlash() }
        <button onClick={ () => this.props.showFlash('hello', 'Danger') }>Show Flash</button>
        <button onClick={ () => this.props.hideFlash() }>Hide Flash</button>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { ...state }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ ...actions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
