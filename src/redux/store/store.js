import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import axiosMiddleware from 'redux-axios-middleware';
import {persistStore} from 'redux-persist';

// Imports: Redux
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {SERVER_URL} from '../../constants';
import rootReducer from '../reducer';
import homeReducer from '../reducer/homeReducer';
import authReducer from '../reducer/authReducer';
import {SIGN_OUT} from '../../constants/ActionTypes';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['login'],
};
const defaultClient = axios.create({
  baseURL: SERVER_URL,
});
const options = {
  returnRejectedPromiseOnError: true,
  interceptors: {
    response: [
      {
        success: ({dispatch}, response) => {
          return response?.data;
        },
        error: ({dispatch}, error) => {
          /**
           * expiry token
           */
          if (
            error.response.status === 401 &&
            error.response.data.msg == 'Not login'
          ) {
            cleanToken(dispatch);
          }
          return Promise.reject(error);
        },
      },
    ],
  },
};
const cleanToken = async dispatch => {
  await AsyncStorage.getAllKeys().then(keys => AsyncStorage.multiRemove(keys));
  dispatch({type: SIGN_OUT});
};

defaultClient.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('@token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// axios.interceptors.response.use(response => {
//     return response;
//  }, error => {
//    if (error.response.status === 401) {
//     //place your reentry code
//    }
//    return error;
//  });

const middleware = [axiosMiddleware(defaultClient, options), logger];

const reducer = {
  auth: authReducer,
  home: homeReducer,
};

const store = configureStore({
  reducer,
  middleware: middleware,
});

export {store};
