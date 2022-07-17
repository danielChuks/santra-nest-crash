import { HttpException, HttpStatus } from "@nestjs/common";

export class IncompleteRequestException extends HttpException {
    constructor() {
        super({
            statusCode: HttpStatus.BAD_REQUEST,
            message: "Your request body is missing certain required parameters."
        }, HttpStatus.BAD_REQUEST);
    }
}