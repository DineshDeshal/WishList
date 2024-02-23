import React, { useState } from 'react';

function UserInput() {
    const [wish, setWish] = useState(""); 
    const [wishes, setWishes] = useState([]); 

    function handleInputChange(event) {
        setWish(event.target.value); 
    }

    function handleAdd() {
        setWishes((prevWishes) => [...prevWishes, wish]); 
        setWish(""); 
    }

    return (
        <form>
            <div id='firstwish'>
                <label htmlFor="wish"> Wish :- </label>
                <input type="text" id='wish' value={wish} onChange={handleInputChange} />
                <button type="button" onClick={handleAdd}>ADD</button>
                
                <ul>
                    {wishes.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </form>
    );
}

export default UserInput;
