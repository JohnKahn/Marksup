import React from 'react';
import Radium from 'radium';
const { remote } = window.require('electron');

import Tab from '../Tab';

class TabList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      container: {
        backgroundColor: '#34495e',
        position: 'absolute',
        display: 'flex',
        flexWrap: 'nowrap',
        top: '40px',
        left: '0',
        height: '40px',
        width: '100vw',
        boxSizing: 'border-box',
      }
    }

    let tabs = [];
    this.props.tabs.forEach((tab, index) => {
      tabs.push(<Tab key={'tab' + index} active={tab === this.props.activeTab} tab={tab} tabClicked={this.props.tabClicked} />);
    });

    return (
      <div style={[styles.container, this.props.style]}>
        {tabs}
      </div>
    )
  }
}

export default Radium(TabList);
