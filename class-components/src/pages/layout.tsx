import logo from '../public/favicon.ico'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React + TS</title>
        <link rel="icon" href={logo.src} />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
