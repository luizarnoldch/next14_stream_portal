import React from 'react'

type Props = {
    name: string
}

const AuthName = ({name}: Props) => {
  return (
    <p className=''>{name}</p>
  )
}

export default AuthName