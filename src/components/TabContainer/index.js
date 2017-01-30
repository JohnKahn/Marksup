import React from 'react';
import Radium from 'radium';
const { remote } = window.require('electron');

import TabList from '../TabList';
import SplitPane from 'react-split-pane';
import Editor from '../Editor';
import Preview from '../Preview';
import TabFile from '../TabFile';

class TabContainer extends React.Component {
  constructor(props) {
    super(props);

    let tabFiles = [new TabFile('C:/Users/feefa/Documents/GitHub/Marksup/build/testmds/Test1.md'), new TabFile('C:/Users/feefa/Documents/GitHub/Marksup/build/testmds/Test2.md')];
    this.state = {
      activeTab: tabFiles[0],
      tabs: tabFiles,
      previewScrollTop: 0,
    }
  }

  tabClicked(tab) {
    this.setState({
      activeTab: tab
    });
  }

  render() {
    const styles = {
      container: {
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
        padding: '40px 0 0 0',
      },
      panes: {
        height: '100%',
        width: '100%',
        boxSizing: 'border-box'
      },
    }

    return (
      <div style={[styles.container, this.props.style]}>
        <TabList activeTab={this.state.activeTab} tabs={this.state.tabs} tabClicked={this.tabClicked.bind(this)} />
        <div style={styles.panes}>
          <SplitPane split='vertical' minSize={100} defaultSize={window.innerWidth / 2} paneStyle={{
            maxWidth: 'calc(100% - 100px)',
            height: '100%',
          }}>
            <Editor ref='Editor' tab={this.state.activeTab} />
            <Preview ref='Preview' tab={this.state.activeTab} />
         </SplitPane>
        </div>
      </div>
    )
  }
}

export default Radium(TabContainer);
