import { usePause } from '../contexts/pause'

export function PauseGame() {
  const [pause, { togglePause }] = usePause()
  return (
    <div className="ui card">
      <div className="image">
        <img src="img/pauseGame.jpg" onClick={togglePause} />
      </div>
    </div>
 )
}
