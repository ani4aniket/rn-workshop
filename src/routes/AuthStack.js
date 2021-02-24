import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import BottomTransition from '../routes/Transitions/BottomTransition';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Welcome">
      {/* <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{...BottomTransition}}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
