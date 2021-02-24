import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import BottomTransition from './Transitions/BottomTransition';
import LeftTransition from './Transitions/LeftTransition';
import Home from '../screens/Home';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animationEnabled: false}}>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Create Post" component={CreatePost} />
      <Stack.Screen
        name="PostDetails"
        component={PostDetails}
        options={{...LeftTransition, animationEnabled: true}}
      />
      <Stack.Screen name="Post Details" component={PostDetails} />
      <Stack.Screen
        name="Watch List"
        component={WatchList}
        options={{...LeftTransition, animationEnabled: true}}
      />
      <Stack.Screen name="Bookmarks" component={Bookmark} />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{...LeftTransition, animationEnabled: true}}
      /> */}
    </Stack.Navigator>
  );
}

export default MainStack;
