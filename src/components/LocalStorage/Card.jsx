import React from 'react'

const Card = (props) => {
  return (
    
    <div className="px-2 py-10 flex flex-wrap">
    
        <div
          className="w-[20vw] rounded flex flex-col text-center items-center p-5 bg-zinc-800 text-white border border-zinc-600"
        >
          <img
            className="h-25 w-23 rounded object-cover object-center"
            src={props.elem.imageURL}
            alt=""
          />

          <h1 className="text-2xl mt-3 font-semibold">{props.elem.username}</h1>
          <h5 className="text-lg text-blue-800 font-semibold my-2">
            {props.elem.userRole}
          </h5>
          <p className="text-sm font-medium">{props.elem.userDesc}</p>
          <button
            onClick={(idx) => {
              props.deleteHandler();
            }}
            className="py-2 px-10 cursor-pointer active:scale-[0.89] font-semibold bg-red-700 rounded mt-4 text-white"
          >
            Remove
          </button>
        </div>

  </div>
  )
}

export default Card