import {
  EMAIL_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  PASSWORD_CHANGED,
} from '../actions/types';

const initialState = {
  email: '',
  password: '',
  error: '',
  loading: false,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload,
      };
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        error: '',
        loading: true,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication Failed',
        loading: false,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...initialState,
        user: action.payload,
      };
    default:
      return state;
  }
};
