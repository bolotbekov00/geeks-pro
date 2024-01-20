import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        try {
            const pokemon = async () => {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
                setPokemon(response.data.results)
                // console.log(response.data.results)
            }
            pokemon()
        } catch (e) {
            console.log(e)
        }

    }, [])

    return (
        <div className="block">
            {pokemon.map((poke) => (
                <div key={poke.name} className="block-poke">
                    <img src={poke.url}  alt="img-pokemon"/>
                    <h3 className="title">{poke.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default App
