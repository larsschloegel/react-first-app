

export default function CharacterCard(props) {

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
    return (
        <body className="character">
             <h1 className="header__title"> Rick and Morty Gallery</h1>
        </body>
    )
}