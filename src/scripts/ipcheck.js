import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    vus: 1000,
    duration: '20s',
};

export default function () {
    let url = 'https://games-client.btctest.net/api/ipcheck'

    const response = http.get(url);

    if (response.status !== 200) {
        console.log(`VU: ${__VU} ITER: ${__ITER}: Received Error Code ${response.status}, body: ${JSON.stringify(response.body)}`);
    }

    sleep(5)
}