import React from 'react'
import CircularText from './CircularText'

function Logo() {
  return (
    <div className="flex items-center justify-center">
        <div className="absolute">
            <CircularText text="MALEESHA DINURANGA"/>
        </div>
        <img src="/img/logo.svg" alt="" className='w-[22px]'></img>
    </div>
  )
}

export default Logo
