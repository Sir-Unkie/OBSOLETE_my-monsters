import React, { Component } from 'react';
import './App.css';
import { SearchBox } from './components/Searchbox/search-box.component.jsx';
import { Cardlist } from './components/card-list.component.jsx';

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img src={logo} className='App-logo' alt='logo' />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className='App-link'
//           href='https://reactjs.org'
//           target='_blank'
//           rel='noopener noreferrer'
//         >
//           Learn React and much more
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => {
        this.setState({ monsters: data });
        console.log(data);
      });
  }

  handleChangeFunction = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const monstersFiltered = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>MONSTERS ARE HERE!</h1>
        <SearchBox
          placeholder='Search for monsters'
          handler={this.handleChangeFunction}
        />
        <Cardlist monsters={monstersFiltered}></Cardlist>
      </div>
    );
  }
}

export default App;
