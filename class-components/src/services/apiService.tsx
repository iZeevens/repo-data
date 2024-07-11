const fetchData = async (searchTerm: string) => {
  try {
    const formData = new URLSearchParams()
    formData.append('title', searchTerm)

    const response = await fetch('https://stapi.co/api/v1/rest/comics/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
      },
      body: formData.toString(),
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await response.json()
    console.log(data)
    return data.comics
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export { fetchData }
