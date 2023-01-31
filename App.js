import type {Node} from 'react';
import React from 'react';

import {extendTheme, NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RouterContainer from './src/routes';
import {getFontSize} from './utils';
const App: () => Node = () => {
  const theme = extendTheme({
    components: {
      FormControlLabel: {
        baseStyle: {
          _text: {
            fontSize: getFontSize(14),
          },
        },
      },
      FormControlErrorMessage: {
        baseStyle: () => {
          return {
            _text: {
              fontSize: getFontSize(13),
            },
          };
        },
      },
      Text: {
        defaultProps: {
          size: 'h1',
        },
        sizes: {
          h1: {
            fontSize: {
              base: getFontSize(14),
              sm: getFontSize(18),
              md: getFontSize(20),
              lg: getFontSize(22),
              xl: getFontSize(24),
            },
          },
        },
      },
      AlertDialog: {
        body: {
          backgroundColor: 'white',
        },
      },
    },
    colors: {
      // Add new color
      primary: {
        50: '#FFF8DC',
        100: '#DEB887',
        200: '#2d5dfe',
        300: '#ffffff',
        400: '#ffffff',
        500: '#e6e6e6',
        0: '#ffffff',
      },
      red: {
        100: '#e00b47',
      },
      amber: {
        400: '#d97706',
      },
      black: 'black',
      text: {
        100: 'black',
        50: '#bfbfbf',
        0: '#ffffff',
      },
      button: {
        bg: '#558ed5',
        text: '#fffff',
      },
      white: {
        100: '#fffff',
      },
      gray: {
        100: '#f4f4f4',
      },
    },
    config: {
      initialColorMode: 'light',
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>
        <RouterContainer />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;
