import React from 'react';
import {View} from 'react-native';

/*
 * import main layout style sheet
 *
 */
import style from '../MainLayout/style';

const Content = ({children}) => {
  return <View style={[style.content_container]}>{children}</View>;
};

export default Content;
