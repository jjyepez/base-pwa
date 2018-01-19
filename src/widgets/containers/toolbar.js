import React, { Component } from 'react'

import Toolbar from '../ui/toolbar'

class ToolbarContainer extends Component {
  render(){
    return (
      <Toolbar
        className = "Toolbar"
        {...this.props}
      />
    )
  }
}

export default ToolbarContainer
