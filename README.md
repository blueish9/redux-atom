<p>
  <a title='License' href="https://raw.githubusercontent.com/blueish9/redux-atom/master/LICENSE" height="18">
    <img src='https://img.shields.io/badge/license-MIT-blue.svg' />
  </a>
  <a href="https://badge.fury.io/js/%40blueish9%2Fredux-atom">
    <img src="https://badge.fury.io/js/%40blueish9%2Fredux-atom.svg" alt="npm version" height="18">
  </a>
</p>

**Redux Atom** helps you encapsulate logic in one object, known as **atom**, which is the unit block that constructs a Redux application.


### Quick start
##### 1. Install with npm or yarn
```shell
npm install --save @blueish9/redux-atom
```

##### 2. Create atom
```js
import {atom} from "@blueish9/redux-atom";

const actionType = 'MY_ACTION_TYPE';

// for each payload that you want the action to contain, define its name here 
const actionParams = ['param1', 'param2', 'param3'];

const reducerLogic = (state, action) => {
  // handle logic to return new state
};

const myAtom = atom(actionType, actionParams, reducerLogic);
```
For tutorial, refer here: 
