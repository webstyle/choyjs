'use strict';

/**
 * choyJS Framework.
 * Copyright(c) 2016 Farrukh Mamatkhalilov.
 * MIT Licensed.
 *
 */

var Choy;

Choy = function() {

    /**
     * Global o'zgaruvchilar.
     * appName - yangi qo'shilgan dasturning nomi shu o'zgaruvchida saqlanadi.
     * appRestUrl - RESTFull API uchun so'rovlarni jo'natiladigan markazi manzil.
     */
    var appName, appRestUrl;

    /**
     * Dasturning asosiy ma'lumotlarini o'rnatish.
     */
    this.setAppConf = function(name, url) {
        appName = name;
        appRestUrl = url;
    };

    /**
     * Dastur haqidagi ma'lumotlarni olish.
     */
    this.appInfo = function() {
        return {
            appName: appName,
            appRestUrl: appRestUrl
        };
    };

    /**
     * Dasturni ishga tushirish uchun
     */
    this.init = function() {
        if (appName && appRestUrl) {
            console.log(`Sizning ${appName} dasturingiz ishga tushdi!`);
            console.log(`RESTFull Api manzili: ${appRestUrl}`);
            this.HTTP = new Request();
        } else {
            console.error('Sizning dasturingiz ishga tushirilmagan');
        }
    };


    /**
     * XMLHttpRequest
     * Ajax so'rov jo'natish uchun
     */
    function Request() {

        /**
         * So'rov jo'natish.
         */
        this.get = function(url, callback) {
            sendRequest("GET", url, callback);
        };

        this.delete = function(url, callback) {
            sendRequest("DELETE", url, callback);
        };

        this.post = function(url, data, callback) {
            sendRequest("POST", url, callback, data);
        };

        this.put = function(url, data, callback) {
            sendRequest("PUT", url, callback, data);
        };

        function sendRequest(method, url, callback, data) {

            var xhr, body;

            xhr = new XMLHttpRequest();
            body = data || {};

            xhr.open(method, appRestUrl + url, false);
            xhr.send(body);

            if (xhr.status != 200) {
                callback({
                    status: xhr.status,
                    message: xhr.statusText
                }, {});
            } else {
                callback(false, JSON.parse(xhr.responseText));
            }
        }

    }

};
