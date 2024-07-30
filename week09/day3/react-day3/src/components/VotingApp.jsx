import { useState } from 'react'
import './VotingApp.css'

export default function VotingApp(props) {
  const [language, setLanguage] = useState([
    { name: 'PHP', votes:0 },
    { name: 'Python', votes:0 },
    { name: 'JavaScript', votes:0 },
    { name: 'Java', votes:0 }
  ])

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
