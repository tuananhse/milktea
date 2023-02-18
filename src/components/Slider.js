import {AspectRatio, Box, Image, View} from 'native-base';
import React, {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {w_scale} from '../styles/mixins';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [carouselItems, setCarouseItems] = useState([
    {
      title: 'Item 1',
      text: 'Text 1',
      image:
        'https://1.bp.blogspot.com/-t5wIlhG5HXo/XpXcl0YHIJI/AAAAAAAACTU/tkdS68AElyogOEgHudjYDQYEofFnR5WkQCNcBGAsYHQ/s1600/thanh-toan-the-coffee-house-qua-airpay.jpg',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
      image: 'https://cdn-www.vinid.net/ec3b8aef-1920-x-1080-tin-tuc-web.jpg',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
      image:
        'https://cdn-www.vinid.net/2020/03/20200316_AppVinID_BannerWeb_TCH_25-1024x576.jpg',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
      image: 'https://cdn-www.vinid.net/ec3b8aef-1920-x-1080-tin-tuc-web.jpg',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
      image:
        'https://1.bp.blogspot.com/-t5wIlhG5HXo/XpXcl0YHIJI/AAAAAAAACTU/tkdS68AElyogOEgHudjYDQYEofFnR5WkQCNcBGAsYHQ/s1600/thanh-toan-the-coffee-house-qua-airpay.jpg',
    },
  ]);

  const _renderItem = ({item, index}) => {
    return (
      <Box rounded="lg" overflow="hidden">
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            resizeMode="cover"
            source={{
              uri: item.image,
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
    );
  };
  return (
    <View justifyContent={'center'} alignItems={'center'}>
      <Carousel
        layout={'default'}
        data={carouselItems}
        sliderWidth={w_scale(100)}
        itemWidth={300}
        renderItem={_renderItem}
        onSnapToItem={index => setActiveIndex(index)}
      />
    </View>
  );
};

export default Slider;
