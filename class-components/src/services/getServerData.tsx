const getServerData = async (searchTerm: string) => {
  try {
    const response = await fetch('https://stapi.co/api/v1/rest/comics/search', {
      method: 'POST',
        body: new URLSearchParams({ title: searchTerm }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
    })

    const data = await response.json()

    // console.log(data)

    return data
  } catch(error) {
    console.error(`Error Fetch Server Data ${error}`)
  }
}

export default getServerData