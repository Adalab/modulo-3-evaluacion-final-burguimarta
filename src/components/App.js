import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';
import { LeapFrog } from '@uiball/loaders'


import getApiData from '../services/wowApi';
import ls from '../services/localStorage';
import MovieSceneList from './MovieSceneList';
import MovieSceneDetail from './MovieSceneDetail';
import InputSearch from './InputSearch';

import '../styles/App.scss';
import '../styles/Reset.scss';

const App = () => {
  const [dataScene, setDataScene] = useState(ls.get("dataScene", []) || []);
  const [filterMovie, setFilterMovie] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [loading, setLoading] = useState(false);
  
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

      getApiData().then((dataFromApi) => {
        handleLoading(false);
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

  const {pathname} = useLocation();
  const dataPath = matchPath("/movie/:movieId", pathname);

  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const movieFound = wowData.find ((item) => item.id === parseInt(movieId));

  return (
    <>
      <h1 className="owen__title">Owen Wilson's Wow</h1>
      <InputSearch handleFilterMovie={handleFilterMovie} handleFilterYear={handleFilterYear} years={renderYears} yearSelected={filterYear}/>

      {loading && <>
        <div className="wrapperLoading">
          <LeapFrog className="loading" size={75} speed={4} color="#232323" />
        </div>
      </>}

      <Routes>
        {/* No se meten los inputs -> InputSearch porque en los apuntes dice que los inputs siempre se pintan en todas las rutas */}
        <Route path="/" element={
          <>
            <MovieSceneList movies={wowData} />
            {wowData.length === 0 && !loading && <p className='withoutResult'>No hay resultados de {filterMovie}</p>}
          </>
        }/>

        <Route path="/movie/:movieId" element={
          <>
            {movieFound !== undefined &&  <MovieSceneDetail movie={movieFound}/>}
            {movieFound === undefined &&  <p>La escena que buscas no existe</p>}
          </>
        }/>

      </Routes>
    </>
  );
};

export default App;