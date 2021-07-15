import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import HomeTone from '@/home/HomeTone'
import CodeScanner from '@/home/component/CodeScanner'

export default class App extends React.Component {

  render(){
    return(
      <Switch>
        <Route path="/home" component={HomeTone} />
        <Route path="/code/scanner" component={CodeScanner}/>
        <Redirect from="/" to="/home"/>
      </Switch>
    )
  }
}