const PokemonCard = (props) => (
    <div className="card">
        <p className="card-title">{props.name}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} />
        <p>Type: {props.type}</p>
        <p>EXP: {props.base_experience}</p>
    </div>
)

export default PokemonCard;