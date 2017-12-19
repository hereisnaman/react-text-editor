import React from 'react';

import ToolBox from './components/ToolBox';
import TextBox from './components/TextBox';
import './assets/scss/main.scss';

class App extends React.Component {
  render() {
    return (
      <div>
          <ToolBox/>
          <TextBox/>
      </div>
    );
  }
}

export default App;