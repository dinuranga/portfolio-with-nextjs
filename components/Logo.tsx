import React from 'react';
import CircularText from './CircularText';
import Image from 'next/image'

function Logo() {
  return (
    <div className="flex items-center justify-center">
        <div className="absolute">
            <CircularText text="MALEESHA DINURANGA"/>
        </div>
        <Image src="/img/logo.svg" alt="" width={22} height={22}></Image>
    </div>
  )
}

export default Logo
