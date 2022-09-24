import { combineReducers } from 'redux';
import lang from './lang'
import lessons from './lessons'

export default combineReducers({
    language: lang,
    lessonsReducer: lessons,
});