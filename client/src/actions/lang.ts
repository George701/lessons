import { SET_LANGUAGE } from '../constants/actions';

export const setLanguage = (lang: string) => (dispatch: (arg0: { type: string; payload: string; }) => void) => {
    dispatch({
        type: SET_LANGUAGE,
        payload: lang
    });
}