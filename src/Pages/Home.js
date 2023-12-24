import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='my-28 flex justify-center flex-col mx-8 p-2  bg-white/70 dark:bg-black/50 dark:text-white/80 rounded-md font-mono'>
      <h1 className=' text-2xl font-semibold pb-2'>
        Greetings, Welcome to guessing game...
      </h1>
      <h2 className=' text-lg font-semibold pb-4'>
        You will choose, the game will guess ;)
      </h2>
      <p className='pb-8'>
        Here we tried bring back one of our childhood games to your fingertips
        once again. Most of us have played it atleast once in our
        childhood...kids these days are so much into video games that they don't
        even know half of the games we used to play in our school days. This is
        our effort to help these two generations meet in a way so that TODAY's
        kids can enjoy YESTERDAY's games as well...also there's a added bonus of
        learning something new about your favourite fruits (perhaps)
      </p>
      <p className='pb-4'>
        Now let me introduce you to the game and how to play it... It's
        basically a guessing game. Now I will explain the rules...
      </p>
      <u className='pb-10 list-none no-underline '>
        <li className='pb-4'>
          1. In the first page there are names of few fruits. You have to choose
          any one fruit from the list and
          <span className='font-bold'> remeber it</span>.
        </li>
        <li className='pb-4'>
          2. Then you have to answer few easy questions, (Yes or No Type). You
          will be given a list of fruits again. In the list you may or may not
          see the fruit that you selected.
        </li>
        <li className='pb-4'>
          3. If you see the fruit that you selected you click
          <span className='font-bold'> "Yes".</span>
        </li>

        <li className='pb-4'>
          4. In case you can don't see your fruit you select
          <span className='font-bold'> "No".</span>
        </li>

        <li className='pb-4'>
          5. And that's it. If you do that for few times, the game will guess
          your fruit and may be you'll get to know some interesting facts about
          your favourite fruit.
        </li>
        <li className='pb-4'>
          6. Just click <span className='font-bold'>"Start the Game"</span> when
          you're ready. Hope you enjoy playing...
        </li>
      </u>

      <Link
        to='/game'
        className=' my-4  bg-indigo-400/90 dark:bg-slate-500/70 py-2 px-6 rounded dark:text-slate-200 hover:bg-indigo-200/90 dark:hover:bg-slate-700/90 text-center'
      >
        <button>Start the Game</button>
      </Link>
    </div>
  )
}

export default Home
