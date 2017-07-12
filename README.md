# redux-bootstrap-flash-message

redux bootstrap flash messages is a small react-redux component that allows you to
quickly implement a flash messaging system in your applications. It is meant to be used
with applications styled with bootstrap3. It's tiny and dead simple to use.

### Behavior

When you dispatch a showFlash method at any point in your application life cycle,


## Install

``` bash
npm install redux-bootstrap-flash-messages
```

## Setting It Up

1) Add redux-bootstrap-flash-message to your store.

``` javascript
import { flashState } from 'redux-bootstrap-flash-messages';
const store = createStore(flashState);
```

2) Add the Flash component wherever you want to display the flash message.

``` javascript
const MyComponent = () => (
  <div>
   <Flash />
  </div>
)

```

3) If you are inside of a redux connected component, you can import
