"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
function useLatest(value) {
  var ref = (0, _react.useRef)(value); //首次渲染创建，rerender时仍然取旧值
  ref.current = value; //因此要在此重新赋值，更新rerender传过来的参数
  return ref;
}
var _default = exports["default"] = useLatest;