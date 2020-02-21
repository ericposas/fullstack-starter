import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'

class App extends Component {

  render() {
    return (
      <>
        <Router>
            <Switch>
              <Route exact path='/' render={() => (
                  <div>Now serving React content.</div>
                )}/>
            </Switch>
        </Router>
      </>
    )
  }

}

export default App
