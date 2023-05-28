import PokemonCard from "./PokemonCard";

const Pokedex = ({ pokemon }) => {
    return (
        <>
            {pokemon.map((pokemonData) => (
                <PokemonCard
                    id={pokemonData.id}
                    name={pokemonData.name}
                    type={pokemonData.type}
                    base_experience={pokemonData.base_experience} />
            ))}
        </>
    )
}

export default Pokedex;