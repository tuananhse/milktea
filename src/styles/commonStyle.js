import {Colors, Mixins} from '../styles';
import {
  BG,
  BG_HEADER,
  GRAY_DARK,
  GRAY_LIGHT,
  GRAY_MEDIUM,
  PRIMARY,
  PRIMARY_LIGHT,
  SECONDARY,
  TEXT_BORDER,
  TEXT_PLACEHOLDER,
  TRANSPARENT,
  WHITE,
} from './colors';
import {h_scale, scaleSize, w_scale} from './mixins';

const guidelineBaseWidth = 375;

export default {
  /**
   * Base
   */
  flex: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  containerSafeAreaView: {
    flex: 1,
    backgroundColor: WHITE,
  },
  imgLoginHeader: {
    width: w_scale(100),
    height: h_scale(50),
  },
  padding: {
    paddingLeft: scaleSize(20),
    paddingRight: scaleSize(20),
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
  },
  circleWhite: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: GRAY_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleMediumWhite: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: GRAY_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnAccumulatePoints: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: GRAY_DARK,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  btnCircle: {
    with: 50,
    borderRadius: 25,
    backgroundColor: GRAY_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icOrderSuccess: {
    width: scaleSize(120),
    height: scaleSize(120),
  },
  btnHistory: {
    backgroundColor: PRIMARY_LIGHT,
    borderRadius: 20,
    color: 'white',
  },
  btnHistoryUnActive: {
    backgroundColor: GRAY_LIGHT,
    borderRadius: 20,
    color: 'white',
  },
  barcode: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  iconSmall: {
    width: 20,
    height: 20,
  },
  btnClose: {
    zIndex: 10,
    position: 'absolute',
    right: 0,
    padding: 30,
  },
  iconCircleBg: {
    backgroundColor: GRAY_LIGHT,
    padding: 6,
    borderRadius: 10,
  },
  bgClose: {
    backgroundColor: TRANSPARENT,
    justifyContent: 'center',
  },
  tag: {
    padding: 10,
    borderRadius: 20,
  },
  tagActive: {
    backgroundColor: PRIMARY_LIGHT,
    padding: 10,
    borderRadius: 20,
  },
  btnCoupon: {
    backgroundColor: GRAY_LIGHT,
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 10,
    height: 60,
  },
  icMedium: {
    width: 40,
    height: 40,
  },
};
