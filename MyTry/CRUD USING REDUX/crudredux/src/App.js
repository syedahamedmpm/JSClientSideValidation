import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import BookList from './components/BooKList';
import store from './store';

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
      <div className="App">
        <BookList/>
      </div>
      </Provider>
    );
  }
}

export default App;
