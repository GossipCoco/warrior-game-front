import http from '../http/http-common'

class ClanService {
    getAllClans() {
        return http.get('/clan')
    }
    getClanByName(id){
        return http.get(`/character/${id}`);
    }
}

export default new ClanService()