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

    return <IngatlanContext.Provider value={{ IngatlanLista }}>
        {children}
    </IngatlanContext.Provider>
}