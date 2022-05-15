import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

export default function Home() {
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

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                movies.map(movie => (
                    <Movie key={movie.id} {...movie} /> //key는 map안에서 써야함
                ))
            )}
        </div>
    );
}
