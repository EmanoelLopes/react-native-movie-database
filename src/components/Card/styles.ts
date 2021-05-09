import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#333',
    flex: 1,
    height: 220,
    margin: 5,
    width: 160,
  },
  image: {
    alignItems: 'center',
    borderRadius: 4,
    height: '100%',
    justifyContent: 'flex-end',
    resizeMode: 'cover',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    backgroundColor: 'rgba(0, 0, 0, .5)',
    width: '100%',
    padding: '10px',
  },
});