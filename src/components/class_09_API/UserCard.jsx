import React from 'react'

const UserCard = (props) => {
  return (
    <div className='h-50 w-60 text-black bg-zinc-200 flex flex-col items-center gap-3'>
        <h2>{props.elem.author}</h2>
        <img className='h-15 w-15 rounded' src={props.elem.download_url} alt="" />
        <h2>{props.elem.height}</h2>
        <img src={props.elem.url} alt="" />
    </div>
  )
}

export default UserCard