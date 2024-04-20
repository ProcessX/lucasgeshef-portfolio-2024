import Link from 'next/link'
import React from 'react'
import Button from '../button/Button'
import BurgerMenuButton from '../burgerMenuButton/BurgerMenuButton'
import LinkArrow from '../linkArrow/LinkArrow'

function HeaderMenu() {
  return (
    <header className='fixed w-[100vw] left-0 top-0 z-50'>
      <div className='containerRaw pt-6 pb-6 desktop:pt-8 desktop:pb-8 bg-dark-950 headerMenu justify-between items-center flex tablet:block'>
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
        <BurgerMenuButton />
      </div>
      <div className='absolute left-0 top-0 bg-primary-50 h-[100vh] w-full text-dark-950 flex flex-col justify-between'>
        <div className='containerRaw w-full'>
          <nav className='mt-[160px]'>
            <ul>
              <li className='mb-4'>
                <LinkArrow label={"Home"} url={"/"} />
              </li>
              <li>
                <LinkArrow label={"Projects"} url={"/projects"} />

              </li>
            </ul>
          </nav>
          <div className='mt-[96px]'>
            <p className='mb-6'>
              <span className='c-font-base block'>Want to reach out?</span>
              <span className='c-font-base block'>Find me here.</span>
            </p>
            <Button label='contact@lucasgeshef.be' className="w-full" />
          </div>
        </div>
        <div className='containerRaw w-full'>
          <p>Or check my socials</p>
        </div>
      </div>
    </header>
  )
}

export default HeaderMenu