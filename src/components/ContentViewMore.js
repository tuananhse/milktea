import React, {useCallback, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import I18n from '../locales';

const ContentViewMore = props => {
  const {children, style} = props;
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);
  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };
  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 4);
  }, []);
  return (
    <View>
      <Text
        style={style}
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : 4}>
        {children}
      </Text>
      {lengthMore ? (
        <Text onPress={toggleNumberOfLines} style={styles.text}>
          {textShown ? I18n.t('viewLess') : I18n.t('viewMore')}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
    color: '#2D2D2D',
    lineHeight: 21,
    marginTop: 6,
  },
});

export default ContentViewMore;
