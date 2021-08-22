import * as React from 'react'

export function Card({ data }) {
  const [isRuledOut, setRuledOut] = React.useState(false)
  const ToggleClass = () => {
    setRuledOut(!isRuledOut)
  }

  return (
    <div className="ui card">
      <div className="image">
        <img src={"img/" + data.pic} className={isRuledOut ? 'ruled-out' : null} onClick={ToggleClass} />
      </div>
    </div>
 )
}
