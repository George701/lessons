import { SET_LANGUAGE } from '../constants/actions';

export const setLanguage = (lang) => dispatch => {
    dispatch({
        type: SET_LANGUAGE,
        payload: lang
    });
}