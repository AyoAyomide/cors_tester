const axios = require('axios');
import { http_message } from "./http_message.js";
// https://api.coindesk.com/v1/bpi/currentprice.json
class cors_axios {
    testCors(http_method,url,resp) {
        http_method.forEach(async (elem) => {
            try {
                let data = await axios({ method: elem, url, });
                resp[elem] = this.set_dataObj(data);
            } catch (e) {
                resp[elem] = this.set_dataObj(e.response);
            }
        })
    }

    set_dataObj(data) {
        try {
            return {
                code: data.status,
                message: http_message(data.status),
                tag: 'error tag',
                pass: (data.status <= 200 && data.status > 199 ? true : false)
            }
        }
        catch {
            return {
                code: 403,
                message: http_message( 403),
                tag: 'error tag',
                pass: false
            }
        }
    }
}

export default cors_axios;