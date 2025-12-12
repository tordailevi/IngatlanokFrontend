import React from 'react'

export default function Ingatlan({ingatlan}) {
  return (
    <div className="card m-2">
        <div className="card-body">
            <h5 className="card-title">{ingatlan.MAJDAZINGATLANNEVE}</h5>
            <ul className="row g-2 p-0">
                <li>
                    <p>{ingatlan.leiras}</p>
                </li>
                <li>
                    <p>{ingatlan.ar}</p>
                </li>
                <li>
                    <p>{ingatlan.tehermentes}</p>
                </li>
            </ul>
        </div>
    </div>
  )
}
