import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Comics } from '../interfaces/searchTypes/searchTypes'

export const comicsApi = createApi({
  reducerPath: 'comicsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://stapi.co/api/v1/rest/' }),
  endpoints: (builder) => ({
    searchComics: builder.mutation<Comics[], string>({
      query: (searchTerm) => ({
        url: 'comics/search',
        method: 'POST',
        body: new URLSearchParams({ title: searchTerm }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }),
    }),
    getComicsByUid: builder.query<Comics, string>({
      query: (uid) => `comics?uid=${uid}`,
    }),
  }),
})

export const { useGetComicsByUidQuery, useSearchComicsMutation } = comicsApi
