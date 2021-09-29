import RickAndMortyData from "./RickAndMortyData.js";

export default function FilterRickAndMortyData() {
    const characters = RickAndMortyData.results

    return (
        getHumanAlive(characters, "Alive", "Human")
    );

    function getHumanAlive(character, filterByStatus, filterBySpecies) {
        return character.map(character => {
            if (character.status === filterByStatus && character.species === filterBySpecies) {
                return character;
            }
        })
    }

}