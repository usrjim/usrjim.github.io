import * as React from 'react'
import * as CustomEvent from '../events'

export function PauseGame() {
  const triggerPause = React.useCallback(() => {
    CustomEvent.trigger('pause')
  }, [])

  return (
    <div className="ui card">
      <div className="image">
        <img src="img/pauseGame.jpg" onClick={triggerPause} />
      </div>
    </div>
 )
}
