export class ErrorGenerator {
    status: Number;
    message: String
    constructor(status: Number, message: String) {
        this.status = status;
        this.message = message
    }
}