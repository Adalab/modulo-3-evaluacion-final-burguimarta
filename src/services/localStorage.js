const get = (key, defaultData) => {
  const data = localStorage.getItem(key);
  if (data === null) {
    return defaultData;
  } else {
    return JSON.parse(data);
  }
};

const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const remove = (key) => {
    localStorage.removeItem(key);
};
  
const clear = () => {
    localStorage.clear();
};

const ls = {
  get: get,
  set: set,
  remove: remove,
  clear: clear
};

export default ls;
