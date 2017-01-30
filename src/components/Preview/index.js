import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

const { remote } = window.require('electron');
const fs = remote.require('fs');

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      container: {
        height: '100%',
        overflow: 'auto',
        padding: '0 10px',
      }
    }

    return (
      <div ref='PreviewDiv' style={styles.container} dangerouslySetInnerHTML={{__html: this.props.tab.getPreviewHTML()}}></div>
    )
  }
}

export default Radium(Preview);
