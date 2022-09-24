import { SET_LANGUAGE } from '../constants/actions';
import { languageOptions } from '../constants/options';

const initialState = {
    lang: languageOptions.eng,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: { type: string, payload: any }) => {
    const { type, payload } = action;
    switch (type) {
        case SET_LANGUAGE:
            return {...state, lang: payload};
        default:
            return state;
    }
};