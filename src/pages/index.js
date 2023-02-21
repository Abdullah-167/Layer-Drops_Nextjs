
import Quote from '@/views/Quote'
import Service from '@/views/Service'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Quote />
    <Service />
    </>
  )
}
