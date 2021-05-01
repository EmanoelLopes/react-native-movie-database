import { MonoText } from '@components/StyledText';
import * as React from 'react';
import renderer from 'react-test-renderer';


it(`renders correctly`, () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});
