import { Controller, UsePipes, ValidationPipe, Body, Post, Get, Param, Delete, Put, Request} from '@nestjs/common';
import { UsersService} from './users.service';
import { UserDto } from 'src/dtos/users.Dto'; 


@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}
    
    @Get('')
    async getUser() {
        return await this.userService.getUsers();
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    async createUser(@Body() userDto: UserDto){
        return this.userService.createUsers(userDto);
    } 

    @Get('id/:id')
    async getUserById(@Param('id') id: string) {
        return this.userService.getUsersById(id)
    }

    @Delete("delete/:id")
    async deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(id)
    }

// we are usdaeing the users by passing the value of the _id, email, password, username.
    @Put("update/:id")
    async update(@Body() body, @Request() req ) {
        const { _id } = req.user
        const {username, password, email} = body
        return this.userService.updateUsers(_id, email, username, password)
    }

}
