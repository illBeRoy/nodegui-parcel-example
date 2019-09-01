import * as React from 'react';
import { Renderer, Window, View, Text, Image } from '@nodegui/react-nodegui';

export const App = () => {
  return (
    <Window fixedSize={{ width: 640, height: 480 }} styleSheet={require('./index.scss')}>
      <View id='container'>
        <Image id='logo' src={require('./assets/nodegui.png')} />
        <Text id='text'>Hello, World!</Text>
      </View>
    </Window>
  );
};

Renderer.render(<App />);
