"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tslib = require("tslib");
var _useLatest = _interopRequireDefault(require("../../useLatest"));
var _useUpdate = _interopRequireDefault(require("../../useUpdate"));
var _useCreation = _interopRequireDefault(require("../../useCreation"));
var _useUnmount = _interopRequireDefault(require("../../useUnmount"));
var _useMemorizedFn = _interopRequireDefault(require("../../useMemorizedFn"));
var _Fetch = _interopRequireDefault(require("./Fetch"));
var _react = require("react");
var useMount = function useMount(fn) {
  (0, _react.useEffect)(function () {
    fn === null || fn === void 0 ? void 0 : fn();
  }, []);
};
function useRequestImplement(service, options, plugin) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.manual,
    manual = _a === void 0 ? false : _a; // 非手动触发
  // 基于原有的service 创建ref 避免闭包
  var serviceRef = (0, _useLatest["default"])(service);
  var update = (0, _useUpdate["default"])();
  var fetchInstance = (0, _useCreation["default"])(function () {
    return new _Fetch["default"](serviceRef, (0, _tslib.__assign)((0, _tslib.__assign)({}, options), {
      manual: manual
    }), update);
  }, []);
  useMount(function () {
    if (!manual) {
      // useCachePlugin can set fetchInstance.state.params from cache when init
      var params = fetchInstance.state.params || options.defaultParams || [];
      // @ts-ignore
      fetchInstance.run.apply(fetchInstance, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(params), false));
    }
  });
  (0, _useUnmount["default"])(function () {
    fetchInstance.cancel();
  });
  return {
    loading: fetchInstance.state.loading,
    data: fetchInstance.state.data,
    error: fetchInstance.state.error,
    params: fetchInstance.state.params || [],
    cancel: (0, _useMemorizedFn["default"])(fetchInstance.cancel.bind(fetchInstance)),
    refresh: (0, _useMemorizedFn["default"])(fetchInstance.refresh.bind(fetchInstance)),
    refreshAsync: (0, _useMemorizedFn["default"])(fetchInstance.refreshAsync.bind(fetchInstance)),
    run: (0, _useMemorizedFn["default"])(fetchInstance.run.bind(fetchInstance)),
    runAsync: (0, _useMemorizedFn["default"])(fetchInstance.runAsync.bind(fetchInstance))
  };
}
var _default = exports["default"] = useRequestImplement;