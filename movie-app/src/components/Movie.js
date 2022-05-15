import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, title, summary, genres, large_cover_image }) {
    return (
        <div style={{ backgroundImage: `url(${large_cover_image})` }}>
            <Link to={`/movie/${id}`}>
                <h2>{title}</h2>
                <p>{summary}</p>
                <ul>
                    {genres?.map((genre, index) => (
                        <li key={index}>{genre}</li>
                    ))}
                </ul>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    large_cover_image: PropTypes.string.isRequired,
};

export default Movie;
