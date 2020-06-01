import React, { Fragment } from 'react'
import NavBar from '../components/navbar-component'
export const Layout = (props) => (
	<Fragment>
		<div style={{ marginTop: '0px' }}>{props.children}</div>
	</Fragment>
)
