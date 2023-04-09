import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function getObjectUrl(blobObject: Blob | null) {
	return blobObject == null ? "" : URL.createObjectURL(new Blob([blobObject]))
}

export const authorization = `Bearer ${import.meta.env.VITE_SUPABASE_API_KEY}`
export const headers = { authorization, "content-type": "application/json" }
