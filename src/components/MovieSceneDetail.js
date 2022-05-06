import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

function MovieSceneDetail () {
    const {movieId} = useParams();

    return (
        <>{movieId}</>
    );
}

export default MovieSceneDetail;