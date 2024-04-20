import React from 'react'
import Link from 'next/link'


function LinkArrow({ label, url }) {
  return (
    <Link href={url} className='c-font-4xl hover:opacity-50 duration-150 group arrowLink relative'>
      <spans>{label}</spans>
      <span className="h-10 w-10 material-symbols-sharp group-hover:translate-x-4 duration-200 ml-4 absolute left-[100%] top-1">arrow_right_alt</span>
    </Link>
  )
}

export default LinkArrow