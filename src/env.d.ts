/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTENTFUL_API_KEY: string;
  readonly VITE_CONTENTFUL_SPACE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
