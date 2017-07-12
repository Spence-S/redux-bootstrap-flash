import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {showFlash, hideFlash} from './Flash_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Flash extends Component{
  componentDidMount = () => {
    //provides event listener for outside component click
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount = () => {
    //removes the event listener on unmount
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleOutsideClick = (e) => {
    if(!ReactDOM.findDOMNode(this).contains(e.target)){
      this.props.hideFlash();
    }
  }

  renderFlash = () => {
    if(this.props.show) return(
      //<div className={!this.props.show ? '' : 'hidden'}>
      <div>
        <div className={`panel panel-${this.props.status.toLowerCase()}`}>
          <div className="panel-heading">
            <h3 className='panel-title'>{this.props.status ? this.props.status.toUpperCase() : ''}</h3>
          </div>
          <div className='panel-body'>
            {this.props.message}
          </div>
        </div>
      </div>
    );
  }

  render(){
    return(
      <div>
        {this.renderFlash()}
      </div>
    )
  }
}

// these props are all provided through the actions
Flash.propTypes = {
  hideFlash: PropTypes.func,
  show: PropTypes.bool,
  message: PropTypes.string,
  status: PropTypes.string,
}


function mapStateToProps (state) {
  return { ...state }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ showFlash, hideFlash }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Flash);
