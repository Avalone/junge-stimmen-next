import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import {ReactNode} from 'react';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Junge Stimmen',
  // description: 'Choir',
}

type Props = {
  children: ReactNode;
};

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }
export default function RootLayout({children}: Props) {
  return children;
}