"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _useUnmount = _interopRequireDefault(require("../useUnmount"));
var _isBrowser = _interopRequireDefault(require("../utils/isBrowser"));
var defaultOptions = {
  restoreTitle: false
};
function useTitle(title, option) {
  if (option === void 0) {
    option = defaultOptions;
  }
  var titleRef = (0, _react.useRef)(_isBrowser["default"] ? document.title : '');
  (0, _react.useEffect)(function () {
    document.title = title;
  }, [title]);
  (0, _useUnmount["default"])(function () {
    if (option.restoreTitle) {
      document.title = titleRef.current;
    }
  });
}
var _default = exports["default"] = useTitle;