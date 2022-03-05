import http from '../http/http-common'

class CharacterService {
    getAllCharacters() {
        return http.get('/character')
    }
}

export default new CharacterService()