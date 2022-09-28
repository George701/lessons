export const fetchLessons = async () => {
  const resp = await fetch('/api/lessons/')
  const json = await resp.json()
  return json
}