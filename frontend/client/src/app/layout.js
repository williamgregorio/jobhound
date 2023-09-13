import './globals.css'
import { Inter } from 'next/font/google'
import Header from './templates/Header'
import Footer from './templates/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create quick resumes to land your next job',
  description: 'Quick Resumes helps you efficiently target each job post to incease hiring success rate',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        
        <Footer />
        </body>
    </html>
  )
}
