"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _domHelper = _interopRequireDefault(require("./dom-helper"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Component = /*#__PURE__*/function () {
  function Component() {
    _classCallCheck(this, Component);
  }
  _createClass(Component, [{
    key: "retrieveElements",
    value: function retrieveElements() {
      this.getVideos();
      var gottenElements = _domHelper["default"].gottenElements();
    }
  }, {
    key: "run",
    value: function run(fn) {
      fn();
    }
  }]);
  return Component;
}();
var _default = Component;
exports["default"] = _default;