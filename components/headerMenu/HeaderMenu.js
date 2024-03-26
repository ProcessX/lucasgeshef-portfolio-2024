import Link from 'next/link'
import React from 'react'

function HeaderMenu() {
  return (
    <header className='fixed w-[100vw] left-0 top-0 '>
      <div className='containerRaw pt-6 pb-6 desktop:pt-8 desktop:pb-8 bg-dark-950 headerMenu'>
        <nav className='c-font-md flex justify-between'>
          <Link href={'/'} className='duration-150 hover:opacity-50 inline logo'>Lucas Geshef</Link>
          <ul className='hidden tablet:block'>
            <li className='inline mr-16'>
              <Link href={'/projects'} className='duration-150 hover:opacity-50 '>Projects</Link>
            </li>
            <li className='inline'>
              <Link href={'/contact'} className='duration-150 hover:opacity-50 '>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderMenu