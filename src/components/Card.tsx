import React from 'react'

interface CardProps {
    cardTitle: string
    cardDesc : string
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({cardTitle, cardDesc, children} : CardProps) => {
  return (
    <div className='shadow bg-white md:m-12 m-2 p-6 rounded-lg ' >
        <h1 className='text-2xl font-medium ' >{cardTitle}</h1>
        <br />
        <p className='tracking-wide mb-4' >{cardDesc}</p>
        {children}
    </div>
  )
}

export default Card