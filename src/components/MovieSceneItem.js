import PropTypes from "prop-types";

import { Link } from 'react-router-dom';

import '../styles/components/MovieSceneItem.scss'

function MovieSceneItem (props) {
    return (
        <Link className="card__link" to={`/movie/${props.movie.id}`}>
            <div className="card__wrapImage">
                <img
                    className="card__image"
                    alt={props.movie.title}
                    src={props.movie.poster}
                />
            </div>
            <div className="card__wrapContent">
                <h4 className="card__title">{props.movie.title}</h4>
                <p className='card__year'>{props.movie.year}</p>
                <p className='card__quote'>"{props.movie.full_line}"</p>
            </div>
        </Link>
    );
}

// PropTypes, que define los tipos de los valores de los props
MovieSceneItem.propTypes = {
    movie: PropTypes.object.isRequired
};

export default MovieSceneItem;