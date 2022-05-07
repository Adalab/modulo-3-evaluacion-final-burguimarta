import PropTypes from "prop-types";

import '../styles/components/MovieSceneDetail.scss';

function MovieSceneDetail (props) {
    return (
        <section>
                <div>
                <img
                    className="card__image"
                    alt={props.movie.title}
                    src={props.movie.poster}
                />
                <h4 className="card__title">{props.movie.title}</h4>
                <p className='card__year'>{props.movie.year}</p>
                <p className='card__quote'>{props.movie.full_line}</p>
                <p className='card__director'>{props.movie.director}</p>

                <audio className="card__audio" controls>
                    <source src={props.movie.audio} type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>

                </div>
        </section>
    );
}

// PropTypes, que define los tipos de los valores de los props
MovieSceneDetail.propTypes = {
    movie: PropTypes.object
};

export default MovieSceneDetail;