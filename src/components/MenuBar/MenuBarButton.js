import React from 'react';
import Radium from 'radium';

class MenuBarButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      button: {
        WebkitAppRegion: 'no-drag',
        display: 'inline-block',
        textDecoration: 'none',
        height: '100%',
        padding: '5px 5px 0',
        boxSizing: 'border-box',
        ':hover': {
          background: 'rgba(0,0,0,0.25)'
        }
      },
      img: {
        backgroundImage: 'url("' + this.props.img + '")',
        height: '30px',
        width: '30px',
      },
    }
    return (
      <a href='#' style={styles.button} onClick={this.props.onClick}>
        <div style={styles.img}></div>
      </a>
    )
  }
}

export default Radium(MenuBarButton);
