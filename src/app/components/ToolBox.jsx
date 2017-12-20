import React from 'react';
import Icon from 'react-icons-kit';
import {
  header,
  quoteLeft,
  bold,
  italic,
  underline,
  strikethrough,
  subscript,
  superscript,
  cut,
  copy,
  paste,
} from 'react-icons-kit/fa';

const handleClick = (e) => {
  e.preventDefault();
  switch (e.target.id) {
    case 'heading':
      document.execCommand('formatBlock', false, '<h1>');
      break;
    case 'quote':
      document.execCommand('formatBlock', false, '<blockquote>');
      break;
    case 'bold':
      document.execCommand('bold');
      break;
    case 'italic':
      document.execCommand('italic');
      break;
    case 'underline':
      document.execCommand('underline');
      break;
    case 'strike':
      document.execCommand('strikeThrough');
      break;
    case 'subscript':
      document.execCommand('subscript');
      break;
    case 'superscript':
      document.execCommand('superscript');
      break;
    case 'cut':
      document.execCommand('cut');
      break;
    case 'copy':
      document.execCommand('copy');
      break;
    case 'paste':
      document.execCommand('paste');
      break;
  }
};

const renderButton = (id, icon) => {
  return (
    <button id={id} className="tool" onClick={handleClick}>
      <Icon icon={icon}/>
    </button>
  );
};

class ToolBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="toolbox">
        <div className="tool-group">
          {renderButton('heading', header)}
          {renderButton('quote', quoteLeft)}
        </div>

        <div className="tool-group">
          {renderButton('bold', bold)}
          {renderButton('italic', italic)}
          {renderButton('underline', underline)}
          {renderButton('strike', strikethrough)}
          {renderButton('subscript', subscript)}
          {renderButton('superscript', superscript)}
        </div>

        <div className="tool-group">
          {renderButton('cut', cut)}
          {renderButton('copy', copy)}
          {renderButton('paste', paste)}
        </div>
      </div>
    );
  }
}

export default ToolBox;