import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ru', 'en', 'de'],
  defaultLocale: 'ru'
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};