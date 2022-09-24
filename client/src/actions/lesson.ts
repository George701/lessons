import { GET_LESSONS, SUCCESS, FAILED } from '../constants/actions'
import { fetchLessons } from '../services/services'

export const getLessons = () => async (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
  dispatch({
    type: GET_LESSONS,
  });
  try {
    const resp = await fetchLessons()
    console.log(resp)
  } catch (error) {
    console.error('Error:', error)
  }
}