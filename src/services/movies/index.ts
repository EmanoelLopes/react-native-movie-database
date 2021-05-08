import useSWR from 'swr';
import { TMDB_BASE_URL } from '@env';
import { fetcher } from '@utils/client';

export const categories = {
  popular: 'popular',
  top_rated: 'top_rated',
  now_playing: 'now_playing',
  upcoming: 'up_coming',
};

export const getMovies = (categoryType: string) => useSWR(`${TMDB_BASE_URL}/${categoryType}`, fetcher);


