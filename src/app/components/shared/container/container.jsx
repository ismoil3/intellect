import React from 'react'

const Container = ({children,className}) => {
  return (
    <div  className={'max-w-[1320px] m-auto px-[10px] '.concat(className)} >
        {children}
    </div>
  )
}

export default Container