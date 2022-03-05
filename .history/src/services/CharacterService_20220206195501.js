import http from '../http/http-common'

class CharacterService {
    getAllCharacters() {
        return http.get('/character')
    }
    getCharacter(id) {
        return http.get(`/character/${id}`);
      }
      createCharacter(data) {
        return http.post("/character", data);
      }
      updateCharacter(id, data) {
        return http.put(`/character/${id}`, data);
      }
      deleteCharacter(id) {
        return http.delete(`/character/${id}`);
      }
      deleteAll() {
        return http.delete(`/character`);
      }
      findByTitle(title) {
        return http.get(`/character?title=${title}`);
      }
}

export default new CharacterService()