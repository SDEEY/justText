import './App.css';
import {useState, useEffect} from "react";

function App() {
    const [textInvisible, setTextInvisible] = useState(false)
    const [textIsDeleted, setTextIsDeleted] = useState(false)

    const pressSpaceForDeleteText = (e) => {
        if(e.keyCode === 32) setTextIsDeleted(true)
    }

    useEffect(() => {
        document.addEventListener("keydown", pressSpaceForDeleteText);

        return () => {
            document.removeEventListener("keydown", pressSpaceForDeleteText);
        };
    }, []);

    return (
        <div className="App">
            {textIsDeleted ? null :
                <p onClick={() => setTextInvisible(!textInvisible)}
                   className={textInvisible ? 'onClickInvisible' : ''}
                >
                    Георгий<br/>Начинающий web-программист / Junior Frontend Developer
                </p>}
        </div>
    );
}

export default App;
