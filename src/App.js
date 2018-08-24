import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import Home from './containers/Home/Home'
import Records from './containers/Records/Records'
import Users from './containers/Users/Users'
import Permissions from './containers/Permissions/Permissions'
import Admin from './containers/Admin/Admin'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/records" component={Records} />
            <Route path="/users" component={Users} />
            <Route path="/permissions" component={Permissions} />           
            <Route path="/admin" component={Admin} />
          </Switch>
        </Layout>    
      </div>
    );
  }
}

export default App;
