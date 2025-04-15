import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

async function importMessages(locale: string) {
    const prefix = `../../messages/${locale}`;
    return {
        'common': (await import(`${prefix}/common.json`)).default,
        'home': (await import(`${prefix}/home.json`)).default
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