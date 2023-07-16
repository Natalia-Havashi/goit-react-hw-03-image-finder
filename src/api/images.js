import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '36947214-e67710a045a4cff9982bc6142',
  per_page: 12,
};


export const getImagesSerch = async (query,page) => {
  
  const { data } = await axios.get('', {
    params: {
      q:query,
      page,
    }
  });
  return data;
};




