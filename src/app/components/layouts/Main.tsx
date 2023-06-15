import React, {ReactNode} from 'react'
import "./../../globals.css"

interface MainProps{
    children: ReactNode;
}

export default function Main({children}: MainProps) {
  return (
    <main className='flex flex-col p-2 min-h-screen '>
        {children}
    </main>
  )
}
