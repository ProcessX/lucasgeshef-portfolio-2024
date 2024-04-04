import Link from 'next/link'
import React from 'react'

function Button({ label = "label", type = "", leftIcon, rightIcon }) {
  let btnType = type == "outline" ? "text-primary-200 bg-primary-200/0 hover:bg-primary-200/25 hover:text-primary-300" : "hover:bg-primary-300";
  let btnLeftIcon = leftIcon != null ? "pl-7" : "bg-green"
  let btnRightIcon = rightIcon != null ? "pr-7" : "bg-green"
  let leftIconVisibility = leftIcon != null ? "inline-block" : "hidden"
  let rightIconVisibility = rightIcon != null ? "inline-block" : "hidden"
  return (
    <Link href={'#'} className={`duration-150 border-2 border-primary-200 hover:border-primary-300 border-box bg-primary-200 inline-block text-dark-950 py-4 px-11 ${btnType} ${btnLeftIcon} ${btnRightIcon} rounded-lg w-full tablet:w-auto`}>
      <div className='ml-auto mr-auto w-fit'>
        <span className={'h-6 w-6 mr-6 ' + leftIconVisibility}></span>
        <span className='c-font-md'>{label}</span>
        <span className={'h-6 w-6 ml-6 ' + rightIconVisibility}></span>
      </div>
    </Link>
  )
}

export default Button