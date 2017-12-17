export default ({
    host: process.env.VUE_APP_HOST,
    env: process.env.NODE_ENV,
    debug: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'prod',
    port: process.env.PORT,
});
