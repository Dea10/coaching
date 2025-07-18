import { useEffect, useState } from 'react'
import './App.css'
import Pagination from './components/Pagination';

interface Pokemon {
  name: string;
  url: string;
}

function App() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [paginationControl, setPaginationControl] = useState({ offset: 0, limit: 10 })
  const [isLoading, setIsLoading] = useState(true)
  const { limit, offset } = paginationControl

  const fetchPokemonList = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
    const data = res.json();

    return data;
  }

  const handleOnNext = () => {
    console.log('next')
  }

  const handleOnPrev = () => {
    console.log('prev')
  }

  useEffect(() => {
    fetchPokemonList().then(res => {
      setPokemonList(res.results)
      setIsLoading(false)
    }).catch
  }, [paginationControl])

  return (
    <div className='container'>
      <h1>Choose a Pokemon!</h1>
      <ul className='pokemon-list'>
        {
          pokemonList.length > 0 && pokemonList.map((pokemon) => (
            <li className='pokemon-list-item' key={pokemon.name}>{pokemon.name}</li>
          ))
        }
      </ul>

      <Pagination
        onNext = {handleOnNext}
        onPrev = {handleOnPrev}
      />
    </div>
  )
}

export default App
