import React, { useState } from 'react';

const Form = () => {
    const [value, setValue] = useState('');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = event;

        setValue(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(value);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="username" value={value} onChange={onChange} />
                <button>Log in</button>
            </form>
        </div>
    );
};

export default Form;
