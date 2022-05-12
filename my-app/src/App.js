import { useState, useEffect, useMemo } from 'react';
import Button from './Button';
import styles from './App.module.css';

function App() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState('');
    const onClick = () => setCounter(prev => prev + 1);
    const onChange = event => setKeyword(event.target.value);

    useEffect(() => {
        if (keyword !== '') {
            console.log('Search for ', keyword);
        }
    }, [keyword]);

    useEffect(() => {
        console.log('Counter is ', counter);
    }, [counter]);

    return (
        <div>
            <input type="text" placeholder="Search here" onChange={onChange} value={keyword} />
            <h1 className={styles.title}>{counter}</h1>
            <Button text="Continue" onClick={onClick} />
        </div>
    );
}

export default App;
