import PropTypes from "prop-types";

import MovieSceneItem from './MovieSceneItem';

import '../styles/components/MovieSceneList.scss'

function MovieSceneList (props) {
    const movieElements = props.movies.map((movie) => {
        return (
          <li className="card" key={movie.id}>
            <MovieSceneItem movie={movie} />
          </li>
        );
    });

    return ( 
        <section>
            <ul className="cards">{movieElements}</ul>
        </section>
    );
}

// PropTypes, que define los tipos de los valores de los props
MovieSceneList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieSceneList;