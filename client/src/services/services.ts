import axios from 'axios'

export const fetchLessons = async () => {
  try {
    const resp = await fetch('/api/lessons/')
    const json = await resp.json()
    console.log(json)
  } catch (error) {
    console.error('Error:', error)
  }
}