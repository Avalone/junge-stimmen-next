import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

// async function importMessages(locale: string) {
//     const prefix = `../messages/${locale}`;
//     return {
//         'common': (await import(`${prefix}/common.json`)).default,
//         'home': (await import(`${prefix}/home.json`)).default
//     }
// }

async function importMessages(locale: string) {
    switch (locale) {
        case 'ru':
            return {
                'common': (await import('../messages/ru/common.json')).default,
                'home': (await import('../messages/ru/home.json')).default,
                'video': (await import('../messages/ru/video.json')).default
            };
        case 'en':
            return {
                'common': (await import('../messages/en/common.json')).default,
                'home': (await import('../messages/en/home.json')).default,
                'video': (await import('../messages/en/video.json')).default
            };
        default:
            throw new Error(`Unknown locale: ${locale}`);
    }
}

export default getRequestConfig(async ({requestLocale}) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale;

    // Ensure that the incoming `locale` is valid
    if (!locale || !routing.locales.includes(locale as 'ru' | 'en')) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (
            await (locale === 'ru'
                ? // When using Turbopack, this will enable HMR for `ru`
                importMessages('ru')
                : importMessages(locale))
        )
    };
});