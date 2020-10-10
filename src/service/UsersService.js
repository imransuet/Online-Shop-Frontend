import axios from 'axios'

const USERS_API_BASE_URL="http://localhost:9000/users";

class UsersService {

    getUsers(){

        return axios.get(USERS_API_BASE_URL);
       }
    
}

export default new UsersService()