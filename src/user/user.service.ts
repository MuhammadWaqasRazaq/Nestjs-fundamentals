import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    private users: any[] = [];

    getAllUsers(){
        return this.users;
        

    }

    createUser(user){
        this.users.push(user);
        return {message:"User created successfully", user};
    }

}
