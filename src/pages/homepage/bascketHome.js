import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import HeaderHome from './headerHome'
import CarrousselBannerHome from './carrousselBannerHome'
import SectionHome from './sectionHome'
import jwt from 'jsonwebtoken'
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
import { useStoreActions, useStore, useStoreState } from 'easy-peasy'

const BascketHome = (props) => {
	const fulluser = useStoreState((state) => state.user)
	const allproducts = useStoreState((state) => {
		return state.user.bag
	})

	const [pagebag, updatepagebag] = useState(allproducts)

	useEffect(() => {
		console.log(pagebag, 'bag!!!!')
		try {
			let token = localStorage.getItem('authtoken')
			// console.log(token)
			// console.log(fulluser)
			let decoded = jwt.decode(fulluser.authtoken)
			// console.log(decoded)
			let decoded2 = jwt.decode(token)
			// console.log(decoded, decoded2)
			if (!decoded2) {
				history.push('/login')
			}
		} catch (e) {
			console.log(e, fulluser.authtoken, 'erro que foi pego')
		}
	}, [])
	return (
		<div>
			<div
				style={{
					backgroundColor: '#1BD09A',
					display: 'flex',
					alignItems: 'center',
					height: '20vh',
					paddingBottom: '5vh',
				}}
			>
				<div style={{ marginLeft: '3vw', marginBottom: '-4vh' }}>
					<div style={{ color: '#FFF' }}>
						pedido de <br />
					</div>

					<div style={{ color: '#FFF' }}>BIANCA</div>
				</div>
			</div>

			{/* PARTE TODA AQUI ABAIXO */}
			<div
				style={{
					backgroundColor: '#FFF',
					display: 'flex',
					borderRadius: '32px 32px 32px 32px',
					alignItems: 'center',
					marginTop: '-5vh',
					paddingBottom: '5vh',
					flexDirection: 'column',
				}}
			>
				<div> sim </div>
			</div>

			<FooterHome />
		</div>
	)
}

export default withRouter(BascketHome)
