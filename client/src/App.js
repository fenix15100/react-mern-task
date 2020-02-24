import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import  Projects from './components/projects/Projects'; 

//https://www.freecodecamp.org/news/deploy-a-react-node-app-to/

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/","/login"]} component={SignIn}/>
        <Route exact path="/join" component={SignUp}/>
        <Route exact path="/projects" component={Projects}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
