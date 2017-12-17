import axios from "axios";

let async = axios.create({
    baseURL: 'http://laravel55.dev',
});

async.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default async;