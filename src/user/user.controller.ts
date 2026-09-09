import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service.js';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
    @Get()
    getAllUsers(){
        return this.userService.getAllUsers();
    }

    @Post()
    createUser(@Body() body){
        return this.userService.createUser(body);
    }
}
