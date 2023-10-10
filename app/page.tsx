'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [hover, setHover] = useState(false);

  return (
    <main className={hover ? "flex min-h-screen flex-col items-center justify-center p-24 main-intro hovered" : "flex min-h-screen flex-col items-center justify-center p-24 main-intro"}>
      <div className='bg-white play-btn'>
        <Link onMouseEnter={() => setHover(true)} onMouseLeave={() => {setHover(false)}} href={'/character'}>Play!</Link>
      </div>
    </main>
  )
}
