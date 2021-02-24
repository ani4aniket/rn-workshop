import React from 'react';
import {View, Platform, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Content from '../Content/Content';
import theme from '../../../constants/lightTheme';

/*
 * import main layout style sheet
 *
 */
import style from './style';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;

const MainLayout = ({navigation, children}) => {
  return (
    <View
      style={[
        style.screen_container,
        Platform.OS === 'ios' && {marginVertical: hp('4%')},
      ]}>
      {Platform.OS === 'ios' ? (
        <StatusBar
          translucent
          backgroundColor={theme.backgroundColor}
          barStyle="dark-content"
        />
      ) : null}

      <Content>{children}</Content>
    </View>
  );
};

export default MainLayout;
