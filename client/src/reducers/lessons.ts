import {SUCCESS, FAILED, GET_LESSONS} from '../constants/actions'

const initialState = {
  lessonsCollection: [],
  loading: false,
  loaded: false,
  error: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: { type: string, payload: any }) => {
  const { type, payload } = action;
  switch (type) {
      case GET_LESSONS:
        return {
          ...state,
          loading: true,
          loaded: false,
        }

      case GET_LESSONS + SUCCESS:
        return {
          ...state,
          loading: false,
          loaded: true,
          lessonsCollection: payload,
          error: null,
        }

      case GET_LESSONS + FAILED:
        return {
          ...state,
          loading: false,
          loaded: true,
          error: payload
        }
      default:
          return state;
  }
}