import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import HeaderHome from './headerHome'
import CarrousselBannerHome from './carrousselBannerHome'
import SectionHome from './sectionHome'

import pizzalogo from '../../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import Api from '../../services/Api'
import couponimg from '../../assets/couponvector.png'
import trophyvector from '../../assets/trophyvector.png'
import menuicon from '../../assets/food-menu.png'
import bascketicon from '../../assets/bascket.png'
import history from '../../util/history-util'
import FooterHome from './footerHome'

const BascketHome = (props) => {
	return (
		<div>
			<div>parte cinza</div>
			<div>parte toda</div>

			<FooterHome />
		</div>
	)
}

export default withRouter(BascketHome)
