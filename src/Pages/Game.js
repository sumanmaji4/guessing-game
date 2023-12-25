import React, { useEffect, useState } from 'react'
import { shuffle } from '../Util/uitl'
import { idMap, aboutFruit } from '../Components/Data'
import Result from './Result'
import GameGrid from '../Components/GameGrid'

const ItemPerPage = 9
const shuffledfruits = shuffle(aboutFruit)
const gameArr = shuffledfruits.slice(0, ItemPerPage).map((item) => item.name)
const restArr = shuffledfruits.slice(ItemPerPage).map((item) => item.name)

function Game() {
  const [page, setPage] = useState(0)
  const [sum, changeSum] = useState(0)
  const [roundArr, setRoundArr] = useState([])

  const nextPage = () => {
    setRoundArr([])
    setPage((prev) => prev + 1)
  }

  // set the array for each round------------------------------------------------

  useEffect(() => {
    let temp = gameArr.filter((curr, i) => {
      return idMap[i].index.includes(page)
    })

    let id = 0
    while (temp.length < 9) temp.push(restArr[id++])
    setRoundArr(temp)
  }, [page])

  // console.log(roundArr)

  //-----------------------------------------------------------------------------

  if (page === 0) return <GameGrid arr={gameArr} page={page} next={nextPage} />
  else if (page < 11)
    return (
      <GameGrid
        arr={roundArr}
        page={page}
        next={nextPage}
        changeSum={changeSum}
      />
    )
  else return <Result sum={sum} arr={shuffledfruits} />
}

export default Game
