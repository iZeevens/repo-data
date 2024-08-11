import getServerData from '../services/getServerData'

describe('Get Server Data Test', () => {
  it('check corrctly fetch', async () => {
    const data = await getServerData('s').then((res) => res.comics[0])

    expect(data).toEqual({
      adaptation: false,
      coverDay: null,
      coverMonth: null,
      coverYear: null,
      numberOfPages: 22,
      photonovel: false,
      publishedDay: null,
      publishedMonth: 2,
      publishedYear: 1993,
      stardateFrom: 8915.1,
      stardateTo: 8915.1,
      title: '(A Little Adventure...) ... Goes a Long Way! The Conclusion!',
      uid: 'CCMA0000086083',
      yearFrom: null,
      yearTo: null,
    })
  })
})
