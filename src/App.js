import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home.js';
import Landing from './pages/Landing';
import ItemPage from './pages/ItemPage';

class App extends Component {
  state = { selectedData: {} };

  handleSelect = e => {
    this.setState({ selectedData: e });
  };
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          path="/:type"
          exact
          render={props => <Home handleSelect={this.handleSelect} {...props} />}
        />
        <Route
          path="/:type/:id"
          render={props => <ItemPage data={this.state.selectedData} {...props} />}
        />
      </Switch>
    );
  }
}

export default App;
