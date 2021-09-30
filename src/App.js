import './App.css';
import Header from "./components/Header";
import characterResponse from './charactersResponse.json';
import CharacterCard from './components/CharacterCard';
import CharacterGallery from "./components/CharacterGallery";
import {useState} from "react";


function App() {

    //const characters = characterResponse.results
    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState("")

    const clickLoadButton = () => {
        setCharacters(characterResponse.results)
    }
    const clearCharacterButton = () => {
        setCharacters([])
    }
    const searchButton = event => {
        const newSearch = event.target.value
        setSearch(newSearch)
    }
    const filterCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <>
            <div>
                <Header title="Rick & Morty App"/>
                <button onClick={clickLoadButton}>Load characters</button>
                <button onClick={clearCharacterButton}>Clear characters</button>
                <input type={"text"} onChange={searchButton} value={search}/>
                <CharacterGallery characters={filterCharacters}/>
            </div>
        </>
    );
}

export default App;