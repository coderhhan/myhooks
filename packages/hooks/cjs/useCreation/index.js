"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _depsAreSame = _interopRequireDefault(require("../utils/depsAreSame"));
function useCreation(factory, deps) {
  var ref = (0, _react.useRef)({
    deps: deps,
    init: false,
    data: {}
  });
  if (!ref.current.init || !(0, _depsAreSame["default"])(ref.current.deps, deps)) {
    ref.current.data = factory();
    ref.current.init = true;
  }
  return ref.current.data;
}
var _default = exports["default"] = useCreation;