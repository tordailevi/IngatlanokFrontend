import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const IngatlanContext = createContext();

export function IngatlanokProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [IngatlanLista, setIngatlanLista] = useState([])

    function getIngatlanok() {
        axios
            .get("http://127.0.0.1:8000/api/ingatlanok")
            .then((response) => {
                setIngatlanLista(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            });
    }

    useEffect(() => {
        getIngatlanok()
    }, [])


    function deleteIngatlan(adat) {
        console.log(adat)
        axios.delete('https://fakestoreapi.com/ingatlanok' + "/" + adat.id)
            .then(function (response) {
                console.log(response);

                setIngatlanLista(prevLista => prevLista.filter(ingatlan => ingatlan.id !== adat.id));

            })
            .catch(function (error) {
                console.log(error);
            });


    }

    return <IngatlanContext.Provider value={{ IngatlanLista, deleteIngatlan, getIngatlanok }}>
        {children}
    </IngatlanContext.Provider>
}