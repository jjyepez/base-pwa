import React from 'react'
import './logo.css'
import logo  from '../../assets/img/logo.png'

const Logo = props => (
  <div className="Logo">
    <img src={logo} width={100} height={100}/>
    <div class="Logo-sombra"></div>
  </div>
)

export default Logo
