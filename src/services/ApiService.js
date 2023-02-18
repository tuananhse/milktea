import axios from 'axios';
import {SERVER_URL} from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform} from 'react-native';

export const fetchUserService = bodyFormData => {
  return axios({
    url: SERVER_URL + 'login',
    data: bodyFormData,
    config: {headers: {'Content-Type': 'multipart/form-data'}},
    method: 'POST',
    timeout: 0,
    processData: false,
    contentType: false,
  })
    .then(function (response) {
      const {data} = response;
      if (data.error === 1) {
        return Promise.reject(data);
      }
      return Promise.resolve(data);
    })
    .catch(function (response) {
      // return response
      return Promise.reject(response);
    });
};

export const fetchCategory = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(SERVER_URL + 'home/categories')
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};

export const fetchNewService = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(SERVER_URL + 'home/news')
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};

export const fetchNotificationService = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(SERVER_URL + 'home/notification')
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};

export const fetchScoreService = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(SERVER_URL + 'score')
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
};
