
import React from 'react';
import './Style/Main.css';
import MovieSearch from './Components/SearchResults';


function App() {
  return (
    <div>
      <header>
        <h1>Ultimate Movie Search!</h1> 
      </header>
      <MovieSearch />
    </div>
  );
}

export default App;