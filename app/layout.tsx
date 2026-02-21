import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chintan Diwakar | Full Stack Developer',
  description: 'Full Stack Developer building applications and exploring AI agents. Based in Mumbai, India.',
  keywords: ['Chintan Diwakar', 'Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'AI', 'LangChain'],
  authors: [{ name: 'Chintan Diwakar' }],
  openGraph: {
    title: 'Chintan Diwakar | Full Stack Developer',
    description: 'Building Applications & Exploring Agents',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="grain antialiased">
        {children}
      </body>
    </html>
  )
}
