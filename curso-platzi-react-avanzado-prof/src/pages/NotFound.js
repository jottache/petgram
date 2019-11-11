import React from 'react'
import { Link } from '@reach/router'

export const NotFound = () => {
  return (
    <>
      <h1>esta pagina no existe :(</h1>
      <Link to='/'>volver al home</Link>
    </>
  )
}
