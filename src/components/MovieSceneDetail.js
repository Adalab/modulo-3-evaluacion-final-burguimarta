import { checkPropTypes } from 'prop-types';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/components/MovieSceneDetail.scss';

function MovieSceneDetail (props) {

    const {movieId} = useParams();

    return (
        <section> {movieId}
            <Link>
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
                <audio className="card__audio" src={props.movie.audio}>Icono que quiera</audio>
                </div>
            </Link>
        </section>
        
    );
}

export default MovieSceneDetail;