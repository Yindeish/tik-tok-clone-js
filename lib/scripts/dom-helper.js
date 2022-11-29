"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var DomHelper = /*#__PURE__*/function () {
  function DomHelper() {
    _classCallCheck(this, DomHelper);
    _defineProperty(this, "mainElement", document.querySelector('.main'));
    _defineProperty(this, "videosDisplayScreen", document.querySelector('.videos-display-screen'));
    _defineProperty(this, "videoBlocks", _toConsumableArray(document.querySelectorAll('.video')));
    _defineProperty(this, "videos", _toConsumableArray(document.querySelectorAll('video')));
    _defineProperty(this, "tabs", document.querySelector('.tabs'));
    _defineProperty(this, "followingTab", document.querySelector('.following'));
    _defineProperty(this, "forYouTab", document.querySelector('.for-you'));
  }
  _createClass(DomHelper, [{
    key: "getElements",
    value: function getElements() {
      return {
        mainElement: mainElement,
        videosDisplayScreen: videosDisplayScreen,
        videoBlocks: videoBlocks,
        videos: videos,
        tabs: tabs,
        followingTab: followingTab,
        forYouTab: forYouTab
      };
    }
  }]);
  return DomHelper;
}();
var _default = DomHelper;
exports["default"] = _default;