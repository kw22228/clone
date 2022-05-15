import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);

    const getDetail = useCallback(async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();

        setLoading(prev => !prev);
        setDetail(json.data.movie);
    }, [id]);

    useEffect(() => {
        getDetail();
    }, [getDetail]);

    return <div>{loading ? <h1>Loading...</h1> : <MovieDetail {...detail} />}</div>;
}

export default Detail;
