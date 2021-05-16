import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { styles } from './styles';

type CardProps = {
  title: string;
  image: object;
};

export function Card({ title, image, ...rest }: CardProps) {
  return (
    <View style={styles.card} {...rest}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </View>
  );
}
