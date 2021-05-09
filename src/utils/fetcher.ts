import { client } from '@utils/client';

export const fetcher = async (url: string) => await client.get(url).then(res => res.data);