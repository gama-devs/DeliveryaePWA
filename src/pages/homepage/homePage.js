import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import HeaderHome from './headerHome'
import pizzalogo from '../../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'

const HomePage = () => {
	return (
		<div>
			<HeaderHome />
			<h2>homepage paga nois pois não ta na porra a primeira entrega</h2>
		</div>
	)
}

export default withRouter(HomePage)
