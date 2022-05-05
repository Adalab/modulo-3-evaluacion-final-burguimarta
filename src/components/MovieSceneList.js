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

export default MovieSceneList;