'use client';

import clsx from 'clsx';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/routing';
import {ChangeEvent, useTransition} from 'react';

export default function LocaleSwitcher() {
  const t = useTranslations('common.localeSwitcher');
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  }

  return (
    <label
      className={clsx(
        'relative',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className="sr-only">{t('label')}</p>
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6 font-sans text-xl"
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {['ru', 'en'].map((cur) => (
          <option key={cur} value={cur}>
            {t('locale', {locale: cur})}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-2 top-[-7px]">⌄</span>
    </label>
  );
}