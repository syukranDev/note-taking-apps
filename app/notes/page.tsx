import Link from 'next/link'
import React from 'react'
import { CreateNote } from '../components/CreateNote'
import Note from '../components/Note'


export const revalidate = 60

async function getNotes() {
    const response = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30')
    const data = response.json()
    return data
}


const NotesPage = async () => {
  let data = await getNotes()
  let notes = data.items

  return (
      <div>
        <Link href={'/'}>Back to Home</Link>
        <h1>Notes</h1>
        <div className='grid'>
            {  
                notes.length >= 1 ? (
                notes?.map((note: { id: any })=> {
                    return <Note key={note.id} note={note}/>
                })
                ) : (
                    <p>No note has been submit!</p>
                )

                
            }
        </div>
        <CreateNote/>
    </div>
  )
}


export default NotesPage