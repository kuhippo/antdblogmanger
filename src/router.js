import React from 'react';
import { Router, Route,IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Controller from './routes/Controller';
import List from './routes/List';
import Login from './routes/Login';

// import Browse from './routes/Browse';
// import ShowContent from "./routes/ShowContent.js";
// <Route path="edit" component={Browse}/>
// <Route path="show" component={ShowContent}/>
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Controller} >
        <IndexRoute component={List}/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
