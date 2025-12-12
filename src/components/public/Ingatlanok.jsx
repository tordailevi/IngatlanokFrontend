import React, { useContext } from 'react';
import { IngatlanContext } from '../../contexts/IngatlanContext';
import Ingatlan from "./Ingatlan";

export default function Ingatlanok() {
    const {ingatlanokLista, loading} = useContext(IngatlanContext);
    
}
