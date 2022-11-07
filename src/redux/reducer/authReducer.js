import {
  SIGN_IN_USER,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_FAILED,
  FETCH_LIST_CATEGORY,
  FETCH_LIST_CATEGORY_SUCCESS,
  FETCH_LIST_CATEGORY_FAILED,
  FETCH_NEW_SUCCESS,
  FETCH_NEW_FAILED,
  FETCH_NOTIFICATION_SUCCESS,
  FETCH_NOTIFICATION_FAILED,
  FETCH_USER_SCORE_FAILED,
  FETCH_USER_SCORE_SUCCESS,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAILED,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILED,
  FETCH_USER_SUPPORT_SUCCESS,
  FETCH_USER_SUPPORT_FAILED,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILED,
  SIGN_OUT
} from "../../constants/ActionTypes"
import { combineReducers } from "redux"
import { Action } from "../store/userSlide"
const initialStateAuth = {
  loading: true,
  error: null,
  user: null,
  userScore: null,
  profile: null,
  token: null
}

const authReducer = (state = initialStateAuth, action) => {
  switch (action.type) {
    case GET_TOKEN_SUCCESS: {
      return {
        ...state,
        token: action?.payload,
        error: null,
        loading: false
      }
    }
    case GET_TOKEN_FAILED: {
      return {
        ...state,
        token: null,
        error: null,
        loading: false
      }
    }
    case SIGN_OUT: {
      return {
        ...state,
        token: null,
        loading: false
      }
    }

    case SIGN_IN_USER_SUCCESS: {
      return {
        ...state,
        user: action?.payload?.data,
        token: action?.payload?.data?.token,
        error: null,
        loading: false
      }
    }
    case SIGN_IN_USER_FAILED: {
      return {
        ...state,
        user: null,
        error: action.payload.error,
        loading: false,
        token: null
      }
    }

    case FETCH_USER_SCORE_SUCCESS: {
      return {
        ...state,
        userScore: action?.payload?.data
      }
    }
    case FETCH_USER_SCORE_FAILED: {
      return {
        ...state,
        userScore: null
      }
    }
    case UPDATE_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        user: action?.payload?.data
      }
    }
    case UPDATE_USER_PROFILE_FAILED: {
      return {
        ...state,
        user: null
      }
    }

    case FETCH_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        profile: action?.payload?.data
      }
    }
    case FETCH_USER_PROFILE_FAILED: {
      return {
        ...state,
        profile: null
      }
    }

    case FETCH_USER_SUPPORT_SUCCESS: {
      return {
        ...state,
        userSupportList: payload?.payload?.data
      }
    }
    case FETCH_USER_SUPPORT_FAILED: {
      return {
        ...state,
        userSupportList: []
      }
    }

    default:
      return state
  }
}
export default authReducer
