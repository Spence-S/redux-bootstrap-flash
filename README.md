# redux-bootstrap-flash-messages

redux bootstrap flash messages is a small react-redux component that allows you to
quickly implement a flash messaging system in your applications. It is meant to be used
with applications styled with bootstrap3. It's tiny and dead simple to use.

## Install

``` bash
npm install redux-bootstrap-flash-messages
```

## Setting It Up

When you create your store:

``` javascript
import flashState from 'redux-bootstrap-flash-messages';
const store = createStore(flashState);
```

In your React 
