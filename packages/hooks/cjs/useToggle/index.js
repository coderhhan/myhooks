"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tslib = require("tslib");
var _react = require("react");
function useToggle(defaultValues, reverseValue) {
  if (defaultValues === void 0) {
    defaultValues = false;
  }
  var _a = (0, _tslib.__read)((0, _react.useState)(defaultValues), 2),
    state = _a[0],
    seState = _a[1];
  var acitons = (0, _react.useMemo)(function () {
    //如果只传 1个  rever = false
    var reverseValueorgin = reverseValue === '' || reverseValue === undefined ? !defaultValues : reverseValue;
    var toggle = function toggle() {
      seState(function (value) {
        return value === defaultValues ? reverseValueorgin : defaultValues;
      });
    };
    var setLeft = function setLeft() {
      seState(function () {
        return defaultValues;
      });
    };
    var setRight = function setRight() {
      seState(function () {
        return reverseValueorgin;
      });
    };
    return {
      toggle: toggle,
      setLeft: setLeft,
      setRight: setRight
    };
  });
  return [state, acitons];
}
var _default = exports["default"] = useToggle;