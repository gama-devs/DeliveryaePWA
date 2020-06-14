import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import HeaderHome from './headerHome'
import CarrousselBannerHome from './carrousselBannerHome'
import SectionHome from './sectionHome'
import jwt from 'jsonwebtoken'
import DoneIcon from '@material-ui/icons/Done'
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
import { Input } from 'reactstrap'

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
					alignItems: 'left',
					marginTop: '-5vh',
					paddingBottom: '5vh',
					flexDirection: 'column',
				}}
			>
				<div
					style={{ marginLeft: '3vw', marginTop: '2vh', marginRight: '3vw' }}
				>
					<div>🍕 Itens</div>
					{pagebag.map((prod, index) => {
						return (
							<div key={index}>
								<div style={{ color: '#FF805D' }}>{prod.name}</div>
								<div style={{ display: 'flex', flexDirection: 'row' }}>
									<div style={{ flex: 2, flexWrap: 'wrap', display: 'flex' }}>
										{prod.description}
									</div>
									<div
										style={{
											display: 'flex',
											flexDirection: 'row',
											flex: 1,
											justifyContent: 'space-between',
										}}
									>
										<div
											onClick={async () => {
												await updatepagebag((prev) => {
													if (prev[index].qtd > 1) {
														prev[index].qtd++
														console.log(prev)
														return prev
													} else {
														return prev
													}
												})
											}}
										>
											-
										</div>
										<div>{pagebag[index].qtd}</div>
										<div>+</div>
									</div>
								</div>
								<div style={{ fontWeight: 'bold' }}>
									{'R$' +
										((pagebag[index].price / 100) * pagebag[index].qtd).toFixed(
											2
										)}
								</div>
							</div>
						)
					})}
					<div
						style={{
							marginTop: '5vh',
							flex: '1',
							height: '10vh',
							backgroundColor: '#1BD09A',
							borderRadius: '4px',
							display: 'flex',
							flexDirection: 'row',
						}}
					>
						{' '}
						<div>Ainda dá tempo de adicionar algum item show, delicia</div>
						<div
							style={{
								backgroundColor: '#FFF',
								color: '#1BD09A',
								height: '4vh',
								width: '25vw',
							}}
						>
							Adicionar
						</div>
					</div>
					<div style={{ marginTop: '5vh' }}>🛵 Endereço de entrega</div>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<div style={{ flex: 1 }}> MAIS</div>
						<div style={{ flex: 2 }}>
							CARD GRANDE AQUI COM CASA POSSIVEL, FAZ MOCADO
						</div>
					</div>
					<div style={{ marginTop: '5vh' }}>🤑Cumpom de desconto</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
						}}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								backgroundColor: 'white',
								padding: '0.5em 0.3em',
								margin: '0 5vh',
								borderRadius: '12px',
							}}
						>
							<Input
								onClick={() => {
									console.log('hmmmmmm')
								}}
								onChange={(e) => {}}
								placeholder="Endereço de entrega"
								style={{ border: 'none', fontSize: '16px' }}
							/>
							<div style={{ color: '#fff' }}>
								<DoneIcon
									onClick={() => {
										console.log('hmmmmmmm')
									}}
									style={{
										borderRadius: '12px',
										backgroundColor: '#1BD09A',
										padding: '0.4em',
										width: '40px',
										height: '40px',
										marginRight: '0.1em',
										color: '#fff',
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<FooterHome />
		</div>
	)
}

export default withRouter(BascketHome)
