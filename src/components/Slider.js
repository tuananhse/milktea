import {Box, View, AspectRatio, Image, Text, StyleSheet} from 'native-base';
import React from 'react';

const Slider = () => {
  const {itemWidth, sliderWidth} = 200;
  const entries = [{id: 1, title: 'ahihi'}];

  return (
    <View>
      <Box rounded="lg" overflow="hidden">
        {/* <Carousel
          ref={_carousel}
          data={entries}
          renderItem={renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
            }}
            alt="image"
          />
        </AspectRatio> */}
      </Box>
    </View>
  );
};

export default Slider;
const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 50,
  },
  itemContainer: {
    // width: ITEM_WIDTH,
    // height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
