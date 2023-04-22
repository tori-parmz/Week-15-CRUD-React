import React, { useState } from 'react';

export const NewItemForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('invalid input');
        }
    }


return (
    <div>
        <h4>Add a new room</h4>
        <form onSubmit={onSubmit}>
            <input
            type='text'
            placeholder='name'
            onChange={handleAreaInput}
            value={area}
            />

            <input
            type='text'
            placeholder='area'
            value={area}
            />
        </form>
    </div>
)
};