import * as React from 'react';
import { styles } from './styles';

import { Text, View } from '@components/Themed';

export default function Home():JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

