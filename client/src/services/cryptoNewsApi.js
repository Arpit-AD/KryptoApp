import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoNewsHeaders = {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '3b81d2fab0msh6bb3a7fead0701cp17b67djsnced3a0c44f45'
}

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
     
    })
  });


export const { useGetCryptoNewsQuery } = cryptoNewsApi;




// headers: {
//     'x-bingapis-sdk': 'true',
//     'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//     'x-rapidapi-key': '3b81d2fab0msh6bb3a7fead0701cp17b67djsnced3a0c44f45'
//   }