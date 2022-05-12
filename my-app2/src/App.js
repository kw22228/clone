import { useState } from 'react';

function App() {
    const [todo, setTodo] = useState('');
    const [list, setList] = useState([]);

    const onChange = e => setTodo(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        if (!todo) return;

        console.log('start');
        setList(prevList => {
            console.log('setList');
            return [todo, ...prevList];
        });
        setTodo('');

        console.log('end');
    };

    return (
        <div>
            <h1>My Todo List Count : {list.length}</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Write your to do"
                        value={todo}
                        onChange={onChange}
                    />
                </div>
                <button>Add</button>
            </form>
            <hr />
            <ul>
                {list.map((li, index) => {
                    return <li key={index}>{li}</li>;
                })}
            </ul>
        </div>
    );
}

export default App;
