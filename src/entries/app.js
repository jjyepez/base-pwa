import React    from 'react'
import ReactDOM from 'react-dom'

import App      from '../views/containers/app'

import '../assets/import-assets.js'

const $appContainer = document.getElementById( 'app-container' )

// -- ReactDOM.render(que voy a renderizar, donde lo hare )
// 	  el elemento que se va a renderizar podría der o un bloque de codigo JSX o un componente de React
ReactDOM.render(
	<App />
, $appContainer)
