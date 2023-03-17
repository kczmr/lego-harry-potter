import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

declare global {
  interface ScreenProps<R, S> {
    navigation?: StackNavigationProp<R, S>;
    route?: RouteProp<R, S>;
  }
}

export {};
