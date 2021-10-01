import './App.css';
import Header from "./components/Header";
import CharacterCard from './components/CharacterCard';
import CharacterGallery from "./components/CharacterGallery";
import {useEffect, useState} from "react";
import fetchCharacterPage from "./service/rick-and-morty-api-service";
import Button from '@mui/material/Button';


function App() {

    //const characters = characterResponse.results
    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState("")
    const [pageInfo, setPageInfo] = useState({})

    useEffect(() => {
        fetchDataAndSetState()
    }, [search])

    const loadCharacter = () => {
        fetchCharacterPage()
            .then(page => setCharacters(page.results))
    }
    const clearCharacter = () => {
        setCharacters([])
    }
    const searchCharacter = event => {
        const newSearch = event.target.value
        setSearch(newSearch)
    }

    const filterCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(search.toLowerCase()))

    function fetchDataAndSetState(url) {
        fetchCharacterPage(url)
            .then(page => {
                setPageInfo(page.info)
                setCharacters(page.results)
            })
            .catch(error => console.error(error.message))
    }

    const fetchMoreCharacter = () => {
        fetchDataAndSetState(pageInfo.next)
    }

    const fetchOtherCharacter = () => {
        fetchDataAndSetState(pageInfo.prev)
    }
    return (
        <>
            <div>
                <Header title="Rick & Morty App"/>
                <Button sx={{backgroundColor: '#9C2525', marginLeft: 1.5}} variant="contained" onClick={loadCharacter}>Load
                    characters</Button>
                <Button sx={{backgroundColor: '#9C2525', marginLeft: 1.5}} variant="contained" onClick={clearCharacter}>Clear
                    characters</Button>
                <Button sx={{backgroundColor: '#9C2525', marginLeft: 1.5}} variant="contained" onClick={fetchMoreCharacter}>Next
                    Page</Button>
                <Button sx={{backgroundColor: '#9C2525', marginLeft: 1.5}} variant="contained" onClick={fetchOtherCharacter}>Prev
                    Page</Button>
                <input type={"text"} onChange={searchCharacter} value={search}/>
                <CharacterGallery characters={filterCharacters}/>
            </div>
        </>
    );
}

export default App;