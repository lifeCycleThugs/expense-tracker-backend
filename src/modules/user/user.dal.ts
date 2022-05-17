import { Login, Signup } from "./user.interfaces"
import { createNew } from '../dbOperation';
import { UserModel } from './user.model';

const findByEmail = (data:Login) => {
    
}
const addUser = async (data: Signup) => {
    try {
        const user = await createNew(UserModel, data);
        return user;
    } catch (error) {
        console.log(error);
    }
}

export {
    findByEmail,
    addUser
}