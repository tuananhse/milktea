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
  FETCH_NOTIFICATION_DETAIL_SUCCESS,
  FETCH_NOTIFICATION_DETAIL_FAILED
} from "../../constants/ActionTypes"
import { combineReducers } from "redux"
import { Action } from "../store/userSlide"
const initialState = {
  loading: false,
  error: null,
  categoryList: [],
  newList: [],
  notificationList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_CATEGORY:
      return {
        ...state,
        loading: true,
        categoryList: null,
        error: null
      }
    case FETCH_LIST_CATEGORY_SUCCESS: {
      return {
        ...state,
        categoryList: action?.payload?.data,
        error: null
      }
    }
    case FETCH_LIST_CATEGORY_FAILED: {
      return {
        ...state,
        categoryList: null,
        error: action.payload
      }
    }

    case FETCH_NEW_SUCCESS: {
      return {
        ...state,
        newList: action?.payload?.data,
        error: null
      }
    }

    case FETCH_NEW_FAILED: {
      return {
        ...state,
        newList: null,
        error: action.payload
      }
    }

    case FETCH_NOTIFICATION_SUCCESS: {
      return {
        ...state,
        notificationList: action?.payload?.data,
        error: null
      }
    }
    case FETCH_NOTIFICATION_FAILED: {
      return {
        ...state,
        notificationList: [],
        error: action.payload
      }
    }
    default:
      return state
  }
}
