import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Randing, Posts } from 'pages';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Randing} />
          <Route exact path="/posts" component={Posts} />
          <Route path="/Timeline/:name" component={Randing} />
        </Switch>
      </div>
    );
  }
}

export default App;
