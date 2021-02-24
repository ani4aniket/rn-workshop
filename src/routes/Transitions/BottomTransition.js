import {TransitionSpecs, CardStyleInterpolators} from '@react-navigation/stack';

const BottomTransition = {
  gestureEnabled: true,
  gestureDirection: 'vertical',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
};

export default BottomTransition;
