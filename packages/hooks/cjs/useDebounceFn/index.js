"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _useLatest = _interopRequireDefault(require("../useLatest"));
var _react = require("react");
var _useUnmount = _interopRequireDefault(require("../useUnmount"));
function useDebounceFn(fn, wait) {
  if (wait === void 0) {
    wait = 1000;
  }
  var fnRef = (0, _useLatest["default"])(fn);
  var timer = (0, _react.useRef)();
  var debounced = (0, _react.useMemo)(function () {
    return function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(function () {
        fnRef.current.apply(null, args);
        timer.current = null;
      }, wait);
    };
  }, []);
  (0, _useUnmount["default"])(function () {
    clearTimeout(timer.current);
  });
  return [debounced];
}
var _default = exports["default"] = useDebounceFn;