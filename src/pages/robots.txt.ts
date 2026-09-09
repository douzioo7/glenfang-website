import { site } from '../config/site';

export function GET() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', site.url)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
