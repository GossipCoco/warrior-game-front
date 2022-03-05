import http from '../http/http-common'

class UserService {
    getAllUsers() {
        return http.get('/user')
    }
}

export default new UserService()