const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const ID_AUTHOR = import.meta.env.VITE_APP_ID_AUTHOR;

export const getAllDataFromApi = async (endpoint, id) => {
  const url = `${endpoint}?idAuthor=${id}`;

  const res = await fetch(url);

  const data = await res.json();

  return data;
};

export const fetchingDataFromApi = (
  endpoint,
  data,
  method = 'GET'
) => {
  const url = `${BASE_URL}${endpoint}`;

  if (method !== 'GET') {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  return fetch(url);
};
