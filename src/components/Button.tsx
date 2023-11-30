import React from 'react'

interface Props {
    name: string
}

function Button(props: Props) {
  return (
    <div>
        <button>{props.name}</button>
    </div>
  )
}

export default Button