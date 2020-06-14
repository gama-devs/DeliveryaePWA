import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import HeaderHome from './headerHome'
import SectionHome from './sectionHome'
import FooterHome from './footerHome'

import pizzalogo from '../../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import Api from '../../services/Api'

const CarrousselBannerHome = (props) => {
	return (
		<div style={{ display: 'flex', backgroundColor: '#ddd', height: '20vh' }}>
			Carrossel imagens aqui
		</div>
	)
}

export default withRouter(CarrousselBannerHome)
