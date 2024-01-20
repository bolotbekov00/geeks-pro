import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import FetchImg from "./components/FetchImg.jsx";

function App() {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        try {
            const pokemon = async () => {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
                setPokemon(response.data.results)
            }
            pokemon()
        } catch (e) {
            console.log(e)
        }

    }, [])

    return (
        <div className="block">
            {pokemon.map((poke, index) => (
                <div key={index} className="block-poke">
                    <FetchImg url={poke.url} />
                    <h3 className="title">{poke.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default App
