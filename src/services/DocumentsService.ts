import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { supabase } from "../lib/client"

export const documentsApi = createApi({
	reducerPath: "DocumentsApi",
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SUPABASE_URL }),
	endpoints: (builder) => ({
		getDocuments: builder.query<any, any>({
			queryFn: async () => {
				const { data: documents, error } = await supabase.from("documents").select("*")

				return { data: documents, error }
			},
		}),
	}),
})

export const { useGetDocumentsQuery } = documentsApi
