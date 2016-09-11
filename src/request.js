
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
