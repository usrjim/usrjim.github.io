import React from 'react'
import ReactDOM from 'react-dom'

import { Characters } from './components/characters'
import { Weapons } from './components/weapons'
import { Rooms } from './components/rooms'

function App() {
  return (
    <div>
      <Characters />
      <Weapons />
      <Rooms />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
