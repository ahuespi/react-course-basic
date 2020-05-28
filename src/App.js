import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'sadasd123', name: 'Amir', age: 21},
      { id:'12asdasd', name: 'Ali', age: 23},
      { id:'fgtrfv', name: 'Huespi', age: 25},
    ]
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Amir', age: 21},
        { name: event.target.value , age: 23},
        { name: 'Huespi', age: 25},
      ],
      showPerson: false
    })
  }
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.splice() -> Copia todo el array;
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }
  
  render() {
    const style = {
      backgroundColor: 'black',
      color: 'white',
      font: 'inherit',
      border: '1px solud blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name}
              age={person.age}
              key={person.id} />
          })}
        </div>
      )
    }

    return ( 
        <div className = "App">
          <h1> Hi I 'm a React App</h1> 
          <p>Soy otro P</p>
          <button style={style} onClick={this.togglePersonHandler}>Cambiar Nombre</button>
          {persons}
        </div>
      );

      // return React.createElement('div', {className: 'App'}, 
                // React.createElement('h1', null, 'A ver ahora'))
  }
}

export default App;