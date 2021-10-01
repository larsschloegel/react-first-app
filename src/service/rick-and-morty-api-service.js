const BASISURL = "https://rickandmortyapi.com/api";


export default function fetchCharacterPage(url = BASISURL+"/character"){
    return fetch(url)
        .then(response => response.json())
        .then(page => page)
}