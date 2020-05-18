import React from 'react';

const person = (person) => {
return (
    <div>
        <p>I'm {person.name}!, {person.age} {person.children}</p>
    </div>
)
} // ES6 function

export default person;