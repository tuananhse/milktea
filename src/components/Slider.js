import {AspectRatio, Box, Image, View} from 'native-base';
import React from 'react';

const Slider = () => {
  return (
    <View>
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
