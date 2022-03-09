import { createSignal } from 'solid-js'

export function Card({ data }) {
  const [isRuledOut, setRuledOut] = createSignal(false)
  const ToggleClass = () => {
    console.log('ToggleClass!!', isRuledOut())
    setRuledOut(!isRuledOut())
  }

  return (
    <div className="ui card">
      <div className="image">
        <img src={"img/" + data.pic} className={isRuledOut() ? 'ruled-out' : null} onClick={ToggleClass} />
      </div>
    </div>
 )
}
