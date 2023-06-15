import React from 'react'
import "./../../globals.css"
import Image from 'next/image'
import { Spacer } from '../layouts'

export default function SearchButton() {
  return (
        <div className=' items-center h-full flex flex-row'>
            <div> Search </div>
            <Spacer width='w-2' />
            <Image src='/search.svg' alt='search logo'
                width={32} height={16}/>   
        </div> 
  )
}
