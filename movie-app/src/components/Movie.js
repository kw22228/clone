import PropTypes from 'prop-types';

export default function Movie({ title, summary, genres, large_cover_image }) {
    return (
        <div style={{ backgroundImage: `url(${large_cover_image})` }}>
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres?.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    large_cover_image: PropTypes.string.isRequired,
};
