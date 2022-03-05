const axios = require('axios')
const config = require('../../server')

const JwtAPI = {}

JwtAPI.logged = false;
JwtAPI.SetUser = (token) => {
    console.log(token)
    return localStorage.setItem('token', token)
}
JwtAPI.GetUser = () => {
    return localStorage.getItem('token')
}
JwtAPI.UnsetUser = () => {
    localStorage.removeItem('token')
}
JwtAPI.Connexion = (user) => {
    return axios
        .post(config.Url + "user/login", user)
        .then((token) => {
            console.log(token)
            if (token.status == 200) {
                JwtAPI.SetUser(token.data);
                axios.defaults.headers.common['Authorization'] = JwtAPI.GetUser()
                JwtAPI.logged = true
            }
            else {
                JwtAPI.logged = false;
                JwtAPI.UnsetUser()
            }
        })
        .catch((err) => console.log(err))
}

JwtAPI.Disconnect = (router) => {
    JwtAPI.logged = false;
    JwtAPI.UnsetUser()
    router.push({ path: '/signin' });
}
JwtAPI.NotConnected = () => {
    JwtAPI.UnsetUser();
    this.$router.push({ path: '/signin' })
}

JwtAPI.IsLogged = () => {
    JwtAPI.logged = JwtAPI.GetUser() ? true : false
    return JwtAPI.logged
};

module.exports = JwtAPI