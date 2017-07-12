import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Flash,{ showFlash, hideFlash } from '../../Flash/';

class Example extends Component{
  constructor(){
    super();
    this.state = {
      message: '',
      flashType: ''
    }
  }

  componentDidMount = () => {
    console.log(this.props)
  }

  renderFlash = () => {
    // check if there is a message to show on every props or state change
    // this is nescesarry due to the way the component detects screen clicks
    if(this.props.flashState.show){
      //show message
      return(
        <Flash />
      )
    }
  }

  render(){
    return(
      <div className='container'>
        <div className="form-group">
          <label>Flash Message Text:</label>
          <input
            className='form-control'
            onChange={ (e)=>this.setState({message: e.target.value}) }
            value={this.state.message}
          />

          <label>Select Style:</label>
          <select
            className='form-control'
            value={this.state.flashType}
            onChange={(e) => this.setState({flashType: e.target.value})}>
            <option value=''>null</option>
            <option value='default'>default</option>
            <option value="danger">danger</option>
            <option value="primary">primary</option>
            <option value="info">info</option>
            <option value="success">success</option>
            <option value="warning">warning</option>
          </select>
        </div>
        <button
          className='btn btn-inverted'
          onClick={ () => this.props.showFlash(this.state.message, this.state.flashType) }>
          Show Flash
        </button>
        <div style={{marginTop: '20px'}}>
          { this.renderFlash() }
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
