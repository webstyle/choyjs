'use strict';

/**
 * choyJS Framework.
 * Copyright(c) 2016 Farrukh Mamatkhalilov.
 * MIT Licensed.
 *
 */


const Choy;

class Choy {

    /**
     * Global o'zgaruvchilar.
     * appName - yangi qo'shilgan dasturning nomi shu o'zgaruvchida saqlanadi.
     * appRestUrl - RESTFull API uchun so'rovlarni jo'natiladigan markazi manzil.
     */
    let appName, appRestUrl, debug;

    /**
     * Dasturning asosiy ma'lumotlarini o'rnatish.
     */
    setAppConf(name, url) {
        appName = name;
        appRestUrl = url;
    };

    /**
     * Debug yoqish yoki o'chirish.
     * Agar debug rejim yoqiq bo'lsa, barcha jo'natilayotgan ma'lumotlar log qilinadi!
     */
    setDebug(bool) {
        debug = bool;
    };

    /**
     * Dastur haqidagi ma'lumotlarni olish.
     */
    appInfo() {
        return {
            appName: appName,
            appRestUrl: appRestUrl
        };
    };

    /**
     * Dasturni ishga tushirish uchun
     */
    init() {
        if (appName && appRestUrl) {
            console.log(`Sizning ${appName} dasturingiz ishga tushdi!`);
            console.log(`RESTFull Api manzili: ${appRestUrl}`);
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
    this.get = (url, callback) => sendRequest("GET", url, callback);

    this.delete = (url, callback) => sendRequest("DELETE", url, callback);

    this.post = (url, data, callback) => sendRequest("POST", url, callback, data);

    this.put = (url, data, callback) => sendRequest("PUT", url, callback, data);

    let sendRequest = (method, url, callback, data) => {

        let [xhr, body] = [new XMLHttpRequest(), data || {}];

        xhr.open(method, appRestUrl + url, false);
        xhr.send(body);
        let resJson = JSON.parse(xhr.responseText);

        if (debug) {
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
