import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import ace from 'brace';
import _ from 'lodash';
require('brace/mode/markdown');
require('brace/theme/chrome');

const { remote } = window.require('electron');
const fs = remote.require('fs');

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.editor = null;
    this.ignoreScroll = false;
    this.resetScrollFlag = false;
  }

  componentDidMount() {
    this.editor = ace.edit('ace-editor');
    this.editor.$blockScrolling = Infinity;
    this.editor.setTheme('ace/theme/chrome');
    this.editor.setValue(this.props.tab.getText(), -1);

    let session = this.editor.getSession();
    session.setMode('ace/mode/markdown');
  }

  componentDidUpdate() {
    this.editor.setValue(this.props.tab.getText(), -1);
  }

  render() {
    const styles = {
      container: {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
      }
    }

    return (
      <div ref='aceEditor' id='ace-editor' style={styles.container}></div>
    )
  }
}

export default Radium(Editor);
