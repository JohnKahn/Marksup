import React from 'react';
import Radium from 'radium';
const { remote } = window.require('electron');

class Tab extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.tab.getName());
  }

  onClick() {
    this.props.tabClicked(this.props.tab);
  }

  render() {
    const styles = {
      container: {
        height: '100%',
        minWidth: '100px',
        display: 'inline-block',
        color: '#ecf0f1',
        overflow: 'hidden',
        padding: '0 20px',
        boxSizing: 'border-box',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: '#3e5770',
        }
      },
      active : {
        backgroundColor: '#3e5770',
      },
      name: {
        WebkitUserSelect: 'none',
        margin: '10px 0 0 0',
        padding: '0',
        fontSize: '14px',
        cursor: 'pointer',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }
    }

    return (
      <div style={[styles.container, (this.props.active ? styles.active : []), this.props.style]} onClick={this.onClick.bind(this)}>
        <p style={styles.name}>{this.props.tab.getName()}</p>
      </div>
    )
  }
}

export default Radium(Tab);
