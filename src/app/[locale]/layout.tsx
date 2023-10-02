import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import PageLayout from "@/components/PageLayout";

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "en" }, { locale: "de" }];
}

interface Props {
  children?: ReactNode;
  params: any;
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  let messages;
  try {
    messages = {
      ...(await import(`../../messages/${locale}/common.json`)).default,
      ...(await import(`../../messages/${locale}/home.json`)).default,
    };
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="max-w-[1920px] m-auto">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <PageLayout>{children}</PageLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
