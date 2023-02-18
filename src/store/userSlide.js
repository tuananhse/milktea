import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchUserService} from '../../services/ApiService';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {
  SIGN_IN_USER_FAILED,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER,
  FETCH_USER_SCORE,
  UPDATE_USER_PROFILE,
  FETCH_USER_PROFILE,
  FETCH_USER_SUPPORT,
  CHANGE_PASSWORD,
  FORGOT_PASSWORD,
  VERIFY_PASSWORD,
  UPDATE_PASSWORD,
  FETCH_SERVICE_HISTORY,
  REGISTER_FCM,
  DELETE_ACCOUNT,
  CANCEL_DELETE_ACCOUNT,
} from '../constants/ActionTypes';

// Khởi tạo state cho slice, có thể kèm giá trị mặc định ban đầu
const initialState = {
  username: 'Guest',
  user: null,
  status: 'idle',
  error: '',
};

export const Action =
  {
    type: SIGN_IN_USER,
    payload: {
      request: AxiosRequestConfig,
    },
  } |
  {
    type: SIGN_IN_USER_SUCCESS,
    payload: AxiosResponse,
  } |
  {
    type: SIGN_IN_USER_FAILED,
    payload: {
      request: AxiosRequestConfig,
    },
  };

export const fetchLoginAsync = (bodyFormData): Action => ({
  type: SIGN_IN_USER,
  payload: {
    request: {
      url: 'login',
      method: 'POST',
      headers: {'Content-Type': 'multipart/form-data'},
      processData: false,
      contentType: false,
      timeout: 0,
      data: bodyFormData,
    },
  },
});

export const fetchUserScoreAsync = (): Action => ({
  type: FETCH_USER_SCORE,
  payload: {
    request: {
      url: 'score',
      method: 'GET',
    },
  },
});

/**
 * update profile
 */
export const updateProfileAsync = (bodyFormData): Action => ({
  type: UPDATE_USER_PROFILE,
  payload: {
    request: {
      url: 'user/update',
      method: 'POST',
      headers: {'Content-Type': 'multipart/form-data'},
      processData: false,
      contentType: false,
      timeout: 0,
      data: bodyFormData,
    },
  },
});

/**
 * Fetch user profile
 */
export const fetchProfileAsync = (): Action => ({
  type: FETCH_USER_PROFILE,
  payload: {
    request: {
      url: 'user/info',
      method: 'POST',
    },
  },
});
/**
 * Fetch user support
 */
export const fetchUserSupportAsync = (): Action => ({
  type: FETCH_USER_SUPPORT,
  payload: {
    request: {
      url: 'user/support',
      method: 'POST',
    },
  },
});
/**
 * Change passsword
 */

export const changePasswordAsync = (formData): Action => ({
  type: CHANGE_PASSWORD,
  payload: {
    request: {
      url: 'user/changepassword',
      method: 'POST',
      headers: {'Content-Type': 'multipart/form-data'},
      processData: false,
      contentType: false,
      timeout: 0,
      data: formData,
    },
  },
});
/**
 * Forgot password
 */

export const forgotPasswordAsync = (formData): Action => ({
  type: FORGOT_PASSWORD,
  payload: {
    request: {
      url: 'forget',
      method: 'POST',
      headers: {'Content-Type': 'multipart/form-data'},
      processData: false,
      contentType: false,
      timeout: 0,
      data: formData,
    },
  },
});

/**
 * Forgot password
 */

export const verifyCodeAsync = (formData): Action => ({
  type: VERIFY_PASSWORD,
  payload: {
    request: {
      url: 'forget/token',
      method: 'POST',
      headers: {'Content-Type': 'multipart/form-data'},
      processData: false,
      contentType: false,
      timeout: 0,
      data: formData,
    },
  },
});

/**
 * update password
 */

export const updatePasswordAsync = (formData): Action => ({
  type: UPDATE_PASSWORD,
  payload: {
    request: {
      url: 'forget/new-pass',
      method: 'POST',
      headers: {'Content-Type': 'multipart/form-data'},
      processData: false,
      contentType: false,
      timeout: 0,
      data: formData,
    },
  },
});
/**
 * Fetch service history
 */
export const fetchServiceHistoryAsync = (formData): Action => ({
  type: FETCH_SERVICE_HISTORY,
  payload: {
    request: {
      url: `service?${formData}`,
      method: 'POST',
      headers: {'Content-Type': 'multipart/form-data'},
      processData: false,
      contentType: false,
      timeout: 0,
    },
  },
});
/**
 * Register FCM Token
 */

export const registerFCMAsync = (formData): Action => ({
  type: REGISTER_FCM,
  payload: {
    request: {
      url: 'update-fcm',
      method: 'POST',
      headers: {'Content-Type': 'multipart/form-data'},
      processData: false,
      contentType: false,
      timeout: 0,
      data: formData,
    },
  },
});

/**
 * Delete account
 */

export const deleteAccountAsync = (): Action => ({
  type: DELETE_ACCOUNT,
  payload: {
    request: {
      url: 'user/delete',
      method: 'GET',
    },
  },
});
/**
 * Cancel delete account
 */

export const cancelDeleteAccountAsync = (): Action => ({
  type: CANCEL_DELETE_ACCOUNT,
  payload: {
    request: {
      url: 'user/delete/cancel',
      method: 'GET',
    },
  },
});

// Cấu hình slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      user = action.payload;
    },
  },
});

export const {fetchLogin, setUser} = userSlice.actions;
export default userSlice.reducer;
