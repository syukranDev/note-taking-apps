import Link from 'next/link'
import React from 'react'

async function getNotes(noteId: string) {
    await new Promise((resolve) => setTimeout(resolve, 500))

    const response = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`
                    , { cache: 'no-store'})
    const data =  response.json()
    return data
}

const NotePage = async ({ params } : any ) => {
  let note = await getNotes(params.id)
  

  return (
    <div>
        <Link href='/notes' className='underline'>Back</Link>
        <h1>notes/{note.id}</h1>
        <div>
            <h2>{note.title}</h2>
            <h5>{note.content}</h5>
            <p>{note.created}</p>
        </div>
    </div>
  )
}


export default NotePage