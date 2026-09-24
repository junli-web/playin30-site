/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SIGNUP_ENDPOINT?: string;
  readonly PUBLIC_ADSENSE_CLIENT?: string;
  readonly PUBLIC_ADSENSE_SLOT_ARTICLE?: string;
  readonly PUBLIC_ADSENSE_SLOT_END?: string;
  readonly PUBLIC_PLAUSIBLE_DOMAIN?: string;
}
interface ImportMeta { readonly env: ImportMetaEnv; }
