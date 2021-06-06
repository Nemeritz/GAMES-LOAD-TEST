import http from 'k6/http';
import { sleep } from 'k6';
import { randomString } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";

export let options = {
    vus: 10000,
    duration: '30s',
};

export default function () {
    let randomEmail = randomString(12);

    let url = 'https://api.stage05.hrzn.io/profile/public/signup'

    let payload = JSON.stringify({
        "languageCode": "en",
        "currency": "BTC",
        "email": `${randomEmail}@gmail.com`,
        "password": "aA497289",
        "brandId": "bccashgames"
    });

    let params = {
        headers: {
          'Content-Type': 'application/json',
        },
    };

    const response = http.post(url, payload, params);

    if (response.status !== 200) {
        console.log(`Received Error Code ${response.status}, body: ${JSON.stringify(response.request.body)}`);
    }

    sleep(5)
}