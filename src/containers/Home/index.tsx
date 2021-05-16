import React from 'react';
import useSWR from 'swr';
import { Text, View, ScrollView, FlatList } from 'react-native';
import Card from '@components/Card';
import { fetcher } from '@utils/fetcher';
import { endpoints } from '@services/endpoints';
import { styles } from './styles';

export default function HomeContainer(): JSX.Element {
  const { data: series } = useSWR(endpoints.tv.popular, fetcher);
  const { data: movies } = useSWR(endpoints.movie.popular, fetcher);
  const { data: people } = useSWR(endpoints.people.popular, fetcher);

  const backdropURI = 'https://image.tmdb.org/t/p/w500';
  interface ItemProps {
    name: string;
    poster_path: string;
    profile_path: string;
  }
 
  const renderItem:React.FC<ItemProps> = ({ item }: ItemProps) => (
    <Card
      title={item.name ?? item.title}
      image={{ uri: `${backdropURI}${item?.poster_path ?? item?.profile_path}` }}
    />
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Os Mais Populares</Text>
      <View style={styles.section}>
        <Text style={styles.title}>No Cinema</Text>
        <FlatList
          data={movies?.results}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Na TV</Text>
        <FlatList
          data={series?.results}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Pessoas</Text>
        <FlatList
          data={people?.results}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
        />
      </View>
    </ScrollView>
  );
}
