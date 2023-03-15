import React from 'react';
import { Text, View } from 'react-native';
import Button from 'components/Button';

const ChooseMinifigScreen: React.FC = () => (
  <View>
    <Text>Choose minifig screen</Text>
    <Button label='xd' onPress={() => undefined} isDisabled />
  </View>
);

export default ChooseMinifigScreen;
