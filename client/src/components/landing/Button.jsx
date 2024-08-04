import React from 'react'

const Button = ({name,className}) => {
  return (
    <button className={` rounded-tl-2xl rounded-tr-md rounded-bl-md rounded-br-2xl text-white px-[2vw] md:px-[1.5vw] py-[0.75vw]  ${className}`}>
        {name}
    </button>
  )
}

export default Button