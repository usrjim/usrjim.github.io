import React from 'react'
import { Card } from './card'

export function Characters() {
  const characters = [
    {
      color: "red",
      name: "MISS SCARLETT",
      pic: "scarlett.jpg"
    },
    {
      color: "yellow",
      name: "COL. MUSTARD",
      pic: "mustard.jpg"
    },
    {
      color: "blue",
      name: "MRS. PEACOCK",
      pic: "peacock.jpg"
    },
    {
      color: "green",
      name: "MR. GREEN",
      pic: "green.jpg"
    },
    {
      color: "purple",
      name: "PROF. PLUM",
      pic: "plum.jpg"
    },
    {
      color: "pink",
      name: "DR. ORCHID",
      pic: "orchid.jpg"
    }
  ]

  return (
    <div className="ui piled segment">
      <div className="ui container">
        <h1>Character</h1>
        <div className="ui six stackable cards">
          {characters.map(c => (
            <Card key={c.color} data={c} />
          ))}
        </div>
      </div>
    </div>
  )
}
