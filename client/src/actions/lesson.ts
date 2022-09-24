import { GET_LESSONS, SUCCESS, FAILED } from '../constants/actions'
import { fetchLessons } from '../services/services'
import showToast from '../UIKit/components/Toast/showToast';

export const getLessons = () => async (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
  dispatch({
    type: GET_LESSONS,
  });
  try {
    const resp = await fetchLessons()
    dispatch({
      type: GET_LESSONS + SUCCESS,
      payload: resp
    });
  } catch (error) {
    showToast('Error loading lessons '+ error, true)
    dispatch({
      type: GET_LESSONS + FAILED,
      payload: 'loadingLessonsErrorLabel'
    });
    console.error('Error:', error)
  }
}