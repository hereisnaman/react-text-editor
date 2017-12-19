import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {reactLocalStorage as storage} from 'reactjs-localstorage';

const save = (e) => {
  e.preventDefault();
  if (e.target.innerHTML === 'Start typing here') {
    e.target.innerHTML = '';
  } else
    storage.setObject('text', e.target.innerHTML);
};

class TextBox extends React.Component {
  constructor() {
    super();
    let storageData = JSON.stringify(storage.getObject('text'));
    storageData = storageData.substring(1, storageData.length - 1);
    this.state = {
      text: storageData === '' || '<br>' ? 'Start typing here' : ReactHtmlParser(storageData)
    }
  }

  render() {
    return (
      <p className="textbox" contentEditable={true} onKeyUp={save} onClick={save}>{this.state.text}</p>
    );
  }
}

export default TextBox;