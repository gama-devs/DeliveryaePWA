import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import HeaderHome from './headerHome'
import CarrousselBannerHome from './carrousselBannerHome'
import SectionHome from './sectionHome'

import pizzalogo from '../../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import Api from '../../services/Api'

const FooterHome = (props) => {
	return (
		<div
			style={{
				borderRadius: '32px 32px 0px 0px',
				backgroundColor: `#FF805D`,
				height: '10vh',
				flex: '1',
				bottom: 0,
				left: 0,
				display: 'flex',
			}}
		>
			<div>Sim como adivinhou</div>
		</div>
	)
}

export default withRouter(FooterHome)
