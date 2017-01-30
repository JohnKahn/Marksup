import marked from 'marked';
const { remote } = window.require('electron');
const fs = remote.require('fs');

export default class TabFile {
  constructor(path) {
    this.path = path;
    this.name = path.split('/').pop();
    this.text = fs.readFileSync(this.path, 'utf8');

    this.html = marked(this.text);
  }

  getPath() {
    return this.path;
  }

  getName() {
    return this.name;
  }

  getText() {
    return this.text;
  }

  setText(newText) {
    this.text = newText;
  }

  getPreviewHTML() {
    return this.html;
  }

  saveText() {
    fs.writeFileSync(this.path, this.text);
  }
}
