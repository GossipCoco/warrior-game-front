import axios from 'axios'
import user from './UserData'
import conf from '../../server'
import api from "./api";
import TokenService from "./token.service";
const API_URL = conf.Url

class AuthService {
    login(user) {
        console.log(user.Login, user.Password)
        console.log(API_URL)
        return api
            .post(API_URL + '/user/login', {
                Login: user.Login,
                Password: user.Password
            })
            .then(response => {
                console.log('OB: ', response)
                if (response.data.ob.isSuccess) {

                    user.user = response.data.ob
                    user.isSuccess = user.user.isSuccess
                    // console.log('Success: ', user.user)
                    localStorage.setItem('user', JSON.stringify(user.user))
                    if (response.data.accessToken) {
                        TokenService.setUser(response.data);
                      }
                }
                else {
                    this.logout()
                }
                return response.data.ob
            })
    }

    logout() {
        console.log('logout')
        localStorage.removeItem('user')
        user.user = {}
        user.isSuccess = false
    }

    allUsers() {
        console.log('allusers')
        return axios
            .get(API_URL + '/user')
            .then(response => {
                return response.data;
            })
    }
}

export default new AuthService()
