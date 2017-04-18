(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports', 'comma-separated-values'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('comma-separated-values'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.CSV);
    global.csvExportor = mod.exports;
  }
})(this, function (module, exports, _commaSeparatedValues) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _commaSeparatedValues2 = _interopRequireDefault(_commaSeparatedValues);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function genUrl(data, options) {
    var encoded = new _commaSeparatedValues2.default(data, options).encode();
    var dataBlob = new Blob(['\uFEFF' + encoded], { type: 'text/plain;charset=utf-8' });
    return window.URL.createObjectURL(dataBlob);
  }

  function downloadCsv(data, options, fileName) {
    var url = genUrl(data, options);
    var a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  exports.default = {
    genUrl: genUrl,
    downloadCsv: downloadCsv
  };
  module.exports = exports['default'];
});
