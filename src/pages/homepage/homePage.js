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
			<h2 style={{ marginLeft: '20vw', marginTop: '30vh', maxWidth: '80vw' }}>
				Homepage em progresso para a próxima entrega!
			</h2>
		</div>
	)
}

export default withRouter(HomePage)
