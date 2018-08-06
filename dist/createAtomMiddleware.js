'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Author: Quan Vo
 * Date: 8/3/18
 */

var store = exports.store = void 0;

var createAtomMiddleware = function createAtomMiddleware(_store) {
  console.log('ppp');
  console.log(_store);
  exports.store = store = _store;
  return function (next) {
    return function (action) {
      next(action);
    };
  };
};

exports.default = createAtomMiddleware;

/*
export default function createAtomMiddleware(_store){
  return next => action => {
    store = _store;
    next(action);
  }
};*/