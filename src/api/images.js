import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {};

export const getAllImeges = async () => {
  axios.defaults.params.key = '36947214-e67710a045a4cff9982bc6142';
  const { data } = await axios();
  return data;
};

export const getImagesSerch = async query => {
  axios.defaults.params.key = '36947214-e67710a045a4cff9982bc6142';
  const { data } = await axios(`?image_type=${query}`);
  return data;
};
