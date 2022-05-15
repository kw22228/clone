import { Link } from 'react-router-dom';

function MovieDetail({ title, year, description_full, background_image, genres, like_count }) {
    return (
        <>
            <img src={background_image} />
            <h1>
                {title} ({year})
            </h1>
            <h3>Like: {like_count}</h3>
            <p>{description_full}</p>
            <ul>
                {genres?.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))}
            </ul>

            <Link to={`/`}>Back</Link>
        </>
    );
}

export default MovieDetail;
