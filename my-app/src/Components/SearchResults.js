
import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"

export default function SearchMovies(){

    const [printmovies, setPrint] = useState([])
    const [input, setInput] = useState("james-bond")

    const findMovies = async() =>{
        const response = await fetch(`https://www.omdbapi.com/?i=james+bond&apikey=ef671f4e&type=movie&s=${input.replace(" ", "-", "-")}`)//https://www.omdbapi.com/?s=james+bond&apikey=ef671f4e
        const data = await response.json()
        console.log("data search", data?.Search)
        const Search_for_Movie = data?.Search
        const Ids = Search_for_Movie.map((items => items?.imdbID))
        const MovieData = await Promise.all(Ids.map(id => (
            fetch(`https://www.omdbapi.com/?apikey=ef671f4e&type=movie&i=${id}`)
        )))
        const movies = await Promise.all(MovieData.map(RespMovie => (
            RespMovie.json()
        ))) 
        setPrint(movies)
        console.log("data", data)
    }
    useEffect(() =>{
        findMovies()
    },[])
    console.log("outputmovies", printmovies)
    console.log("input", input)

    return(
        <><nav>
         <input className="Input" type="text" placeholder="Search here..." name="search" onChange={e => setInput(e.target.value)} />
            <button onClick={findMovies}>Search!</button>
        </nav>    
       <section className="Movie_Container" >
            {printmovies?.map((item, index) =>(
                <MovieCard key={index} title={item?.Title} img={item?.Poster}/>
            ))}
        </section></>    
    )
}