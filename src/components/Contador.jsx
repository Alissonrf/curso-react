import { useState } from "react";

// imutabilidade - uma variavel nunca vai ter seu valor alterado, mas sim vai receber um valor novo.

export function Counter() {

    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>increment</button>
        </div>
    )
}
