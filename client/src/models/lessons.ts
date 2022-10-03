export interface ILessonReducer {
  lessonsCollection: Array<any> | [], // TODO: add lesson instance
  loading: boolean,
  loaded: boolean,
  error: null | string,
}

export interface ILessonBasicModel {
  title: string,
  description: string,
  cover?: string,
}