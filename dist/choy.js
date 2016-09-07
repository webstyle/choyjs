'use strict';

/**
 * choyJS Framework.
 * Copyright(c) 2016 Farrukh Mamatkhalilov.
 * MIT Licensed.
 *
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
                this.HTTP = new Request();
            } else {
                console.error('Sizning dasturingiz ishga tushirilmagan');
            }
        }
    }]);

    return Choy;
}();

/**
 * XMLHttpRequest
 * Ajax so'rov jo'natish uchun
 */


var Request = function (_Choy) {
    _inherits(Request, _Choy);

    function Request() {
        _classCallCheck(this, Request);

        return _possibleConstructorReturn(this, (Request.__proto__ || Object.getPrototypeOf(Request)).apply(this, arguments));
    }

    _createClass(Request, [{
        key: 'get',

        /**
         * So'rov jo'natish.
         */
        value: function get(url, callback) {
            this.sendRequest("GET", url, callback);
        }
    }, {
        key: 'delete',
        value: function _delete(url, callback) {
            this.sendRequest("DELETE", url, callback);
        }
    }, {
        key: 'post',
        value: function post(url, data, callback) {
            this.sendRequest("POST", url, callback, data);
        }
    }, {
        key: 'put',
        value: function put(url, data, callback) {
            this.sendRequest("PUT", url, callback, data);
        }
    }, {
        key: 'sendRequest',
        value: function sendRequest(method, url, callback, data) {
            var xhr = new XMLHttpRequest();
            var body = data || {};


            xhr.open(method, this.appRestUrl + url, false);
            xhr.send(body);
            var resJson = JSON.parse(xhr.responseText);

            if (this.debug) {
                console.log(method + ": " + url);
                if (data) {
                    console.log('Jo\'natilgan ma\'lumot:');
                    console.log(data);
                }
                console.log('Qaytgan ma\'lumotlar:');
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
}(Choy);

;