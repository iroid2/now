import React from 'react'

export default function Button({title,className}:{title:string,className:string}) {
  return (
    <button className={` ${className}rounded-md`}>{title}</button>
  )
}
