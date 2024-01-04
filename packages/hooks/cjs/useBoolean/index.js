"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tslib = require("tslib");
var _react = require("react");
function useBoolean(defaultvalue) {
  if (defaultvalue === void 0) {
    defaultvalue = false;
  }
  var _a = (0, _tslib.__read)((0, _react.useState)(defaultvalue), 2),
    state = _a[0],
    setState = _a[1];
  var actions = (0, _react.useMemo)(function () {
    var toggle = function toggle() {
      setState(!state);
    };
    var setTrue = function setTrue() {
      setState(true);
    };
    var setFalse = function setFalse() {
      setState(false);
    };
    return {
      toggle: toggle,
      setTrue: setTrue,
      setFalse: setFalse
    };
  }, []);
  return [state, actions];
}
var _default = exports["default"] = useBoolean;