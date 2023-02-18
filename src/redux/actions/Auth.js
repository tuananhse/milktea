import {
  FETCH_LIST_CATEGORY,
  SIGN_IN_USER,
  SIGN_IN_USER_SUCCESS,
  FETCH_USER_SCORE_SUCCESS,
  FETCH_USER_SCORE_FAILED,
  FETCH_NOTIFICATION,
  FETCH_NOTIFICATION_FAILED,
  FETCH_NOTIFICATION_SUCCESS,
  FETCH_USER_SCORE,
  GET_TOKEN_FAILED,
  GET_TOKEN_SUCCESS,
} from '../../constants/ActionTypes';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {SERVER_URL} from '../../constants';
import {fetchUserService, fetchScoreService} from '../../services/ApiService';

export const Action =
  {
    type: SIGN_IN_USER,
    payload: {
      request: AxiosRequestConfig,
    },
  } |
  {
    type: 'APP_GET_VALUES_SUCCESS',
    payload: AxiosResponse,
  } |
  {
    type: 'APP_INCREMENT',
    payload: {
      request: AxiosRequestConfig,
    },
  } |
  {
    type: 'APP_DECREMENT',
    payload: {
      request: AxiosRequestConfig,
    },
  };

export const fetchUserLogin = data => {
  return {
    type: 'SIGN_IN_USER',
    payload: data,
  };
};

export const fetchScoreRequest = dispatch => {
  return {
    type: FETCH_USER_SCORE,
    payload: fetchScoreService()
      .then(data => dispatch(fetchScoreRequestSuccess(data)))
      .catch(error => {
        dispatch(fetchScoreRequestFailed(error?.message));
      }),
  };
};

const fetchScoreRequestSuccess = data => {
  return {
    type: FETCH_USER_SCORE_SUCCESS,
    payload: data?.data,
  };
};

const fetchScoreRequestFailed = () => {
  return {
    type: FETCH_USER_SCORE_FAILED,
    payload: null,
  };
};

export const getTokenSuccessAction = payload => {
  return {
    type: GET_TOKEN_SUCCESS,
    payload: payload,
  };
};
export const getTokenFailedAction = payload => {
  return {
    type: GET_TOKEN_FAILED,
    payload: payload,
  };
};
