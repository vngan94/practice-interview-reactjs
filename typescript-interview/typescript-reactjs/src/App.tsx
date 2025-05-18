import { useState } from "react";

interface Props {
    greeting?: string
}

const App = ({greeting = "Hello"}: Props) => {
    const [count, setCount] = useState<number>(0);
    return (
        <div>
            {count}
            {greeting}
        </div>
    )
}

export default App;