import { BASE_URL } from "settings/apiConfig"
import axios from 'axios'

export const callApi = (endpoint, method = 'GET', data) => {
    return axios({
        url: `${BASE_URL}/${endpoint}`,
        method,
        data,
    })
}