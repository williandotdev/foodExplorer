class AppError {
    constructor(message, statusCode = 400) {
        this.message = typeof message === 'object' ? JSON.stringify(message) : message;
        this.statusCode = statusCode;
    }
}
module.exports = AppError;