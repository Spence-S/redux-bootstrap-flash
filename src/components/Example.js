import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import * as actions from '../actions';


import Flash from './Flash';

class Example extends Component{
  constructor(props) {
    super(props);
  }

  renderFlash = () => {
    // check if there is a message to show
    if(this.props.show){
      //show message
      return(
        <Flash
          offClick={() => this.props.hideFlash()}
          show={ this.props.showFlash }
          message={ this.props.message }
          style={ this.props.status }
        />
      )
    }
  }

  render(){
    return(
      <div>
        { this.renderFlash() }
        <button onClick={ () => this.props.showFlash('hello', 'danger') }>Show Flash</button>
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
