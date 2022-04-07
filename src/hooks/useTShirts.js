import { useEffect, useState } from "react"

const useTShirts = () => {
    const [tShirts, setTSirts] = useState([]);
    useEffect( () => {
        fetch('tshirts.json')
        .then(res => res.json())
        .then(data => setTSirts(data));
    }, [])
    return [tShirts, setTSirts];
}

export default useTShirts;