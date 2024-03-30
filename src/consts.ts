import { Metadata } from "next";

export const SEO = {
  SITE_URL: "https://garmoda.tech/",
  SITE_TITLE: "Garmoda | Garden Monitoring Smakda | Di buat dan di berdayakan oleh zaadevofc | Di dukung oleh SMKN 2 SUKOHARJO",
  SITE_DESCRIPTION: "Garden Monitoring Smakda berbasis IOT di buat dan di berdayakan oleh zaadevofc dan di dukung oleh SMKN 2 SUKOHARJO di perguna untuk memonitoring garden house yang ada di sekolah ini.",
  SITE_AUTHORS: [{ name: "zaadevofc", url: "https://zaadevofc.tech" }, { name: "zaadevofc", url: "https://instagram.com/zaadevofc" }],
  SITE_CREATOR: "zaadevofc",
  SITE_CREATOR_EMAIL: "zaadevofc@gmail.com",
  SITE_CATEGORY: "iot",
  SITE_KEYWORDS: ["monitoring", "iot", "smakda", "smkn 2 sukoharjo", "garmoda"],
}

export const METADATA: Metadata = {
  title: SEO.SITE_TITLE,
  description: SEO.SITE_TITLE,
  authors: SEO.SITE_AUTHORS,
  creator: SEO.SITE_CREATOR,
  category: SEO.SITE_CATEGORY,
  keywords: SEO.SITE_KEYWORDS,
  appLinks: { web: { url: SEO.SITE_URL } },
  alternates: { canonical: SEO.SITE_URL },
  applicationName: SEO.SITE_TITLE,
  bookmarks: SEO.SITE_URL,
  openGraph: {
    url: SEO.SITE_URL,
    siteName: SEO.SITE_TITLE,
    ttl: 60,
    type: 'website',
    countryName: 'Indonesia',
    description: SEO.SITE_DESCRIPTION,
    title: SEO.SITE_TITLE,
    emails: SEO.SITE_CREATOR_EMAIL,
    images: SEO.SITE_URL + 'zapi-logo.png',
  },
  twitter: {
    site: SEO.SITE_TITLE,
    siteId: SEO.SITE_TITLE,
    title: SEO.SITE_TITLE,
    description: SEO.SITE_DESCRIPTION,
    creator: SEO.SITE_CREATOR,
    images: SEO.SITE_URL + 'zapi-logo.png',
    creatorId: SEO.SITE_CREATOR,
    card: 'summary_large_image'
  }
};