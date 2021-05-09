import React from 'react';
import { View } from 'react-native';
import HomeContainer from '@containers/Home';
import { styles } from './styles';

export default function Home():JSX.Element {
  return (
    <View style={styles.screen}>
      <HomeContainer />
    </View>
  );
}

