import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const populationApi = createApi({
  reducerPath: "populationApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://datausa.io/api/" }),
  endpoints: (builder) => ({
    getAllYears: builder.query({
      query: () => "data?drilldowns=Nation&measures=Population",
    }),
  }),
});

export const { useGetAllYearsQuery } = populationApi;
