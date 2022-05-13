import { useState, useEffect } from 'react';

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year&page=1'
            )
        ).json();

        setMovies(json.data.movies);
        setLoading(prev => !prev);
    };
    useEffect(() => {
        getMovies();
    }, []);

    const Movies = () => {
        return (
            <>
                {movies.map(({ id, title, summary, genres, large_cover_image }) => {
                    return (
                        <div key={id} style={{ backgroundImage: `url(${large_cover_image})` }}>
                            <h2>{title}</h2>
                            <p>{summary}</p>
                            <ul>
                                {genres?.map((genre, index) => (
                                    <li key={index}>{genre}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </>
        );
    };

    return <div>{loading ? <h1>Loading...</h1> : <Movies />}</div>;
}

export default App;
