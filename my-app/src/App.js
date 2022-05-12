import { useState, useEffect, useMemo } from 'react';
import Button from './Button';
import styles from './App.module.css';

function Hello() {
    useEffect(() => {
        console.log('Mount');

        return () => console.log('Destroy');
    }, []);
    return <h1>Hello</h1>;
}

function App() {
    // const [counter, setCounter] = useState(0);
    // const [keyword, setKeyword] = useState('');
    // const onClick = () => setCounter(prev => prev + 1);
    // const onChange = event => setKeyword(event.target.value);
    // useEffect(() => {
    //     if (keyword !== '') {
    //         console.log('Search for ', keyword);
    //     }
    // }, [keyword]);
    // useEffect(() => {
    //     console.log('Counter is ', counter);
    // }, [counter]);
    // return (
    //     <div>
    //         <input type="text" placeholder="Search here" onChange={onChange} value={keyword} />
    //         <h1 className={styles.title}>{counter}</h1>
    //         <Button text="Continue" onClick={onClick} />
    //     </div>
    // );

    const [show, setShow] = useState(false);
    const onClick = () => setShow(prev => !prev);
    return (
        <div>
            {show && <Hello />}
            <button onClick={onClick}>{show ? 'Hide' : 'Show'}</button>
        </div>
    );
}

export default App;
