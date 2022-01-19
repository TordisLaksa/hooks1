import { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0);
    return(
        <>
        <h2>Du har klikket {count} gange på knappen</h2>
        <button onClick={() => setCount(count + 1)}>Klik så tosset du vil!</button>
        </>
    )
}