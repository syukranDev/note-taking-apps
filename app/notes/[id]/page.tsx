import React from 'react'

async function getNotes(noteId: string) {
    new Promise((resolve) => { setTimeout(resolve, 2000)})
    
    const response = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`
                    , { next : { revalidate: 10 }})
    const data =  response.json()
    return data
}

const NotePage = async ({ params } : any ) => {
    console.log(params.id)
  let note = await getNotes(params.id)
  

  return (
    <div>
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