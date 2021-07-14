import React, { useState } from 'react'

export function Card({ data }) {
  const [isRuledOut, setRuledOut] = useState(false);
  const ToggleClass = () => {
    setRuledOut(!isRuledOut);
  }

  return (
    <div className="ui card">
      <div className="image">
        <img src={"img/" + data.pic} className={isRuledOut ? 'ruled-out' : null} onClick={ToggleClass} />
      </div>
    </div>
 )
}
