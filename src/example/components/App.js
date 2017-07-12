import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Flash,{ showFlash, hideFlash } from '../../Flash/';

class Example extends Component{
constructor(){
  super();
  this.state = {
    message: '',
    flashType: 'danger'
  }
}

  renderFlash = () => {
    // check if there is a message to show on every props or state change
    // this is nescesarry due to the way the component detects screen clicks
    if(this.props.show){
      //show message
      return(
        <Flash />
      )
    }
  }

  render(){
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            { this.renderFlash() }
            <button onClick={ () => this.props.showFlash(this.state.message, this.state.flashType) }>Show Flash</button>
            <button onClick={ () => this.props.hideFlash() }>Hide Flash</button>
        <div class="row">
          <label>Flash Message Text:</label>
          <input
            onChange={ (e)=>this.setState({message: e.target.value}) }
            value={this.state.message}
          />
        </div>
        <div class="row">
          <label>Select Style:</label>
          <select value={this.state.flashType} onChange={(e) => this.setState({flashType: e.target.value})}>
            <option value="danger">danger</option>
            <option value="primary">primary</option>
            <option value="info">info</option>
            <option value="success">success</option>
            <option value="warning">warning</option>
          </select>
        </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { ...state }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ showFlash, hideFlash }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
