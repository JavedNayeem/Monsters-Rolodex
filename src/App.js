import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      searchKey: '',
      monsters:[],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    }));
  }


  searchMonster = () => {
    console.log('searchMonster Function Hit');
  }

  render() {

    return (
      <div className="App">

        <input className='search-box' type='search' placeholder='Search Monsters' onChange={(event) => {
          
          this.setState({
            searchKey: event.target.value
          });
          console.log(this.state.searchKey);
        }}/>

        {this.state.monsters.map((monster) => {
          return <div key={monster.id}><h1>{monster.name}</h1></div>
        })}

      </div>
    );

  }

}

export default App;
