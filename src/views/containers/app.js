import React, { Component } from 'react'
import ErrorHandler         from './error-handler'
import HomeLayout           from '../ui/home-layout'
import Logo                 from '../ui/logo'

class App extends Component {
  render(){
    return (
      <ErrorHandler>
        <HomeLayout>
          <header>Base App</header>
          <Logo />
        </HomeLayout>
      </ErrorHandler>
    )
  }
}

export default App
