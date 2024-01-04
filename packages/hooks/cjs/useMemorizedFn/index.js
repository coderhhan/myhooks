"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
function useMemorizedFn(fn) {
  var fnRef = (0, _react.useRef)(fn);
  fnRef.current = (0, _react.useMemo)(function () {
    return fn;
  }, [fn]);
  var memorizedFn = (0, _react.useRef)();
  if (!memorizedFn.current) {
    memorizedFn.current = function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return fnRef.current.apply(this, args);
    };
  }
  return memorizedFn.current;
}
var _default = exports["default"] = useMemorizedFn;