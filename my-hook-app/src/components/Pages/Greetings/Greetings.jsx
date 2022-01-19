import { useState } from 'react'

export const Greetings = () => {
    const [ name, setName] = useState('Tordis');
    console.log(name);

    return(
        <>
            <h2>Hej mit navn er {name}</h2>
            <input type="text" onInput={ e => setName(e.target.value)}/>
            {/* <button onClickCapture={() => setName('Tim')}>Klik for at sige hej til en anden</button> */}
        </>
    )
}