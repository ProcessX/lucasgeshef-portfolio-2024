import Link from 'next/link'
import React from 'react'

function ProjectCard() {
  return (
    <Link href={"#"}>
      <div className='h-[240px] w-full bg-dark-800 rounded-lg'>

      </div>
      <h4 className='c-font-lg'>Project name</h4>
      <p className='text-dark-200'>Project category</p>
    </Link>
  )
}

export default ProjectCard