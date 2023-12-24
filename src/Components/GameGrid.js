import React from 'react'
import { cell } from './Data'
import { shuffle } from '../Util/uitl'

function GameGrid({ arr, page, next, changeSum }) {
  const shuffledcell = shuffle(cell)
  //   console.log(arr)
  const add = () => {
    changeSum((prev) => prev + page)

    next()
  }
  // dark:bg-${shuffledcell[idx]}-300
  return (
    <div className=' mt-28 flex justify-center flex-col'>
      <ul className=' grid grid-cols-3 dark:bg-stone-900/30 bg-lime-400/30 gap-2 rounded-md'>
        {arr.map((item, idx) => (
          <li
            key={idx}
            className={` sm:h-32 sm:w-32 h-24 w-24 rounded-md ${shuffledcell[idx]} text-wrap text-center font-mono font-medium dark:text-zinc-200 text-xs sm:text-base pt-[40%]`}
          >
            {item}
          </li>
        ))}
      </ul>
      {page === 0 && (
        <>
          <h className='text-xs sm:text-base font-mono w-[19rem] sm:w-[25rem] mt-2 p-2 text-center rounded bg-indigo-400/90 dark:bg-slate-900/70 dark:text-slate-200'>
            Choose one fruit from the options, and then Start answering the
            question
          </h>
          <button
            onClick={next}
            className=' my-4 bg-indigo-400/90 dark:bg-slate-900/90 py-2 px-4 rounded dark:text-slate-200 hover:bg-indigo-200/90 dark:hover:bg-slate-700/90'
          >
            Start Answering
          </button>
        </>
      )}
      {page > 0 && (
        <>
          <h className='text-xs sm:text-base font-mono w-[19rem] sm:w-[25rem] mt-2 py-2 text-center rounded bg-indigo-400/90 dark:bg-slate-900/70 dark:text-slate-200'>
            Can you see the fruit of your choice?
          </h>
          <div className='flex justify-between'>
            <button
              onClick={add}
              className=' my-4  bg-indigo-400/90 dark:bg-slate-900/70 py-2 px-6 rounded dark:text-slate-200 hover:bg-indigo-200/90 dark:hover:bg-slate-700/90'
            >
              <img src='/images/yes.png' alt='' className=' h-8 w-8' />
              Yes
            </button>
            <button
              onClick={next}
              className=' my-4 bg-indigo-400/90 dark:bg-slate-900/70 py-2 px-6 rounded dark:text-slate-200 hover:bg-indigo-200/90 dark:hover:bg-slate-700/90'
            >
              <img src='/images/no.png' alt='' className=' h-8 w-8' />
              No
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default GameGrid
