import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href={'/notes'}>Click Me To See All Notes</Link>
    </div>
  )
}
