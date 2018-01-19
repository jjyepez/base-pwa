import React from 'react'
import './home-layout.css'

import '../../assets/css/app.css'
import '../../assets/css/legacy.css'

import Toolbar from '../../widgets/containers/toolbar'
import { iconoMenu, iconoMore } from '../../widgets/ui/iconos'
import Contenido from '../../widgets/containers/contenido'

const HomeLayout = props => {
  return(
    <Contenido>
      <div className = "HomeLayout">
        {props.children}
      </div>
    </Contenido>
  )
}

export default HomeLayout


      // <Toolbar
      //   left     = {iconoMenu}
      //   title    = "Mi Aplicación"
      //   subTitle = "Ejemplo"
      //   right    = {iconoMore}
      // />
