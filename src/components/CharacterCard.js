import "./CharacterCard.css"
export default function CharacterCard(props) {

    const character = props.character

    return (
        <>
            <div className="character-card">
                <img src={character.image} alt="logo character" className="character-card__image"/>
                <div className="character-card__content">
                    <h3 className="character-card__name">{character.name}</h3>
                    <div className="character-card__originName">{character.origin.name}</div>
                </div>
            </div>
        </>
    )
}