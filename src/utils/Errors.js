export default class Errors {
    constructor() {
         this.errors = {};
     }

    /**
     * Get a error filed.
     *
     * @param field
     * @return {*}
     */
     get(field) {
         if (this.errors[field]) {
             return this.errors[field][0]
         }
     }

    /**
     * Set the error object.
     *
     * @param error
     * @return {Errors}
     */
    record(error) {
         this.errors = error;

         return this;
    }

    /**
     * Clear an error field.
     *
     * @param field
     * @return {Errors}
     */
    clear(field = null) {
        if (field) {
            delete this.errors[field];
        } else {
            this.errors = {};
        }

        return this;
    }

    /**
     * Check if error filed exists.
     *
     * @param field
     * @return {boolean}
     */
    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    /**
     * Check if there are any errors.
     *
     * @return {boolean}
     */
    any() {
        return Object.keys(this.errors).length > 0;
    }
}