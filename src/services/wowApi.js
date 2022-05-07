const getApiData = () => {
  return fetch("https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50&sort=movie")
    .then((response) => response.json())
    .then((data) => {
      const completeData = data.map((data, index) => {
        return {
          id: index,
          poster: data.poster,
          title: data.movie,
          full_line: data.full_line,
          year: data.year,
          director: data.director,
          video: data.video,
          audio: data.audio,
        };
      });

      return completeData;
    });
};

export default getApiData;
