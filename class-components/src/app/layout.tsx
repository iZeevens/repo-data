import logo from '../public/favicon.ico'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vite + React + TS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={logo.src} />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
