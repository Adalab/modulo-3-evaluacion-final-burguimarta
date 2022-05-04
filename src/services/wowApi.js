const getApiData = () => {
    return fetch('https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50')
      .then((response) => response.json())
      .then((data) => {
        const completeData = data.map((data) => {
          return {
            poster: data.poster,
            title: data.movie,
            full_line: data.full_line,
            year: data.year
          };
        });
        return completeData;
      });
  };
  export default getApiData;
  