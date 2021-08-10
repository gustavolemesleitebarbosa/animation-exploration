import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home/Home';
import ScoreAnimation from '../pages/ScoreAnimation/ScoreAnimation';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#312e38'},
    }}>
    <App.Screen name="Home" component={Home} />
    <App.Screen name="ScoreAnimation" component={ScoreAnimation} />
  </App.Navigator>
);
export default AppRoutes;
