export function getPageUrl(currentUrl: string) {
  const vercelUrl = process.env.VERCEL_URL;
  const baseUrl = vercelUrl ? `https://${vercelUrl}` : 'http://localhost:3000';
  return `${baseUrl}${currentUrl}`;
}
