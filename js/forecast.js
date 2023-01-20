const KEY = '14e9dd0bd91edddb326beaa878e1bb12'

// request get data
const getData = async (city) => {
  const base = 'https://api.openweathermap.org/data/2.5/weather'
  const query = `?q=${city}&units=metric&appid=${KEY}`
  loader(true)
  const req = await fetch(base + query)
  const data = await req.json()
  loader(false)

  return data
}