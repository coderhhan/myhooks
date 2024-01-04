"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _useRequestImplement = _interopRequireDefault(require("./useRequestImplement"));
function useRequest(service, options) {
  return (0, _useRequestImplement["default"])(service, options, []);
}
var _default = exports["default"] = useRequest;