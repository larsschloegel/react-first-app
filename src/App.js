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
        fetchDataAndSetStatus()
    }, [search])

    function fetchDataAndSetStatus(url) {
        fetchCharacterPage(url)
            .then(response => {
                setPageInfo(response.info)
                setCharacters(response.results)
            })
            .catch(error => console.error(error.message))
    }

    const fetchNextCharacters = () => {
        fetchDataAndSetStatus(pageInfo.next)
    }

    const fetchPrevCharacters = () => {
        fetchDataAndSetStatus(pageInfo.prev)
    }

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

    const errorCard =  [{name : "No Character found", image: "/img.png", origin: {name:""}}]

    return (
        <>
            <div>
                <Header title="Rick & Morty App"/>
                <Button sx={{backgroundColor: '#9C2525', marginLeft: 1.5, color: 'primary'}} variant="contained" onClick={loadCharacter}>Load characters</Button>
                <Button sx={{backgroundColor: '#9C2525', marginLeft: 1.5}} variant="contained" onClick={clearCharacter}>Clear characters</Button>
                <Button sx={{backgroundColor: '#9C2525', marginLeft: 1.5}} variant="contained" onClick={fetchPrevCharacters} disabled={!pageInfo.prev}>Prev Page</Button>
                <Button sx={{backgroundColor: '#9C2525', marginLeft: 1.5}} variant="contained" onClick={fetchNextCharacters} disabled={!pageInfo.next}> Next Page</Button>
                <input type={"text"} onChange={searchCharacter} value={search} />
                {filterCharacters.length ? <CharacterGallery characters={filterCharacters}/> : <CharacterGallery characters={errorCard}/>}
            </div>
        </>
    );
}

export default App;