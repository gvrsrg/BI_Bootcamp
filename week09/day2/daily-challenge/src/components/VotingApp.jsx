import { useState } from 'react'
import './VotingApp.css'

export default function VotingApp({language, setLanguage}) {

  function vote(name) {
    const newLanguage = [...language]
    const index = newLanguage.findIndex((item) => item.name === name)
    newLanguage[index].votes++
    setLanguage(newLanguage)
  }

  return (
    <div>
      <h1>VotingApp</h1>

      {language.map((item, indx) => {
        return(<div key={indx}>
          <button className='voting-button' onClick={() => vote(item.name)}><h2>{item.name} {item.votes} </h2></button>
          
        </div>)})
      }
    </div>
   )
}
