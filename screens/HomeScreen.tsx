import React from 'react';
import { View, Button } from 'react-native';
import { NavigationProps } from '../type';

const HomeScreen: React.FC<NavigationProps<'Screen1'>> = ({ navigation }) => {
  return (
    <View>
      <Button title="Ir a Screen1" onPress={() => navigation.navigate('Screen1')} />
    </View>
  );
};

export default HomeScreen;
