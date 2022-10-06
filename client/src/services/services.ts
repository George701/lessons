import axios from 'axios'
import { ILessonBasicModel } from '../models/lessons'

export const fetchLessons = async () => {
  const resp = await axios.get('/api/lessons/')
  return resp.data
}

export const deleteLesson = async (id: string) => {
  const resp = await axios.delete(`/api/lessons/${id}`)
  return resp.status
}

export const saveLesson = async (model: ILessonBasicModel) => {
  const resp = await axios.post('/api/lessons/', model)
  return resp.status
}

export const editLesson = async (id: string, model: ILessonBasicModel) => {
  const resp = await axios.patch(`/api/lessons/${id}`, model)
  return resp.status
}

export const fetchLesson = async (id: string) => {
  const resp = await axios.get(`/api/lessons/${id}`)
  return resp.data
}