'use strict';

/**
 * choyJS Framework.
 * Copyright(c) 2016 Farrukh Mamatkhalilov.
 * MIT Licensed.
 *
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Choy = function () {

    /**
     * Global o'zgaruvchilar.
     * appName - yangi qo'shilgan dasturning nomi shu o'zgaruvchida saqlanadi.
     * appRestUrl - RESTFull API uchun so'rovlarni jo'natiladigan markazi manzil.
     */

    function Choy(appName, appRestUrl, debug) {
        _classCallCheck(this, Choy);

        this.appName = appName;
        this.appRestUrl = appRestUrl;
        this.debug = debug;
    }

    /**
     * Dasturning asosiy ma'lumotlarini o'rnatish.
     */


    _createClass(Choy, [{
        key: 'setAppConf',
        value: function setAppConf(name, url) {
            this.appName = name;
            this.appRestUrl = url;
        }
    }, {
        key: 'setDebug',


        /**
         * Debug yoqish yoki o'chirish.
         * Agar debug rejim yoqiq bo'lsa, barcha jo'natilayotgan ma'lumotlar log qilinadi!
         */
        value: function setDebug(bool) {
            this.debug = bool;
        }
    }, {
        key: 'appInfo',


        /**
         * Dastur haqidagi ma'lumotlarni olish.
         */
        value: function appInfo() {
            return {
                appName: this.appName,
                appRestUrl: this.appRestUrl
            };
        }
    }, {
        key: 'init',


        /**
         * Dasturni ishga tushirish uchun
         */
        value: function init() {
            if (this.appName && this.appRestUrl) {
                console.log('Sizning ' + this.appName + ' dasturingiz ishga tushdi!');
                console.log('RESTFull Api manzili: ' + this.appRestUrl);
                this.HTTP = new Request(this.appRestUrl);
            } else {
                console.error('Sizning dasturingiz ishga tushirilmagan');
            }
        }
    }]);

    return Choy;
}();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * XMLHttpRequest
 * Ajax so'rov jo'natish uchun
 */
var Request = exports.Request = function () {
  function Request(apiUrl) {
    _classCallCheck(this, Request);

    this.apiUrl = apiUrl;
  }

  /**
   * So'rov jo'natish.
   */


  _createClass(Request, [{
    key: "get",
    value: function get(url, callback) {
      this.sendRequest("GET", url, callback);
    }
  }, {
    key: "delete",
    value: function _delete(url, callback) {
      this.sendRequest("DELETE", url, callback);
    }
  }, {
    key: "post",
    value: function post(url, data, callback) {
      this.sendRequest("POST", url, callback, data);
    }
  }, {
    key: "put",
    value: function put(url, data, callback) {
      this.sendRequest("PUT", url, callback, data);
    }
  }, {
    key: "sendRequest",
    value: function sendRequest(method, url, callback, data) {
      console.log(url);
      var xhr = new XMLHttpRequest(),
          body = data || {};


      xhr.open(method, this.apiUrl + url, false);
      xhr.send(body);
      var resJson = JSON.parse(xhr.responseText);

      if (this.debug) {
        console.log(method + ": " + url);
        if (data) {
          console.log("Jo'natilgan ma'lumot:");
          console.log(data);
        }
        console.log("Qaytgan ma'lumotlar:");
        console.log(resJson);
        console.log("__________________________________________________");
      }

      if (xhr.status != 200) {
        return callback({
          status: xhr.status,
          message: xhr.statusText
        }, null);
      }

      return callback(false, resJson);
    }
  }]);

  return Request;
}();