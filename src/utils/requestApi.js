import axios from "axios";

export default function requestApi(endpoint, method = 'GET', body, accessToken) {
    return axios({
        method: method,
        url: endpoint,
        data: body,
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
    })
        .catch(err => {
            console.error(err)
        })
}
