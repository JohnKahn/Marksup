import React from 'react';
import ReactDOM from 'react-dom';

import MenuBar from './components/MenuBar';

class App extends React.Component {
  componentDidMount() {
    document.addEventListener('dragover', event => event.preventDefault())
    document.addEventListener('drop', event => event.preventDefault())
  }

  render() {
    return (
      <div style={{
        margin: '0',
        padding: '0',
        border: 'solid 1px #19242e',
        boxSizing: 'border-box',
        height: '100vh',
        weight: '100vw',
        zIndex: '100',
      }}>
        <MenuBar style={{
          position: 'absolute',
          top: '0',
          left: '0',
        }} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
