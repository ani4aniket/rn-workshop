import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

export default function NavigationRoute() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <NavigationContainer>
      {!isLoggedIn ? <AuthStack /> : <MainStack />}
    </NavigationContainer>
  );
}
