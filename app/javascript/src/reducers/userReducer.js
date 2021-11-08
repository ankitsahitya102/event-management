import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USER_AVAILABLE_SLOTS_BEGIN,
  FETCH_USER_AVAILABLE_SLOTS_SUCCESS,
  FETCH_USER_AVAILABLE_SLOTS_FAILURE,
} from '../actions/userActions';

const initialState = {
  items: [],
  loading: false,
  error: null,
  slots: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.users,
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    case FETCH_USER_AVAILABLE_SLOTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_USER_AVAILABLE_SLOTS_SUCCESS:
      return {
        ...state,
        loading: false,
        slots: action.payload.slots,
      };

    case FETCH_USER_AVAILABLE_SLOTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        slots: []
      };

    default:
      return state;
  }
}