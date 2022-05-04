import { Link } from 'react-router-dom';
import '../styles/components/MovieSceneItem.scss'
function MovieSceneItem (props) {
    return (
        <Link className="card__link"to={`/user/${props.movie.id}`}>
            <img
                className="card__image"
                alt={props.movie.title}
                src={props.movie.poster}
            />
            <h4 className="card__title">{props.movie.title}</h4>
        </Link>
    );
}

export default MovieSceneItem;