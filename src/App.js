import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {
    const [personState, setPersonsState ] = useState({
      persons: [
        { name: 'Amir', age: 21},
        { name: 'Ali', age: 23},
        { name: 'Huespi', age: 25},
      ]
    })
  
    const switchNameHangler = () => {
      // console.log('La funcion, funciona')
      // this.state.persons[0].name = 'Maximiliano'
      setPersonsState({
        persons: [
          { name: 'Amir - OnClick', age: 21},
          { name: 'Ali - OnClick', age: 23},
          { name: 'Huespi - OnClick', age: 22},
        ]
      })
      console.log(personState);
    }
    console.log(personState);
    return ( 
        <div className = "App">
          <h1> Hi I 'm a React App</h1> 
          <p>Soy otro P</p>
          <button onClick={switchNameHangler}>Cambiar Nombre</button>
          <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
          <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
          <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
          <Person name="AmirFS" age="21">Y juego bien al futbol</Person>
          <Person name="AliFS" age="22"/>
        </div>
      );

      // return React.createElement('div', {className: 'App'}, 
                // React.createElement('h1', null, 'A ver ahora'))
}

export default App;

/* state = {
  persons: [
    { name: 'Amir', age: 21},
    { name: 'Ali', age: 23},
    { name: 'Huespi', age: 25},
  ]
}

switchNameHangler = () => {
  // console.log('La funcion, funciona')
  // this.state.persons[0].name = 'Maximiliano'
  this.setState({
    persons: [
      { name: 'Amir - OnClick', age: 21},
      { name: 'Ali - OnClick', age: 23},
      { name: 'Huespi - OnClick', age: 22},
    ]
  })
  console.log(this.state);
} */