
import { useState } from 'react'

function App() {
  const [movie, setMovie] = useState("")
  const [movies, setMovies] = useState([])

  const addMovie = () => {
    if (movie.trim() !== "") {
      setMovies([...movies, movie])
      setMovie("")
    }
  }

  const removeMovie = (index) => {
    setMovies(movies.filter((m, i) => i !== index))
  }

  return (
    <div>
      <h2>Favourite Movies List</h2>

      <input
        type="text"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Enter movie name"
      />

      <button onClick={addMovie}>
        Add Movie
      </button>

      <ul>
        {movies.map((m, index) => (
          <li key={index}>
            {m}
            <button onClick={() => removeMovie(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
