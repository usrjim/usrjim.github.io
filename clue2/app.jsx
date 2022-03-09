import { render } from 'solid-js/web'
import { usePause, PauseProvider } from './contexts/pause'
import { Characters } from './components/characters'
import { Weapons } from './components/weapons'
import { Rooms } from './components/rooms'

function App() {
  const [pause, { togglePause }] = usePause()
  const ResumeButton = () => {
    return (
      <div className={`ui centered card ${pause() ? '' : 'hidden'}`}>
        <div className="image">
          <img src="img/resumeGame.jpg" onClick={togglePause} />
        </div>
      </div>
    )
  }

  return (
    <>
      <div className={pause() ? 'hidden' : ''}>
        <Characters />
        <Weapons />
        <Rooms />
      </div>
      <ResumeButton />
    </>
  )
}

render(() => (
  <PauseProvider pause={false}>
    <App />
  </PauseProvider>
), document.getElementById('root'))
