import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Amir', age: 21},
      { name: 'Ali', age: 23},
      { name: 'Huespi', age: 25},
    ]
  }

  switchNameHangler = (newName) => {
    // console.log('La funcion, funciona')
    // this.state.persons[0].name = 'Maximiliano'
    this.setState({
      persons: [
        { name: newName, age: 21},
        { name: 'Ali - OnClick', age: 23},
        { name: 'Huespi - OnClick', age: 22},
      ]
    })
    console.log(this.state);
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Amir', age: 21},
        { name: event.target.value , age: 23},
        { name: 'Huespi', age: 25},
      ]
    })
  }
  
  render() {
    console.log(this.state);
    return ( 
        <div className = "App">
          <h1> Hi I 'm a React App</h1> 
          <p>Soy otro P</p>
          <button onClick={ () => this.switchNameHangler('AmirC')}>Cambiar Nombre</button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>

          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click = {this.switchNameHangler.bind(this, 'Amir!')}
            change = {this.nameChangedHandler}/>

          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>

          <Person name="AmirFS" age="21">Y juego bien al futbol</Person>
          <Person name="AliFS" age="22"/>
        </div>
      );

      // return React.createElement('div', {className: 'App'}, 
                // React.createElement('h1', null, 'A ver ahora'))
  }
}

export default App;