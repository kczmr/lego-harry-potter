import React from 'react';
import { Text, View } from 'react-native';
import Button from 'components/Button';
import Box from 'components/Box';
import MinifigTile from 'components/MinifigTile';

const ChooseMinifigScreen: React.FC = () => (
  <View>
    <Text>Choose minifig screen</Text>
    <Button label='xd' onPress={() => undefined} />
    <Box mt='xs' />
    <MinifigTile
      isActive
      title='Harry Potter'
      imageUrl='https://cdn.rebrickable.com/media/sets/fig-000457/60621.jpg'
    />
  </View>
);

export default ChooseMinifigScreen;
