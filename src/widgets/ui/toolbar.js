import React from 'react'
import './toolbar.css'

const ToolbarUI = props => {
  let z = (~~(Math.random()*2)+1)%2===0
  return (
    <div className="Toolbar">
      <div className="Toolbar-left"  ><div>{props.left}  </div></div>
      <div className="Toolbar-center">
        { props.subTitle && z ?
          (
            <div>
              <div className="title-sub">{props.title}</div>
              <div className="subtitle">{props.subTitle}</div>
            </div>
          ) : (
            <div className="title">{props.title}</div>
          )
        }
      </div>
      <div className="Toolbar-right" ><div>{props.right} </div></div>
    </div>
  )
}

export default ToolbarUI
