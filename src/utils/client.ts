import axios from 'axios';
import { TMDB_BASE_URL, TMDB_API_KEY } from '@env';

const params = {
  api_key: TMDB_API_KEY,
  language: 'pt-BR',
  page: 1,
};

export const client = axios.create({
  baseURL: TMDB_BASE_URL,
  params,
});
