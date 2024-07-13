const fetchData = async (searchTerm: string, searchUid?: string) => {
  try {
    const formData = new URLSearchParams()
    let url = 'https://stapi.co/api/v1/rest/comics';
    if (searchTerm) {
      formData.append('title', searchTerm)
      url += '/search'
    } else {
      url += `?uid=${searchUid}`
    }

    const response = await fetch(url, {
      method: searchTerm ? 'POST' : 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
      },
      body: searchTerm ? formData.toString() : undefined,
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await response.json()
    return data.comics
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export { fetchData }
