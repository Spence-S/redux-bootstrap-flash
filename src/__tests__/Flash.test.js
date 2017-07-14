import React from 'react';
import ReactDOM from 'react-dom';
// import { shallow } from 'enzyme';
import { Flash, flashState } from '../Flash';

describe('Flash component', () => {
  it('renders default without crashing', () => {
    const props = {
      flashState
    };

    const div = document.createElement('div');
    ReactDOM.render(<Flash {...props} />, div);
  });

  it('renders show without crashing', () => {
    const props = {
      flashState: {
        show: true,
        message: 'the test works!',
        status: 'success'
      }
    };

    const div = document.createElement('div');
    ReactDOM.render(<Flash {...props} />, div);
  });
});
