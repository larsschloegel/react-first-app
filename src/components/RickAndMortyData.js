//import React, {useState, useEffect} from "react";
import useFetch from "react-fetch-hook";

/*export default function RickAndMortyData() {
    const {isLoading, error, data} = useFetch("https://rickandmortyapi.com/api/character");

    if (isLoading) return "Loading...";
    if (error) return "Error!";

    return (
        <pre> {JSON.stringify(data, null, 2)}</pre>
    );
}*/

export default function RickAndMortyData() {
    const getRequest = () => {
        return fetch("https://rickandmortyapi.com/api/character")
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw `error ${response.status}`
            })
            .catch((error) => console.error(error))
    }
    //console.log(getRequest().then((data) => data.results))
}