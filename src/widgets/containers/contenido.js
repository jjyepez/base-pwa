import React, { Component } from 'react'
import ContenidoUI from '../ui/contenido'

class ContenidoContainer extends Component {
  render(){
    return (
      <ContenidoUI>
        {this.props.children}
      </ContenidoUI>
    )
  }
}

export default ContenidoContainer
