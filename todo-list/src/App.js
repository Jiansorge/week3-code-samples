import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world! 😉</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;

/**
 * Notes:
 * 
 * npm start # start the dev server
 * npm test # run your test suite (jest)
 * npm run build # production build of the app
 * create-react-app ./
 * 
 * JSX:
 *   - It's like HTML, but not really. JSX => JavaScript XML
 *   - Caveats:
 *     - must use self-closing tags. e.g. <TodoList />, not <TodoList>
 *     - can't use "class", use "className" for CSS classes
 *     - can't use "for", use "htmlFor" for label "for" attributes
 *     - every render function can only return one element
 *       - all elements should be wrapped in <div></div> or <React.Fragment></React.Fragment>
 */