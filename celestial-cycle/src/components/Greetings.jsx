import { useState } from "preact/hooks";

export default function Greetings({messages}) {
    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
    const [greetings, setGreetings] = useState(messages[0]);

    return (
        <div>
            <h3>
                {greetings}! Grazie per la visita!
            </h3>
            <button onClick={() => setGreetings(randomMessage())}>Nuovo saluto</button>
        </div>
    );
}