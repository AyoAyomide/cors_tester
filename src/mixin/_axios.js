const axios = require('axios');
import { http_message } from "./http_message.js";
import { Method } from "./method.js";
const http_method = Method.split(',');
let url = "https://api.coinbase.com/v2/exchange-rates?currency=BTC";
class cors_axios {
    testCors() {
        http_method.forEach(async (elem) => {
            try {
                let data = await axios({ method: elem, url, });
                console.log(elem, this.set_dataObj(data));
            } catch (e) {
                console.log(elem, this.set_dataObj(e.response));
            }
        })
        // http_message(200);
        // console.log(Method);
    }

    set_dataObj(data) {
        return {
            code: data.status,
            message: http_message(data.status),
            tag: 'error tag',
            pass: (data.status <= 200 && data.status > 199 ? true : false)
        }
    }
}

export default cors_axios;