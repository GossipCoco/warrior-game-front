import http from '../http/http-common'

class UserService {
    getAllUsers() {
        return http.get('/user')
    }
    getUserById(id){
        return http.get(`/user/${id}`)
    }
    loginUser(data){
        console.log(data)
        return http.post('/user/login', data)
    }
}
export default new UserService()