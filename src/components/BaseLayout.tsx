import {clsx} from 'clsx';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {ReactNode} from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({children, locale}: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="h-full w-full" lang={locale}>
      <body className={clsx('flex h-full flex-col')}>
      <NextIntlClientProvider messages={messages}>
          <NavBar/>
          {children}
          <Footer/>
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
