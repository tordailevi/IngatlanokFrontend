import React, { useContext } from 'react';
import { IngatlanContext } from '../../contexts/IngatlanContext';
import Ingatlan from "./Ingatlan";

export default function Ingatlanok() {
    const { ingatlanokLista, loading } = useContext(IngatlanContext);

    if (loading) {
        return <div>Betöltés folyamatban...</div>;
    }
    if (!ingatlanokLista || ingatlanokLista.length === 0) {
        return <div>Nincsenek ingatlanok.</div>;
    }

    return (
        <div className="">
            <div classname="card">
                {ingatlanokLista.map((ingatlan) => (
                    <Ingatlan key={ingatlan.id} ingatlan={ingatlan} />
                ))}
            </div>
        </div>
    )
}
