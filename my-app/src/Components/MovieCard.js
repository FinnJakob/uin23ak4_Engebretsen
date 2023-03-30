export default function MovieCard({title, img}){
    return (
        <article className="Poster_Card">
            
            <img src={img === "N/A" ? "https://placehold.co/300x400/png" : img} alt={title} />
            <ul><li><h2>{title}</h2></li>
                <li><h4>Theme</h4></li>
                <li><h5>More information</h5></li>
            
                <li><p>Actors & actresses:</p></li>
                <li><p>Year:</p></li>
                <li><p>Director:</p></li> 
                <li><p>Genre:</p></li>   
            </ul>    
        </article>
    )
}