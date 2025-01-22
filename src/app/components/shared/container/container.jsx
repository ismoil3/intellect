import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[1320px] m-auto px-[10px]'>
        {children}
    </div>
  )
}

export default Container