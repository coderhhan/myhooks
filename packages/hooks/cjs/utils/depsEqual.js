"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.depsEqual = void 0;
var _lodashEs = require("lodash-es");
var depsEqual = exports.depsEqual = function depsEqual(aDeps, bDeps) {
  if (aDeps === void 0) {
    aDeps = [];
  }
  if (bDeps === void 0) {
    bDeps = [];
  }
  return (0, _lodashEs.isEqual)(aDeps, bDeps);
};