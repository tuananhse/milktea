import type {Node} from 'react';
import React from 'react';
import {extendTheme, NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RouterContainer from './src/routes';
import {getFontSize} from './utils';
import {store} from './src/redux/store/store';
import {Provider} from 'react-redux';
import {AuthProvider} from './src/routes/AuthProvider';
import I18n from './src/locales';

const App: () => Node = () => {
  const theme = extendTheme({
    components: {
      Input: {
        baseStyle: {
          color: 'text.100',
          borderColor: 'text.50',
          _focus: {
            color: 'text.100',
            borderColor: 'text.50',
          },
        },
        sizes: {
          md: {
            py: 4,
            px: 5,
            bg: 'text.0',
            fontSize: 16,
          },
          sm: {
            py: 3,
            px: 5,
            bg: 'text.0',
            fontSize: 14,
          },
        },
      },
      Checkbox: {
        baseStyle: {
          color: 'text.100',
          borderColor: 'primary.100',
          backgroundColor: 'primary.100',
          _focus: {
            color: 'primary.100',
            borderColor: 'primary.100',
          },
          _checked: {
            color: 'primary.100',
            borderColor: 'primary.100',
          },
        },
        sizes: {
          md: {
            py: 0,
            px: 0,
            bg: 'text.0',
            fontSize: 16,
          },
          sm: {
            py: 0,
            px: 0,
            bg: 'text.0',
            fontSize: 14,
          },
        },
      },
      Radio: {
        baseStyle: {
          color: 'text.100',
          borderColor: 'primary.100',
          _focus: {
            color: 'primary.100',
            borderColor: 'primary.100',
          },
          _checked: {
            bg: 'primary.100',
            borderColor: 'primary.100',
            backgroundColor: 'primary.100',
            color: 'primary.100',
          },
        },
        sizes: {
          md: {
            py: 1,
            px: 1,
            bg: 'text.0',
            fontSize: 16,
          },
          sm: {
            py: 1,
            px: 1,
            bg: 'text.0',
            fontSize: 14,
          },
        },
      },
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
        600: '#ffffff',

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
  I18n.locale = 'vi';

  return (
    <Provider store={store}>
      <AuthProvider>
        <NativeBaseProvider theme={theme}>
          <SafeAreaProvider>
            <RouterContainer />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
