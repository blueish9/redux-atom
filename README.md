<p>
  <a title='License' href="https://raw.githubusercontent.com/blueish9/redux-atom/master/LICENSE" height="18">
    <img src='https://img.shields.io/badge/license-MIT-blue.svg' />
  </a>
  <a href="https://badge.fury.io/js/%40blueish9%2Fredux-atom">
    <img src="https://badge.fury.io/js/%40blueish9%2Fredux-atom.svg" alt="npm" height="18">
  </a>
</p>

**Redux Atom** helps you encapsulate logic in one object, known as **atom**, which is the unit block that constructs a Redux application.


### Quick start
#### 1. Install with npm or yarn
```shell
npm install --save @blueish9/redux-atom
```

#### 2. How to use
Step-by-step tutorial: https://medium.com/@blueish/encapsulate-redux-logic-in-an-atom-1657161c8e16

##### 2.1. Create an atom
Action type, action creator, action dispatching and reducer logic are all encapsulated in an atom.
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

##### 2.2. Create reducer
```js
const initialState = ...

const atom1 = ...
const atom2 = ...

const reducer = createrReducer(initialState, atom1, atom2);
```

##### 2.3. Dispatch an action
remember to register the middleware before you can invoke an atom to dispatch an action
```js
import {applyMiddleware, createStore} from "redux";
import {createAtomMiddleware} from "@blueish9/redux-atom";

const store = createStore(
    rootReducer,
    applyMiddleware(createAtomMiddleware)
);

// invoke atom to dispatch an action
const myAtom = ...
myAtom(...);
```

##### 2.4. Combine logic
```js
import {combine} from "@blueish9/redux-atom";
const atom1 = ...
const atom2 = ...

// atom12 is a normal atom, we can use it to combine a bigger atom if needed
const atom12 = combine('ACTION_TYPE_12', atom1, atom2);
```
