import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {reactLocalStorage as storage} from 'reactjs-localstorage';

const save = (e) => {
  e.preventDefault();
  let ele = document.getElementById('text-box');
  if (ele.innerHTML === 'Start typing here') {
    ele.innerHTML = '';
  }
  console.log(ele, 'text');
  storage.setObject('text', ele.innerHTML);
};

class TextBox extends React.Component {
  constructor() {
    super();
    let storageData = JSON.stringify(storage.getObject('text'));
    storageData = storageData.substring(1, storageData.length - 1);
    this.state = {
      text: ( storageData === '' || storageData === '<br>') ? 'Start typing here' : ReactHtmlParser(storageData)
    }
  }

  render() {
    return (
      <p id="text-box" className="textbox" contentEditable={true} onKeyUp={save} onClick={save} onChange={save}>{this.state.text}</p>
    );
  }
}

export default TextBox;