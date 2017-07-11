import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class Flash extends Component{
  constructor(props){
    super(props);
  }

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

  render(){
    let style = `panel panel-${this.props.status}`;
    return(
      <div>
        <div className={!this.props.show ? 'hidden' : ''}>
          <div className={style}>
            <div className="panel-heading">
              <h3 className='panel-title'>{this.props.status.toUpperCase()}</h3>
            </div>
            <div className='panel-body'>
              {this.props.message}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
