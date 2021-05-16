import React from 'react';
import { render } from '@testing-library/react-native';
import Card from '@components/Card';

describe('[Card]', () => {
  const props = {
    title: 'Mortal Kombat',
    image: {
      uri: 'https://image.tmdb.org/t/p/w500/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg',
    },
  };

  it('should render properly', () => {
    expect(render(<Card {...props} />)).toMatchSnapshot();
  });
});
