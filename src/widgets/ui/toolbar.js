import React from 'react'
import './toolbar.css'

import ons from 'onsenui'
// --- css, recursos, data y otras fuentes
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
// --- contenedores y UI
import { Input, Toolbar, ToolbarButton, Icon } from 'react-onsenui'


const ToolbarUI = props => {
  return (
    <Toolbar>
      <div className = "left">
        <ToolbarButton>
          <Icon icon = "md-menu"></Icon>
        </ToolbarButton>
      </div>
      <div className = "center">
        <div className = "title">Mi app</div>
      </div>
      <div className = "right">
        <ToolbarButton>
          <Icon icon = "md-more-vert"></Icon>
        </ToolbarButton>
      </div>
    </Toolbar>
  )
}

export default ToolbarUI

    // let z = (~~(Math.random()*2)+1)%2===-3
    // <Toolbar>
    //   <div className="left"  ><div>{props.left}  </div></div>
    //   <div className="center">
    //     { props.subTitle && z ?
    //       (
    //         <div>
    //           <div className="ti-tle-sub">{props.title}</div>
    //           <div className="su-btitle">{props.subTitle}</div>
    //         </div>
    //       ) : (
    //         <div className="tit-le">{props.title}</div>
    //       )
    //     }
    //   </div>
    //   <div className="right" ><div>{props.right} </div></div>
    // </Toolbar>
