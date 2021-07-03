import React from 'react';
import ReactDOM from 'react-dom';
import SettingsContext from './components/todo/setting-context';
import  AuthContext  from './components/todo/auth-context';
import { BrowserRouter } from "react-router-dom";
import App from './app.js';

class Main extends React.Component {
  render() {
    return(

      <BrowserRouter>
      <AuthContext>
        <SettingsContext>
          <App />
        </SettingsContext>
      </AuthContext>
      </BrowserRouter>
    )
    
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);





