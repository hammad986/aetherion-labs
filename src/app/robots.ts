import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const allowedCrawlers = [
    '*',
    'Googlebot',
    'Bingbot',
    'GPTBot',
    'ChatGPT-User',
    'OAI-SearchBot',
    'ClaudeBot',
    'Claude-SearchBot',
    'Claude-User',
    'PerplexityBot',
    'Applebot',
  ];

  return {
    rules: allowedCrawlers.map((userAgent) => ({
      userAgent,
      allow: '/',
      disallow: ['/assets/_archive_originals/'],
    })),
    sitemap: 'https://hammad.dpdns.org/sitemap.xml',
  };
}
