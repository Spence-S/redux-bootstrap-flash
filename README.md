# redux-bootstrap-flash

[![Build Status](https://travis-ci.org/Spence-S/redux-bootstrap-flash.svg?branch=master)](https://travis-ci.org/Spence-S/redux-bootstrap-flash)

> MVP approved bootstrap styled flsash messages.

redux-bootstrap-flash is a small react-redux component that allows you to
quickly implement a flash messaging system in your bootstrap@3 styled applications. It's tiny and dead simple to use and has minimal configuration.

Just dispatch the flash action and the next user click, the flash message will disappear.
It's as simple as that!

Works perfect with any redux integrated bootstrap3 or react-bootstrap application and can quickly and effectively get feedback to your users with minimal interruption to your UI.

## Demo
---
> [Give it a quick test run!](http://feigned-stream.surge.sh/)
---

### Behavior

When you dispatch a showFlash method at any point in your application life cycle, the flash message will pop up wherever you have placed the component and disappear on the next user click!


## Install

`yarn add react redux react-redux bootstrap@3`

then

`yarn add redux-bootstrap-flash`


## Getting Started

1) Add flashState to your rootReducer. Always connect the state through combineReducers and
do not change the name.

``` javascript
import { flashState } from 'redux-bootstrap-flash';
const rootReducer = combineReducers({flashState});

```

2) Add the Flash component wherever you want to display the flash message. The component
must be able to keep keep track of flashState.show state by either being connected directly to redux or
having been passed through as a prop.

``` javascript
const MyComponent = (props) => (
  <div>
   {props.flashState.show ? <Flash /> : null}
  </div>
)
```

3) Dispatch flash actions.
redux-bootstrap-flash exposes an action creator called 'showDispatch'.

The actionCreator,

From a connected component.
``` javascript
  import { showFlash, hideFlash } from 'redux-bootstrap-flash';

  const style='danger';
  const message= 'Watch out! This message is a dangerous message!'

  class MyConnectedComponent extend Component{
    render(){
      return(
        <div>
          {showFlash(style, message)}
        </div>
      )
    }
  }
```
from a thunk
``` javascript
import { showFlash } from 'redux-bootstrap-flash';

const style='danger';
const message= 'Watch out! This message is a dangerous message!'

const action = () => (dispatch) => {
  const data = someAsyncCallThatReturnsAnError();
  dispatch(showFlash('My message goes here or I can pass something like data.err'))
}
```

## TODOS

- [ ] More ability to customize styles and behavior coming soon.
