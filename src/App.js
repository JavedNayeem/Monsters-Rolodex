import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: {firstName: 'Javed', lastName: 'Nayeem'}
    };
  }

  render() {

    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi {this.state.name.firstName} {this.state.name.lastName}</p>
        <button onClick={()=>
          this.setState(
            () => {
              return {
                name: {firstName: 'Farhana', lastName: 'Parveen'},
              }
            },
            () => {
              console.log(this.state.name);
            },
          )
        }>Change Name</button>
      </header>
    </div>
    );

  }

}

export default App;
