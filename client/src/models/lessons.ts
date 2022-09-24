export interface ILessonReducer {
  lessons: Array<any> | [], // TODO: add lesson instance
  loading: boolean,
  loaded: boolean,
  error: null | string,
}