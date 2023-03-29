import React from 'react';

//export default 
function MovieList(props) {
    const { movies } = props;

    return (
        <div className='PosterCard'>
            {movies.map(movie => (
                <article key={movie.imdbID}>
                    <img src={movie.Poster} alt={movie.Title} />
                    <div>
                        <h4>{movie.Title}</h4>
                        <p className='CardYear'>Year: {movie.Year}</p>
                        <p className='CardType'>Type: {movie.Type}</p>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default MovieList;