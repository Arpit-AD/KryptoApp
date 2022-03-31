import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '3b81d2fab0msh6bb3a7fead0701cp17b67djsnced3a0c44f45'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    // baseQuery: fetchBaseQuery({ baseUrl : 'https://coinranking1.p.rapidapi.com' }),
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
                query: () => createRequest(`/coins`)
        }),
        getExchanges: builder.query({
                query: () => createRequest(`/coin/Qwsogvtv82FCd/exchanges`)
        }),
    })
})

export const {
    useGetCryptosQuery,
    useGetExchangesQuery
} = cryptoApi;

// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     tiers: '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': '3b81d2fab0msh6bb3a7fead0701cp17b67djsnced3a0c44f45'
//   }
// };
