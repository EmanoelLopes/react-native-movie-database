import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function NotFoundScreen({ navigation }): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn&apos;t exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}
