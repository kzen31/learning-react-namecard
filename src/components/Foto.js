import React from 'react'
import foto from './my-foto.jpg'

function Foto() {
  return (
    <img src={foto} alt="my own foto" className='Foto--picture' />
  )
}

export default Foto