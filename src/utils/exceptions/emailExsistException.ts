import { HttpException, HttpStatus } from "@nestjs/common";

export class EmailExsistException extends HttpException {
    constructor() {
        super({
            statuscode: HttpStatus.BAD_REQUEST,
            message: "User with this email already exsist",
        }, HttpStatus.BAD_REQUEST)
    }
}