import React, { Component } from 'react'
//import './contenido.css'

import ons from 'onsenui'
// --- css, recursos, data y otras fuentes
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
// --- contenedores y UI
import {
	Navigator,
	Page,
	Toolbar,
	ToolbarButton,
	Icon
} from 'react-onsenui'

//import { ToolbarUI as Toolbar } from './toolbar' // --- POR QUE NO SIRVE ESTA LINEA

class ContenidoUI extends Component {

	renderToolbar = ( route, navigator ) => {
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
	renderPage = ( route, navigator ) => {
		return (
			<Page
				renderToolbar = {this.renderToolbar.bind(this, route, navigator)}
				key           = {0}
			>
				{ route.contenido }
			</Page>
		)
	}
	render(){
		return (
		  <Navigator
				renderPage   = {this.renderPage}
				initialRoute = {
					{
						"contenido": this.props.children
	        }
	      }
		  >
		  </Navigator>
		)
	}
}
export default ContenidoUI
