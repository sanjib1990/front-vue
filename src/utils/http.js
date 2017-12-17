import axios from "axios";

let async = axios.create({
    baseURL: 'http://laravel55.dev',
});

export default async;