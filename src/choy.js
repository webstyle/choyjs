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

console.log('Hello world');
