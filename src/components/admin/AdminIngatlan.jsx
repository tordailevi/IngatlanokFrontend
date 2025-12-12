import React , {useContext} from 'react'

export default function AdminIngatlan(props) {
const {deleteIngatlan} =useContext(IngatlanContext)
    function torles(){
        deleteIngatlan(props.ingatlan)
        
    }
    return (
        <tr>
            <td>{props.ingatlan.id}</td>
            <td>{props.ingatlan.nev}</td>
            <td>{props.ingatlan.ar}</td>
            <td>{props.ingatlan.leiras}</td>
            <td>{props.ingatlan.category}</td>
            <td><img src={props.ingatlan.image} alt={props.ingatlan.nev} style={{width:"50px"}}/></td>
            <td><button className="btn" onClick={torles}>🪣</button></td>
        </tr>
    )
}