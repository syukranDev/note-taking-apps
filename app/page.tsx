import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Link from 'next/link'
import { CreateNote } from './notes/CreateNote'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href={'/notes'}>All Notes</Link>
      <CreateNote/>
    </div>
  )
}
