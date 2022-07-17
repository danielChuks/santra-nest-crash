import { IsNotEmpty, IsEmail,  } from "class-validator";
import { Exclude } from "class-transformer";

export class UserDto {
 
    @IsEmail()
    email: string;

    @IsNotEmpty()
    username: string;

    @Exclude()
    password: string;

}