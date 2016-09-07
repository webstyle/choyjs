'use strict';

/**
 * choyJS Framework.
 * Copyright(c) 2016 Farrukh Mamatkhalilov.
 * MIT Licensed.
 *
 */


class Choy {

    /**
     * Global o'zgaruvchilar.
     * appName - yangi qo'shilgan dasturning nomi shu o'zgaruvchida saqlanadi.
     * appRestUrl - RESTFull API uchun so'rovlarni jo'natiladigan markazi manzil.
     */

    constructor(appName, appRestUrl, debug) {
        this.appName = appName;
        this.appRestUrl = appRestUrl;
        this.debug = debug;
    }

    /**
     * Dasturning asosiy ma'lumotlarini o'rnatish.
     */
    setAppConf(name, url) {
        this.appName = name;
        this.appRestUrl = url;
    };

    /**
     * Debug yoqish yoki o'chirish.
     * Agar debug rejim yoqiq bo'lsa, barcha jo'natilayotgan ma'lumotlar log qilinadi!
     */
    setDebug(bool) {
        this.debug = bool;
    };

    /**
     * Dastur haqidagi ma'lumotlarni olish.
     */
    appInfo() {
        return {
            appName: this.appName,
            appRestUrl: this.appRestUrl
        };
    };

    /**
     * Dasturni ishga tushirish uchun
     */
    init() {
        if (this.appName && this.appRestUrl) {
            console.log(`Sizning ${this.appName} dasturingiz ishga tushdi!`);
            console.log(`RESTFull Api manzili: ${this.appRestUrl}`);
            this.HTTP = new Request();
        } else {
            console.error('Sizning dasturingiz ishga tushirilmagan');
        }
    };
}


/**
 * XMLHttpRequest
 * Ajax so'rov jo'natish uchun
 */
class Request extends Choy {
    /**
     * So'rov jo'natish.
     */
    get(url, callback) {
        this.sendRequest("GET", url, callback);
    }

    delete(url, callback) {
        this.sendRequest("DELETE", url, callback);
    }

    post(url, data, callback) {
        this.sendRequest("POST", url, callback, data);
    }

    put(url, data, callback) {
        this.sendRequest("PUT", url, callback, data);
    }

    sendRequest(method, url, callback, data) {

        let [xhr, body] = [new XMLHttpRequest(), data || {}];

        xhr.open(method, this.appRestUrl + url, false);
        xhr.send(body);
        let resJson = JSON.parse(xhr.responseText);

        if (this.debug) {
            console.log(method + ": " + url);
            if (data) {
                console.log(`Jo'natilgan ma'lumot:`);
                console.log(data);
            }
            console.log(`Qaytgan ma'lumotlar:`);
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

    };

};
