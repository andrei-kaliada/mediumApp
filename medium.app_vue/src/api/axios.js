import axios from 'axios';
import {getItem} from '@/helpers/persistanceStorage';

axios.defaults.baseURL = 'https://conduit.productionready.io/api';

axios.interceptors.request.use(config => {
    const token = getItem('accessToken');
    console.log(token)
    const authorizationToken = token ? `Token ${token}` : '';
    console.log(authorizationToken)
    config.headers.Authorization = authorizationToken;
    console.log(localStorage.getItem('accessToken'))
    return config;
})

export default axios;