// / <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_API_KEY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
