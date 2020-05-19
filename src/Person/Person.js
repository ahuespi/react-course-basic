import React from 'react';
import './Person.css'

const person = (person) => {
return (
    <div className="Person">
        <p onClick={person.click}>I'm {person.name}, {person.age} {person.children}</p>
        <input type="text" onChange={person.change} value={person.name}/>
    </div>
)
} // ES6 function

export default person;