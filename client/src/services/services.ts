export const fetchLessons = async () => {
  try {
    const resp = await fetch('/api/lessons/')
    const json = await resp.json()
    
    return json
  } catch (error) {
    console.error('Error:', error)
  }
}