import React from 'react';
import { styles } from './styles';
import { Text, View } from 'react-native';

export default function Home():JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

