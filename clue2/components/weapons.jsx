import { Card } from './card'

export function Weapons() {
  const weapons = [
    {
      name: "REVOLVER",
      pic: "revolver.jpg"
    },
    {
      name: "DAGGER",
      pic: "dagger.jpg"
    },
    {
      name: "LEAD PIPE",
      pic: "leadpipe.jpg"
    },
    {
      name: "ROPE",
      pic: "rope.jpg"
    },
    {
      name: "CANDLESTICK",
      pic: "candlestick.jpg"
    },
    {
      name: "WRENCH",
      pic: "wrench.jpg"
    }
  ]

  return (
    <div className="ui piled segment">
      <div className="ui container">
        <h1>Weapons</h1>
        <div className="ui six cards">
          {weapons.map(w => (
            <Card key={w.name} data={w} />
          ))}
        </div>
      </div>
    </div>
  )
}
