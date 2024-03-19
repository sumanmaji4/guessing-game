import React from 'react'
import { idMap } from '../Components/Data'
import { Link } from 'react-router-dom'

function Result({ sum, arr }) {
  let id = -1

  for (let i = 0; i < 15; i++) {
    if (idMap[i]._id === sum) {
      id = i
      break
    }
  }
  console.log(sum, id, arr[id])

  return (
    <div className='w-10/12 sm:w-96 my-28 flex justify-center flex-col mx-8 p-2  bg-white/70 dark:bg-black/50 dark:text-white/80 rounded-md font-mono'>
      {id === -1 && (
        <h3 className=' font-bold text-red-800 dark:text-red-400 pb-8'>
          :( You must have clicked wrong key, Please play again and I will try
          to guess again
        </h3>
      )}

      {id >= 0 && (
        <>
          <h1>
            So, Your Favourite Fruit is{' '}
            <span className=' font-bold text-xl'>{arr[id].name}</span>
          </h1>
          <div className=' py-4 rounded-md overflow-hidden '>
            <img
              src={`/images/${arr[id].name}.jpg`}
              alt={`{arr[id].name} image`}
              className='rounded-md'
            />
          </div>
          <p>
            <span className=' font-bold text-xl'>Do you know ? </span>
            <p>{arr[id].about}</p>
            {/* We are working on it */}
          </p>
        </>
      )}

      <Link to='/'>
        <button className=' w-full text-center my-4 bg-indigo-400/90 dark:bg-slate-900/90 py-2 px-4 rounded dark:text-slate-200 hover:bg-indigo-200/90 dark:hover:bg-slate-700/90'>
          Play Again
        </button>
      </Link>
    </div>
  )
}

export default Result
