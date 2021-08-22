import * as React from 'react'
import { Card } from './card'
import { PauseGame } from './pause'

export function Rooms() {
  const rooms = [
    {
      name: "BILLIARD ROOM",
      pic: "billiard.jpg"
    },
    {
      name: "STUDY",
      pic: "study.jpg"
    },
    {
      name: "HALL",
      pic: "hall.jpg"
    },
    {
      name: "LOUNGE",
      pic: "lounge.jpg"
    },
    {
      name: "DINING ROOM",
      pic: "dining.jpg"
    },
    {
      name: "BALLROOM",
      pic: "ball.jpg"
    },
    {
      name: "CONSERVATORY",
      pic: "conservatory.jpg"
    },
    {
      name: "LIBRARY",
      pic: "library.jpg"
    },
    {
      name: "KITCHEN",
      pic: "kitchen.jpg"
    }
  ]

  return (
    <div className="ui piled segment">
      <div className="ui container">
        <h1>Rooms</h1>
        <div className="ui five cards">
          {rooms.map(r => (
            <Card key={r.name} data={r} />
          ))}
          <PauseGame />
        </div>
      </div>
    </div>
  )
}
