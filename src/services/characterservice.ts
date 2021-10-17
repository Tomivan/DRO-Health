import http from '../hhtp-common';

const getCharacters = () => {
    return http.get("/characters?page={page}&pageSize=50")
}

const CharacterService = {
    getCharacters
}

export default CharacterService;