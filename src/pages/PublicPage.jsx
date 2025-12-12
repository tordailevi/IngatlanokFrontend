import React, { useContext } from 'react'
import { IngatlanContext } from '../contexts/IngatlanContext'
import Ingatlanok from '../components/public/Ingatlanok'

export default function PublicPage({}) {
  const { ingatlanokLista } = useContext(IngatlanContext)
  return (
    <div>
      <Ingatlanok />
    </div>
  )
}
