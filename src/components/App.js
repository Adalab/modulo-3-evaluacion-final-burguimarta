import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

//Import para el loading
import { LeapFrog } from '@uiball/loaders';

//Imports para los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

// imports js
import getApiData from '../services/wowApi';
import ls from '../services/localStorage';
import MovieSceneList from './MovieSceneList';
import MovieSceneDetail from './MovieSceneDetail';
import InputSearch from './InputSearch';

// imports SASS
import '../styles/App.scss';
import '../styles/Reset.scss';

// imports images
import HappyOwen from '../images/wowOwen.jpg'
import Heart from '../images/heart.png'


const App = () => {
  // Variables de Estado
  const [dataScene, setDataScene] = useState(ls.get("dataScene", []) || []);
  const [filterMovie, setFilterMovie] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [loading, setLoading] = useState(false);

  // Añado a la libreria de iconos los de las marcas...
  library.add(fab);
  
  // Handle para los liftings
  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };
  const handleFilterYear = (value) => {
    setFilterYear(value);
  };
  const handleLoading = (value) => {
    setLoading(value);
  };

    // Me traigo los datos de la API
  useEffect(() => {
    if (dataScene.length === 0) {
      handleLoading(true);

      // Para que se vea el trabajo del loading!!
      setTimeout(function () {
        handleLoading(false);
      }, 5000);

      getApiData().then((dataFromApi) => {
        //handleLoading(false);
        setDataScene(dataFromApi);
        ls.set("dataScene", dataFromApi);
      });
    }
  });

  const wowData = dataScene
    //Filtro por el texto de busqueda
    .filter(movie => {
      return movie.title.toLowerCase().includes(filterMovie.toLowerCase()); 
    })
    //Filtro por el año con condicional ternario
    .filter (movie => {
      return filterYear === '' ? true : movie.year === filterYear;
    });

  // Recorremos los años de las peliculas en la lista, lo pasamos a Set para quitar duplicados, copiamos los datos del Set a una array, y lo ordenamos
  // El objeto Set permite almacenar valores únicos de cualquier tipo, incluso valores primitivos o referencias a objetos.
  const renderYears = [...new Set(
    wowData.map(data => {
        return data.year;
    })
  )].sort();

  // Para las rutas, useLocation y matchPath para poner las rutas dinámicas
  const {pathname} = useLocation();
  const dataPath = matchPath("/movie/:movieId", pathname);

  // Condicional ternario para que la ruta coja el params cuando esté fuera de la página principal
  const movieId = dataPath !== null ? dataPath.params.movieId : null;

  // Para buscar la ruta de la peli cuando se obtenga el path
  const movieFound = wowData.find ((item) => item.id === parseInt(movieId));

  return (
    <div className='app'>
      <header className='header'>
        <a className='header__linkToHome' href="/"><h1 className="header__title">Owen Wilson's Wow</h1></a>
        <img className="header__image"src={HappyOwen} alt="Happy Owen" />
      </header>
      
      <InputSearch handleFilterMovie={handleFilterMovie} handleFilterYear={handleFilterYear} years={renderYears} yearSelected={filterYear}/>

      {loading && <>
        <div className="wrapperLoading">
          <LeapFrog className="loading" size={75} speed={4} color="#ffb5b5" />
          <p className='loading__text'>Loading...</p>
        </div>
      </>}

      <Routes>
        {/* No se meten los inputs -> InputSearch porque en los apuntes dice que los inputs siempre se pintan en todas las rutas */}
        <Route path="/" element={
          <>
            <MovieSceneList movies={wowData} />
            {wowData.length === 0 && !loading && <p className='error'> Sorry {filterMovie} not found. Try something else</p>}
          </>
        }/>

        <Route path="/movie/:movieId" element={
          <>
            {movieFound !== undefined &&  <MovieSceneDetail movie={movieFound}/>}
            {movieFound === undefined &&  <p className='error'>The scene you are looking for does not exist </p>}
          </>
        }/>

      </Routes>

      <footer className='footer'>
        <p className='footer__text'>Made with <img className="footer__img" src={Heart} alt="Love" /> by Marta <a href="https://github.com/burguimarta"><FontAwesomeIcon icon={['fab', 'github']} pulse size="lg" /></a> - <a href="https://twitter.com/burguimarta"><FontAwesomeIcon icon={['fab', 'twitter']} pulse size="lg" /></a></p>
      </footer>
    </div>
  );
};

export default App;