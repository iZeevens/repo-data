import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardDetails } from '../interfaces/cardsTypes/cardsTypes'

export const comicsApi = createApi({
  reducerPath: 'comicsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://stapi.co/api/v1/rest/' }),
  endpoints: (builder) => ({
    getComicsByUid: builder.mutation<CardDetails, string>({
      query: (uid) => `comics?uid=${uid}`,
    }),
  }),
})

export const { useGetComicsByUidMutation } = comicsApi
