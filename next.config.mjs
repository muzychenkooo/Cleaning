/** @type {import('next').NextConfig} */

// Для GitHub Pages: базовый путь и полный URL ассетов (включается при деплое)
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGitHubPages ? '/Cleaning' : '';
// Полный URL для assetPrefix гарантирует загрузку CSS/JS на GitHub Pages
const assetPrefix = isGitHubPages ? 'https://muzychenkooo.github.io/Cleaning/' : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  assetPrefix: assetPrefix || undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [{ hostname: '**' }],
  },
  // Редиректы при output: 'export' не работают на сервере — используем страницы в app/ceni, app/rasschet, app/uslugi-dlya-chastnyh-klientov
};

export default nextConfig;
