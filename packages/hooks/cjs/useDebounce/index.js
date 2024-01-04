"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tslib = require("tslib");
var _react = require("react");
var _useDebounceFn = _interopRequireDefault(require("../useDebounceFn"));
function useDebounce(value, wait) {
  if (wait === void 0) {
    wait = 1000;
  }
  var _a = (0, _tslib.__read)((0, _react.useState)(value), 2),
    state = _a[0],
    setState = _a[1];
  var _b = (0, _tslib.__read)((0, _useDebounceFn["default"])(function () {
      setState(value);
    }, wait), 1),
    debounceSetState = _b[0];
  (0, _react.useEffect)(function () {
    debounceSetState();
  }, [value]);
  return state;
}
var _default = exports["default"] = useDebounce;