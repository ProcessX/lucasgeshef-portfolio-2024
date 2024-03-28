import React from 'react'

function TechnologyChip({ label = 'label' }) {
  return (
    <div className='c-font-sm uppercase bg-light-50 bg-opacity-10 rounded-full px-5 py-[10px] inline-block'>{label}</div>
  )
}

export default TechnologyChip