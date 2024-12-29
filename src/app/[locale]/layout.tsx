import {notFound} from 'next/navigation';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import BaseLayout from '@/components/BaseLayout';
import {routing} from '@/i18n/routing';

type Props = {
    children: ReactNode;
    params: { locale: string };
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
                                           params: {locale}
                                       }: Omit<Props, 'children'>) {
    const t = await getTranslations({locale, namespace: 'common'});

    return {
        title: t('mainName')
    };
}

export default async function LocaleLayout({
                                               children,
                                               params: {locale}
                                           }: Props) {
    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as ('ru' | 'en'))) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    return <BaseLayout locale={locale}>{children}</BaseLayout>;
}