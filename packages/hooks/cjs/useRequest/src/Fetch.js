"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tslib = require("tslib");
var Fetch = /** @class */function () {
  function Fetch(serviceRef, options,
  // publick 相当于 声明了 options，可以 this.options获取存进来的参数
  update) {
    this.serviceRef = serviceRef;
    this.options = options;
    this.update = update;
    this.count = 0;
    this.state = {
      loading: false,
      params: undefined,
      data: undefined,
      error: undefined
    };
    this.state = (0, _tslib.__assign)((0, _tslib.__assign)({}, this.state), {
      loading: !options.manual
    });
  }
  Fetch.prototype.setState = function (s) {
    if (s === void 0) {
      s = {};
    }
    this.state = (0, _tslib.__assign)((0, _tslib.__assign)({}, this.state), s);
    this.update();
  };
  Fetch.prototype.runAsync = function () {
    var _a, _b;
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      params[_i] = arguments[_i];
    }
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var currentCount, res, error_1;
      var _c;
      return (0, _tslib.__generator)(this, function (_d) {
        switch (_d.label) {
          case 0:
            this.count += 1;
            currentCount = this.count;
            this.setState({
              loading: true,
              params: params
            });
            _d.label = 1;
          case 1:
            _d.trys.push([1, 3,, 4]);
            return [4 /*yield*/, (_c = this.serviceRef).current.apply(_c, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(params), false))];
          case 2:
            res = _d.sent();
            if (currentCount !== this.count) {
              // prevent run.then when request is canceled
              return [2 /*return*/, new Promise(function () {})];
            }
            this.setState({
              data: res,
              error: undefined,
              loading: false
            });
            console.log(this);
            (_b = (_a = this.options).onSuccess) === null || _b === void 0 ? void 0 : _b.call(_a, res, params);
            return [2 /*return*/, res];
          case 3:
            error_1 = _d.sent();
            if (currentCount !== this.count) {
              // prevent run.then when request is canceled
              return [2 /*return*/, new Promise(function () {})];
            }
            this.setState({
              error: error_1,
              loading: false
            });
            throw error_1;
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };
  Fetch.prototype.run = function () {
    var _this = this;
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      params[_i] = arguments[_i];
    }
    this.runAsync.apply(this, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(params), false))["catch"](function (error) {
      if (!_this.options.onError) {
        console.error(error);
      }
    });
  };
  Fetch.prototype.cancel = function () {
    this.count += 1;
    this.setState({
      loading: false
    });
    // this.runPluginHandler('onCancel');
  };
  Fetch.prototype.refresh = function () {
    // @ts-ignore
    this.run.apply(this, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(this.state.params || []), false));
  };
  Fetch.prototype.refreshAsync = function () {
    // @ts-ignore
    return this.runAsync.apply(this, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(this.state.params || []), false));
  };
  return Fetch;
}();
var _default = exports["default"] = Fetch;