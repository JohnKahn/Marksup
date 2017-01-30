import React from 'react';
import Radium from 'radium';
const { remote } = window.require('electron');

import MenuBarButton from '../MenuBarButton';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);

    this.window = remote.getCurrentWindow();
  }

  minimizeClick() {
    this.window.minimize();
  }

  maximizeClick() {
    if (this.window.isMaximized()) {
      this.window.unmaximize();
    } else {
      this.window.maximize();
    }
  }

  closeClick() {
    this.window.close();
  }

  render() {
    const styles = {
      container: {
        WebkitAppRegion: 'drag',
        WebkitUserSelect: 'none',
        backgroundColor: '#2c3e50',
        display: 'flex',
        padding: '0 5px',
        height: '40px',
        width: '100vw',
        zIndex: '99',
        boxSizing: 'border-box',
      },
      title: {
        cursor: 'default',
        display: 'inline-block',
        margin: '0',
        padding: '10px 0 0 10px',
        flexGrow:  '1',
        color: '#ecf0f1',
        fontSize: '14px',
      },
    }
    return (
      <div style={[styles.container, this.props.style]}>
        <MenuBarButton img='img/menu.svg' />
        <p style={styles.title}>Marksup</p>
        <MenuBarButton img='img/minimize.svg' onClick={this.minimizeClick.bind(this)} />
        <MenuBarButton img='img/maximize.svg' onClick={this.maximizeClick.bind(this)} />
        <MenuBarButton img='img/close.svg' onClick={this.closeClick.bind(this)} />
      </div>
    )
  }
}

export default Radium(MenuBar);
