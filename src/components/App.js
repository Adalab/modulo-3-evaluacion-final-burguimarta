import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';
import { Orbit } from '@uiball/loaders'


import getApiData from '../services/wowApi';
import localStorage from '../services/localStorage';
import MovieSceneList from './MovieSceneList';
import MovieSceneDetail from './MovieSceneDetail';
import InputSearch from './InputSearch';

import '../styles/App.scss';
import '../styles/Reset.scss';

const App = () => {
  const [dataScene, setDataScene] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');
  const [filterYear, setFilterYear] = useState('');
  
  // Me traigo los datos de la API
  useEffect(() => {
    if (dataScene.length === 0) {
      getApiData().then((dataFromApi) => {
        setDataScene(dataFromApi);
      });
    }
  });
  
  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };
  const handleFilterYear = (value) => {
    setFilterYear(value);
  };

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
  const renderYears = [...new Set(
    wowData.map(data => {
        return data.year;
    })
  )].sort();

// El objeto Set permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u referencias a objetos.
  const {pathname} = useLocation();
  //const dataPath = matchPath("/movie/:movieId");
  //console.log(dataPath);
  return (
    <>
      <h1 className="owen__title">Owen Wilson's Wow</h1>
      <InputSearch handleFilterMovie={handleFilterMovie} handleFilterYear={handleFilterYear} years={renderYears} yearSelected={filterYear}/>

      <Routes>
        {/* No se meten los inputs -> InputSearch porque en los apuntes dice que los inputs siempre se pintan en todas las rutas */}
        <Route path="/" element={
          <MovieSceneList movies={wowData} />
        }/>

        <Route path="/movie/:movieId" element={
          <MovieSceneDetail />
        }/>

      </Routes>
    </>
  );
};

export default App;