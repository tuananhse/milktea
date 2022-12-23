import {AspectRatio, Box, Image, useSafeArea, View, Text} from 'native-base';
import React, {useRef, useState} from 'react';
// import Carousel from 'react-native-snap-carousel';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [carouselItems, setCarouseItems] = useState([
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
    },
  ]);

  const _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };
  return (
    <View>
      {/* <Carousel
        layout={'default'}
        // ref={ref => useRef(ref)}
        data={carouselItems}
        sliderWidth={300}
        itemWidth={300}
        renderItem={_renderItem}
        onSnapToItem={index => setActiveIndex(index)}
      /> */}

      <Box rounded="lg" overflow="hidden">
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
    </View>
  );
};

export default Slider;
