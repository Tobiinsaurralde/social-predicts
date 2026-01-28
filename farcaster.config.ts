const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const farcasterConfig = {
  "accountAssociation": {
    "header": "eyJmaWQiOjI0MjM2OTcsInR5cGUiOiJhdXRoIiwia2V5IjoiMHg0QzExMzRBZDgxM2FCOEI4MEZCRDEwQ2RiM2RkODUwRjM4MDJhMTY5In0",
    "payload": "eyJkb21haW4iOiJzb2NpYWwtcHJlZGljdHMudmVyY2VsLmFwcCJ9",
    "signature": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEE8MJxj8Oy-vGxLabGyirNe8daP5G_mNdgAoWmt5ES3T3jZZv4OJRS_5cDH2o7pdMBDcqD8LeG6MXPmmL6HfdcCGwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
  },
  miniapp: {
    version: "1",
    name: "Cubey",
    subtitle: "Your AI Ad Companion",
    description: "Ads",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`,
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;

