import Link from 'next/link'
import React from 'react'
import PocketBase from 'pocketbase'
import { CreateNote } from './CreateNote'

async function getNotes() {
    const response = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30'
                    , { cache : 'no-store'})
    const data =  response.json()

    // const pb = new PocketBase('http://127.0.0.1:8090');
    // const data = await pb.collection('notes').getFullList({
    //     sort: '-created',
    // });
    return data
}

const NotesPage = async () => {
  let data = await getNotes()
  let notes = data.items


  return (
    <div>
        <h1>Notes</h1>
        <div>
            {  
                notes?.map((note: { id: any })=> {
                    return <Note key={note.id} note={note}/>
                })
            }
        </div>
        <CreateNote/>
    </div>
  )
}

function Note({ note } : any) {
    const { id, title, content, created } = note || {}

    return (
        <Link href={`notes/${id}`}>
            <div>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}

export default NotesPage