import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'earmarkspod.com',
  title: 'Earmarks',
  subtitle: 'Out-of-print book reviews',
  lang: 'en-US',
  description: 'this podcast is a pod.punk production',
  author: {
    avatar: '/assets/EarmarksLogo-V1.png',
    name: 'Earmarks Podcast',
    bio: 'A podcast reviewing out-of-print and rare books that you SHOULD read!'
  },
  themeColor: '#3D4451'
}
