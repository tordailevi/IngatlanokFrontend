import React, { useContext } from 'react'
import { TermekContext } from '../../contexts/TermekContext'
import AdminIngatlan from './AdminIngatlan'

export default function AdminIngatlanok() {
    const { ingatlanokLista } = useContext(TermekContext)
    console.log(ingatlanokLista)
    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Név</th>
                        <th>Ár</th>
                        <th>Leírás</th>
                        <th>Kategória</th>
                        <th>Kép</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ingatlanokLista.map((ingatlan) => {
                            return <AdminIngatlan ingatlan={ingatlan} key={ingatlan.id} />
                        }

                        )
                    }


                </tbody>
            </table>
        </div>
    )
}