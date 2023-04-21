'use client'
import React, { useState } from 'react'

export const CreateNote = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] =  useState('')
 
    async function handleSubmit() {
        await fetch('http://127.0.0.1:8090/api/collections/notes/records/', {
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    title, 
                    content
                }),
            }
        )

        setContent('')
        setTitle('')
    }

  return (
    <form onSubmit={handleSubmit}>
        <h3>Form: Create a new Note</h3>
        <input 
         type="text" 
         placeholder='Insert your note..'
         value={title}
         onChange={ (e) => setTitle(e.target.value) }
        />
        <textarea  
           placeholder='Type your note description'
           value={content}
           onChange={(e) => setContent(e.target.value)}
        />
        <button type='submit'>Create Note</button>
    </form>
  )

}
