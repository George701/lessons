import axios from 'axios'

export const fetchLessons = async () => {
  const resp = await axios.get('/api/lessons/')
  return resp.data
}

export const deleteLesson = async (id: string) => {
  const resp = await axios.delete(`/api/lessons/${id}`)
  console.log(resp)
  return resp.status
}