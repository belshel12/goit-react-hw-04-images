import axios from 'axios';

async function getApi(searchValue, page = 1) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '32980017-bfe9b13623cd5fda61d70a35c';

  const resp = await axios(
    `${BASE_URL}?key=${API_KEY}&q=${searchValue}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return resp.data;
}

export { getApi };
