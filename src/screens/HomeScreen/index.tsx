import React from 'react';
import useSWR from 'swr';
import { Text, View } from 'react-native';
import { fetcher } from '@utils/fetcher';
import { endpoints } from '@services/endpoints';
import { styles } from './styles';

export default function Home():JSX.Element {
  const { data: series } = useSWR(endpoints.tv.popular, fetcher);
  const { data: movies } = useSWR(endpoints.movie.popular, fetcher);
  const { data: people } = useSWR(endpoints.people.popular, fetcher);

  console.log(series, movies, people);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

