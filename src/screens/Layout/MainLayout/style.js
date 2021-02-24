import theme from '../../../constants/lightTheme';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  screen_container: {
    flex: 1,
    height: hp('100%'),
    backgroundColor: theme.backgroundColor,
    position: 'relative',
  },

  content_container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
    position: 'relative',
    marginTop: hp('6%'),
    paddingTop: hp('0%'),
  },

  common_block: {
    width: '100%',
    justifyContent: 'center',
  },

  h1: {
    fontFamily: 'Roboto-Regular',
    fontSize: hp('3%'),
  },

  h1_lg: {
    fontFamily: 'Roboto-Medium',
    fontSize: hp('5%'),
  },

  text_x_lg: {
    fontSize: hp('3%'),
  },

  text_lg: {
    fontSize: hp('2.3%'),
  },

  text_md: {
    fontSize: hp('1.9%'),
  },

  text_sm: {
    fontSize: hp('1.8%'),
    lineHeight: hp('2.4%'),
  },

  text_sm_x: {
    fontSize: hp('1.5%'),
  },

  text_xsm: {
    fontSize: hp('1.3%'),
  },

  text_weight_light: {
    fontFamily: 'Roboto-Light',
  },

  text_weight_regular: {
    fontFamily: 'Roboto-Regular',
  },

  text_weight_bold: {
    fontFamily: 'Roboto-Medium',
  },

  card: {
    backgroundColor: theme.mutedLight,
    padding: wp('2%'),
    justifyContent: 'center',
    borderRadius: wp('1%'),
  },

  ml_1: {
    marginLeft: wp('1%'),
  },

  ml_2: {
    marginLeft: wp('2%'),
  },

  ml_3: {
    marginLeft: wp('3%'),
  },

  ml_4: {
    marginLeft: wp('4%'),
  },

  mr_1: {
    marginRight: wp('1%'),
  },

  mr_2: {
    marginRight: wp('2%'),
  },

  mr_3: {
    marginRight: wp('3%'),
  },

  mr_4: {
    marginRight: wp('4%'),
  },

  mt_1: {
    marginTop: wp('1%'),
  },

  mt_2: {
    marginTop: wp('2%'),
  },

  mt_3: {
    marginTop: wp('3%'),
  },

  mt_4: {
    marginTop: wp('4%'),
  },

  mt_5: {
    marginTop: wp('5%'),
  },

  mb_1: {
    marginBottom: wp('1%'),
  },

  mb_2: {
    marginBottom: wp('2%'),
  },

  mb_3: {
    marginBottom: wp('3%'),
  },

  mb_4: {
    marginBottom: wp('4%'),
  },

  mb_5: {
    marginBottom: wp('5%'),
  },

  pl_1: {
    paddingLeft: wp('1%'),
  },

  pl_2: {
    paddingLeft: wp('2%'),
  },

  pl_3: {
    paddingLeft: wp('3%'),
  },

  pr_1: {
    paddingRight: wp('1%'),
  },

  pr_2: {
    paddingRight: wp('2%'),
  },

  pr_3: {
    paddingRight: wp('3%'),
  },

  col_1: {
    flex: 1,
  },

  col_2: {
    flex: 2,
  },

  col_3: {
    flex: 3,
  },

  col_4: {
    flex: 4,
  },

  col_5: {
    flex: 5,
  },

  col_6: {
    flex: 6,
  },

  col_7: {
    flex: 7,
  },

  col_8: {
    flex: 8,
  },

  pt_1: {
    paddingTop: hp('1%'),
  },

  pt_1_5: {
    paddingTop: hp('1.5%'),
  },

  p_1: {
    padding: wp('1%'),
  },

  p_2: {
    padding: wp('2%'),
  },

  p_3: {
    padding: wp('3%'),
  },

  justify_space_between: {justifyContent: 'space-between'},

  float_right: {
    justifyContent: 'flex-end',
  },

  float_middle: {
    justifyContent: 'center',
  },

  content_float_middle: {
    alignItems: 'center',
  },

  content_float_right: {
    alignItems: 'flex-end',
  },

  text_float_right: {
    textAlign: 'right',
  },

  text_default_color: {
    color: theme.textColor,
  },

  text_default_color_muted: {
    color: theme.mutedDark,
  },

  text_default_color_muted_light: {
    color: theme.muted,
  },

  text_default_color_light: {
    color: theme.pureWhite,
  },

  text_default_color_blue: {
    color: theme.lightBlue,
  },

  row: {
    width: '100%',
    flexDirection: 'row',
  },

  profile_image_sm_holder: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: theme.muted,
  },

  profile_image_sm_holder_sq: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: theme.muted,
  },

  profile_image_x_sm_holder: {
    width: wp('6%'),
    height: wp('6%'),
    borderRadius: wp('6%') / 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  profile_name_holder_sm: {
    width: '100%',
    justifyContent: 'flex-start',
  },

  post_date_holder: {
    width: '100%',
    justifyContent: 'flex-start',
  },

  profile_image_sm: {
    width: '100%',
    height: '100%',
  },

  feed_icon_holder: {
    width: wp('10%'),
    height: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  shadow_sm: {
    shadowColor: theme.blue,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 1,
  },

  shadow_md: {
    shadowColor: theme.blue,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },

  br_1: {
    borderRadius: wp('1%'),
  },

  br_2: {
    borderRadius: wp('2%'),
  },

  br_3: {
    borderRadius: wp('3%'),
  },

  card_bg: {
    backgroundColor: theme.pureWhite,
  },

  common_card: {
    justifyContent: 'center',
    backgroundColor: theme.cardBackgroundColor,
    marginBottom: hp('1.4%'),
    flex: 1,
  },

  common_sub_card: {
    width: '100%',
    justifyContent: 'center',
    padding: wp('3%'),
    backgroundColor: theme.muted,
  },

  cardTextColorDark: {
    color: theme.blue,
  },

  cardTextColorLink: {
    color: theme.lightBlue,
  },

  commentTextColorDark: {
    color: theme.blue,
  },

  common_card_comment: {
    justifyContent: 'center',
  },

  feed_inner_comment_section: {
    paddingLeft: wp('3%'),
    marginBottom: hp('2%'),
    paddingTop: hp('2%'),
    paddingRight: wp('3%'),
    borderColor: theme.muted,
    borderTopWidth: hp('0.1%'),
  },

  feed_activity_count_container: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: theme.mutedLight,
    borderTopWidth: hp('0.1%'),
    borderBottomWidth: hp('0.1%'),
    paddingTop: hp('1.2%'),
    paddingBottom: hp('1.2%'),
    paddingLeft: wp('3%'),
    paddingRight: wp('3%'),
  },

  feed_activity_count_container_details_screen: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: wp('3%'),
    marginRight: wp('3%'),
    marginTop: hp('1.5%'),
    paddingBottom: hp('1.5%'),
    borderBottomWidth: hp('0.1%'),
    borderColor: theme.muted,
  },

  feed_action_button_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  feed_action_button_container_details_screen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp('3%'),
    marginRight: wp('3%'),
    borderBottomWidth: hp('0.1%'),
    borderColor: theme.muted,
    marginBottom: hp('2%'),
  },

  feed_icon_holder_wrapper: {
    paddingTop: hp('0.8%'),
    paddingBottom: hp('0.8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  list_footer: {
    width: '100%',
    height: hp('20%'),
    justifyContent: 'flex-start',
    paddingTop: hp('2%'),
  },

  feed_image_section: {
    width: '100%',
    maxHeight: hp('40%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('0%'),
    overflow: 'hidden',
  },

  feed_image_section_wrapper_details_screen: {
    marginBottom: hp('1%'),
    backgroundColor: theme.mutedLight,
  },

  video_icon_holder_on_image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0, 0.4)',
  },

  video_icon_lg: {
    width: wp('12%'),
    height: wp('12%'),
  },

  feed_single_image_wrapper: {
    position: 'relative',
  },

  feed_image: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: theme.muted,
  },

  reply_btn_lg: {
    backgroundColor: theme.lightBlue,
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    height: hp('3.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('1%'),
  },

  filter_section: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  filter_options: {
    paddingLeft: wp('6%'),
    paddingRight: wp('6%'),
    borderRadius: wp('6%') / 2,
    height: hp('3.5%'),
    backgroundColor: theme.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('3%'),
  },

  club_card_medium: {
    width: wp('65%'),
    height: hp('15%'),
    borderRadius: wp('3%'),
  },

  card_name_holder_sm: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    marginBottom: hp('2%'),
  },

  devider_medium: {
    width: '100%',
    height: hp('0.1%'),
    backgroundColor: theme.muted,
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
  },

  button_muted: {
    backgroundColor: theme.muted,
    paddingLeft: wp('1%'),
    paddingRight: wp('1%'),
    height: hp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('1%'),
  },

  button_muted_follow: {
    backgroundColor: theme.pureWhite,
    width: wp('22%'),
    paddingLeft: wp('1%'),
    paddingRight: wp('1%'),
    height: hp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('1%'),
  },

  button_primary_follow: {
    backgroundColor: theme.lightBlue,
    width: wp('22%'),
    paddingLeft: wp('1%'),
    paddingRight: wp('1%'),
    height: hp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('1%'),
  },

  button_primary: {
    backgroundColor: theme.lightBlue,
    paddingLeft: wp('1%'),
    paddingRight: wp('1%'),
    height: hp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('1%'),
  },

  button_primary_lg: {
    backgroundColor: theme.textColor,
    paddingLeft: wp('4%'),
    paddingRight: wp('4%'),
    height: hp('4%'),
    width: wp('30%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('1%'),
  },

  button_muted_lg: {
    backgroundColor: theme.muted,
    paddingLeft: wp('4%'),
    paddingRight: wp('4%'),
    height: hp('4%'),
    width: wp('30%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('1%'),
  },

  follow_button: {
    width: wp('30%'),
  },

  follow_button_muted: {
    width: wp('20%'),
  },

  selected_tab: {
    backgroundColor: theme.blue,
  },

  member_card_medium: {
    width: wp('65%'),
    borderRadius: wp('3%'),
  },

  textInputLgContainer: {
    width: '100%',
    height: hp('50%'),
    borderColor: theme.textColor,
    borderRadius: wp('2%'),
    borderWidth: 0.5,
    padding: wp('3%'),
    paddingBottom: 0,
    backgroundColor: theme.pureWhite,
  },

  textInputLg: {
    minHeight: hp('20%'),
    maxHeight: hp('30%'),
    padding: 0,
    margin: 0,
    textAlignVertical: 'top',
    marginBottom: 0,
  },

  bottom_section_text_area: {
    width: '100%',
    backgroundColor: theme.pureWhite,
    alignItems: 'flex-start',
    paddingTop: wp('2%'),
    paddingBottom: wp('2%'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  bottom_section_text_area_image_container: {
    minWidth: wp('30%'),
    maxWidth: wp('60%'),
    minHeight: hp('10%'),
    maxHeight: hp('20%'),
    backgroundColor: theme.backgroundColor,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  screen_header: {
    width: '100%',
    padding: 0,
    margin: 0,
  },

  see_all_btn: {
    backgroundColor: theme.pureWhite,
    borderRadius: wp('3%'),
    height: hp('3%'),
  },

  override_user_block_wrapper: {
    height: hp('4%'),
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: hp('1%'),
  },

  override_user_block: {
    width: wp('6%'),
    height: wp('6%'),
    borderRadius: wp('6%') / 2,
    backgroundColor: theme.pureWhite,
    marginRight: wp('-2%'),
    overflow: 'hidden',
  },

  profile_image_x_sm: {
    width: wp('6%'),
    height: wp('6%'),
    borderRadius: wp('6%') / 2,
  },

  action_count_icon_sm: {
    width: wp('4%'),
    height: wp('4%'),
    borderRadius: wp('4%') / 2,
  },

  action_count_icon_sm_holder: {
    width: wp('5%'),
    height: wp('5%'),
    borderRadius: wp('5%') / 2,
    marginRight: wp('0.6%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.mutedLight,
  },

  notification_box_icon_holder: {
    width: wp('25%'),
    height: wp('25%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },

  notification_box_text_holder: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bg_light_white: {
    backgroundColor: theme.pureWhite,
  },

  bg_light: {
    backgroundColor: theme.backgroundColor,
  },

  bg_muted_light: {
    backgroundColor: theme.mutedLight,
  },

  bg_muted_dark: {
    backgroundColor: theme.mutedDark,
  },

  b_r_t_r_b_sm: {
    borderTopRightRadius: wp('3%'),
    borderBottomRightRadius: wp('3%'),
    borderBottomLeftRadius: wp('3%'),
  },

  b_r_sm: {
    borderRadius: wp('3%'),
  },

  inner_post_container: {
    borderTopWidth: hp('0.1%'),
    borderColor: theme.muted,
    overflow: 'hidden',
  },

  feed_action_btn_text: {
    fontFamily: 'Roboto-Medium',
    fontSize: hp('1.3%'),
    color: theme.textColor,
  },

  feed_action_count_text: {
    fontFamily: 'Roboto-Regular',
    fontSize: hp('1.4%'),
    color: theme.black,
  },

  card_header_wrapper: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: wp('3%'),
    paddingRight: wp('3%'),
    paddingTop: hp('1.5%'),
    paddingBottom: hp('0.5%'),
    alignItems: 'center',
  },

  card_header_wrapper_comment: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: wp('3%'),
    paddingRight: wp('3%'),
    paddingTop: hp('0.5%'),
    paddingBottom: hp('0.5%'),
    alignItems: 'center',
  },

  feed_text_content_wrapper: {
    width: '100%',
    flexDirection: 'row',
    marginTop: hp('1%'),
    marginBottom: hp('2%'),
    paddingLeft: wp('3%'),
    paddingRight: wp('3%'),
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  feed_lg_left_image: {
    overflow: 'hidden',
    width: wp('60%'),
    height: hp('40%'),
    marginRight: wp('1%'),
    position: 'relative',
  },

  feed_lg_left_image_two: {
    overflow: 'hidden',
    width: '50%',
    height: hp('25%'),
    marginRight: wp('1%'),
    position: 'relative',
  },

  feed_sm_right_image: {
    overflow: 'hidden',
    width: wp('40%'),
    height: hp('40%'),
    position: 'relative',
  },

  feed_sm_right_top_image: {
    overflow: 'hidden',
    width: wp('40%'),
    height: hp('20%'),
    marginBottom: wp('1%'),
  },

  feed_sm_right_bottom_image: {
    borderColor: theme.pureWhite,
    overflow: 'hidden',
    width: wp('40%'),
    height: hp('19.5%'),
    position: 'relative',
  },

  feed_image_multiple_left: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.muted,
  },

  feed_image_multiple_right: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.muted,
  },

  feed_remaining_image_count: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    width: wp('40%'),
    height: hp('19.5%'),
    position: 'absolute',
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  name_background_success: {
    backgroundColor: theme.green,
    paddingLeft: wp('4%'),
    paddingRight: wp('4%'),
    paddingTop: hp('0.4%'),
    paddingBottom: hp('0.4%'),
    borderRadius: wp('0.5%'),
  },

  name_background_muted: {
    backgroundColor: theme.mutedLight,
    paddingLeft: wp('4%'),
    paddingRight: wp('4%'),
    paddingTop: hp('0.4%'),
    paddingBottom: hp('0.4%'),
    borderRadius: wp('0.5%'),
  },

  follow_user_block_content_wrapper: {
    padding: wp('3%'),
    borderTopWidth: hp('0.1%'),
    borderColor: theme.mutedLight,
    paddingTop: hp('3%'),
  },

  feed_details_screen: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
    position: 'relative',
  },

  border_bottom_sm: {
    borderColor: theme.mutedLight,
    borderBottomWidth: hp('0.1%'),
  },

  post_create_wrapper: {
    flex: 1,
    backgroundColor: theme.pureWhite,
  },

  post_create_options: {
    width: '100%',
    height: hp('6%'),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.pureWhite,
    paddingLeft: wp('3%'),
  },

  create_post_action_btn_holder: {
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowColor: theme.blue,
    elevation: 12,
  },

  uploaded_file_thumb: {
    width: '100%',
    height: hp('30%'),
    backgroundColor: theme.muted,
    marginTop: hp('1%'),
  },

  post_btn: {
    width: wp('25%'),
    height: hp('4%'),
    backgroundColor: theme.pureWhite,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('25%') / 2,
    borderWidth: wp('0.1%'),
    borderColor: theme.mutedDark,
  },

  text_selected: {
    color: theme.blue,
    fontSize: hp('1.3%'),
    fontFamily: 'Roboto-Bold',
  },

  text_deselected: {
    color: theme.mutedDark,
    fontSize: hp('1.3%'),
    fontFamily: 'Roboto-Regular',
  },
});
