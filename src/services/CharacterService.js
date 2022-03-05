import http from '../http/http-common'

class CharacterService {
    getAllCharacters() {
        return http.get('/character')
    }
    getCharacterByName(id){
        return http.get(`/character/${id}`)
    }
    getCharacterByNameSearch(name) {
        return http.get(`/character/search/${name}`)
    }
    createANewCharacter(data) {
        return http.post('/character/createANewCharacter', data)
    }
}

export default new CharacterService()
