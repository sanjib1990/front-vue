import async from "./http";
import Errors from "./Errors";

export default class Form {
    constructor(fields) {
        this.fields = fields;
        this.errors = new Errors();

        for (let field in fields) {
            this[field] = fields[field];
        }
    }

    /**
     * Reset the form.
     *
     * @return {Form}
     */
    reset() {
        for (let field in this.fields) {
            this[field] = null;
        }

        this.errors.clear();

        return this;
    }

    /**
     * Handle Submit.
     *
     * @param method
     * @param url
     * @param options
     */
    submit(method, url, options) {
        return new Promise((resolve, reject) => {
            async[method](url, this.data())
                .then(response => {
                    this.onSuccess(response);

                    resolve(response);
                })
                .catch(error => {
                    this.onError(error);

                    reject(error);
                });
        });
    }

    /**
     * Get the data for form submission.
     *
     * @return {{}}
     */
    data() {
        let data = {};

        for (let field in this.fields) {
            data[field] = this[field];
        }

        return data;
    }

    /**
     * Handle success.
     *
     * @param response
     * @return {Form}
     */
    onSuccess(response) {
        this.reset();

        return this;
    }

    /**
     * Handel error.
     *
     * @param error
     * @return {Form}
     */
    onError(error) {
        this.errors.record(error.response.data);

        return this;
    }
}
