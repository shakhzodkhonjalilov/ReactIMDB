import React, { useEffect, useState } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg'

// e6b9604a

const API_URL = 'http://www.omdbapi.com?apikey=e6b9604a'
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
 
    const search = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search)
    }

    useEffect(() => {
        search('Batman')
    }, [])
    return (
      <div className="app">
          <h1>MovieLand</h1>
          <div className="search">
            <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <img src={SearchIcon} alt="Search" onClick={() => {

                search(searchTerm)
                setSearchTerm('')
            }}/>
          </div>

        {
            movies?.length > 0 ? (  
            <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
           </div>) : (
                <div className="empty">
                   <h2>No Movies Found</h2>
                </div>
           )
        }
      </div>
    )
}

export default App;