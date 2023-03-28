import './Styles/Main.css';
import React from 'react';
import MovieSearch from './Components/MovieSearch';

function App() {
  return (
    <div>
      <header>
        <h1>Movie Search</h1> 
      </header>
      <MovieSearch />
    </div>
  );
}

export default App;
