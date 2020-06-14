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

const FooterHome = (props) => {
	return (
		<div>
			<div style={{ height: '11vh', backgroundColor: `#FFF` }}></div>
			<div
				style={{
					borderRadius: '32px 32px 0px 0px',
					backgroundColor: `#FF805D`,
					height: '10vh',
					flex: 1,
					width: '100vw',
					bottom: '0px',
					position: 'fixed',
					justifyContent: 'center',
					alignContent: 'center',
					display: 'flex',
				}}
			>
				<div
					style={{
						margin: '0vw 8vw 0vw 8vw',
						display: 'flex',
						flexDirection: 'row',
						flex: 1,
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<div
						onClick={() => {
							history.push('/home')
						}}
					>
						<img src={menuicon} />
					</div>
					<div
						onClick={() => {
							history.push('/backet')
						}}
					>
						<img src={bascketicon} />
					</div>
					<div>
						<img src={couponimg} />
					</div>
					<div>
						<img src={trophyvector} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default withRouter(FooterHome)
