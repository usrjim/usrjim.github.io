import * as React from 'react'
import ReactDOM from 'react-dom'

import { Characters } from './components/characters'
import { Weapons } from './components/weapons'
import { Rooms } from './components/rooms'
import * as CustomEvent from './events'

function App() {
  const [isPaused, setIsPaused] = React.useState(false)

  const pauseGame = React.useCallback(() => {
    console.log('pauseGame called')
    setIsPaused(true)
  }, [])

  const resumeGame = React.useCallback(() => {
    console.log('resumeGame called')
    setIsPaused(false)
  }, [])

  CustomEvent.on('pause', pauseGame)
  CustomEvent.on('resume', resumeGame)

  const triggerResume = React.useCallback(() => {
    CustomEvent.trigger('resume')
  }, [])

  const ResumeButton = () => {
    return (
      <div className={`ui centered card ${isPaused ? '' : 'hidden'}`}>
        <div className="image">
          <img src="img/resumeGame.jpg" onClick={triggerResume} />
        </div>
      </div>
    )
  }

  return (
    <>
      <div className={isPaused ? 'hidden' : ''}>
        <Characters />
        <Weapons />
        <Rooms />
      </div>
      <ResumeButton />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
