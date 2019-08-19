import React, { Component } from 'react';
import './App.css';
import DisplayData from './DisplayData.js';


class App extends Component {

  onGetData = () => {
    this.setState({
      pages: this.state.pages,
      refresh: true
    });
  }

  onTodoChange(value) {
    this.setState({
      pages: value
    });
  }
  constructor(props) {
    super(props);

    this.state = {
      pages: '1',
      refresh: false
    };
  }

  render() {
   return (
     <div>
       <input  onChange={e => this.onTodoChange(e.target.value)} type="text" value={this.state.pages}></input>
       <button onClick={this.onGetData}>Pobierz</button>
       <DisplayData message={this.state.pages} refresh= {this.state.refresh}/>
       </div>
    );
  }
}

export default App;
