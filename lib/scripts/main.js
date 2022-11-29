"use strict";

var _videoPlayer = _interopRequireDefault(require("./video-player"));
var _tabs = _interopRequireDefault(require("./tabs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var VideoApp = /*#__PURE__*/function () {
  function VideoApp() {
    _classCallCheck(this, VideoApp);
  }
  _createClass(VideoApp, null, [{
    key: "controlVideos",
    value: function controlVideos() {}
  }]);
  return VideoApp;
}();
VideoApp.controlVideos();
var FunctionalitiesApp = /*#__PURE__*/function () {
  function FunctionalitiesApp() {
    _classCallCheck(this, FunctionalitiesApp);
  }
  _createClass(FunctionalitiesApp, null, [{
    key: "init",
    value: function init() {
      var tab = new _tabs["default"]();
      var switchTabs = tab.swichTabs();
      tab.run(switchTabs);
    }
  }]);
  return FunctionalitiesApp;
}();
FunctionalitiesApp.init();