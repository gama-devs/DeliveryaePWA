import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import HeaderHome from './headerHome'
import CarrousselBannerHome from './carrousselBannerHome'
import SectionHome from './sectionHome'
import jwt from 'jsonwebtoken'
import DoneIcon from '@material-ui/icons/Done'
import { Button } from 'reactstrap'
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
		console.log(fulluser)
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
						Pedido de <br />
					</div>

					<div style={{ color: '#FFF', fontWeight: 600 }}>BIANCA</div>
				</div>
			</div>

			{/* PARTE TODA AQUI ABAIXO */}
			<div
				style={{
					marginBottom: '5vh',
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
					<span style={{ fontWeight: 600, fontSize: '1.1em' }}>🍕 Itens</span>
					{pagebag.map((prod, index) => {
						return (
							<div style={{ margin: '2vh 0' }} key={index}>
								<div
									style={{
										color: '#FF805D',
										fontWeight: 600,
										fontSize: '1.1em',
									}}
								>
									{prod.name}
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-between',
									}}
								>
									<span style={{ fontSize: '0.8em' }}>{prod.description}</span>
									<div
										style={{
											display: 'flex',
											flexDirection: 'row',
											alignItems: 'center',
											justifyContent: 'space-between',
										}}
									>
										<span
											style={{ fontSize: '2em', color: '#FF5755' }}
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
										</span>
										<span style={{ fontSize: '1.5em', margin: '0 3vw' }}>
											{pagebag[index].qtd}
										</span>
										<span style={{ fontSize: '2em', color: '#FF5755' }}>+</span>
									</div>
								</div>
								<div style={{ fontWeight: 600, fontSize: '1.25em' }}>
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
							height: 'fit-content',
							backgroundColor: '#1BD09A',
							borderRadius: '4px',
							display: 'flex',
							padding: '2vh 5vw',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<span style={{ color: '#FFFFFF', width: '55vw' }}>
							Ainda dá tempo de adicionar mais alguma delícia!
						</span>
						<Button
							style={{
								backgroundColor: '#FFF',
								color: '#1BD09A',
								width: '25vw',
								border: 'none',
								boxShadow: '0 0 0',
								borderRadius: '4px',
							}}
						>
							Adicionar
						</Button>
					</div>
					<div style={{ margin: '5vh 0', fontWeight: 600, fontSize: '1.1em' }}>
						🛵 Endereço de entrega
					</div>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<Button
							style={{
								border: 'none',
								boxShadow: '0 0 0',
								backgroundColor: '#F4F4F4',
								height: '4em',
								width: '4em',
								borderRadius: '1em',
								padding: 0,
								display: 'flex',
								alignItems: 'center',
								textAlign: 'center',
							}}
						>
							<span
								style={{
									color: '#413231',
									fontSize: '2.5em',
									margin: 'auto',
								}}
							>
								+
							</span>
						</Button>
						<div
							style={{
								width: '60vw',
								border: '1px solid #FF805D',
								borderRadius: '1em',
								padding: '2vh 3vw',
								margin: '0 5vw',
								boxShadow: '10px 15px 62px -9px rgba(0,0,0,0.25)',
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<span
								style={{
									fontWeight: 600,
									fontSize: '1.1em',
									marginBottom: '1em',
								}}
							>
								Casa
							</span>
							<span>R. Álvares Machado, 187,</span>
							<span>Petrópolis, Porto Alegre/RS</span>
							<span>CEP: 94252-652</span>
						</div>
					</div>
					<div
						style={{
							margin: '5vh 0vh 2vh 0vh',
							fontWeight: 600,
							fontSize: '1.1em',
						}}
					>
						🤑 Cupom de desconto
					</div>
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
								backgroundColor: '#F4F4F4',
								padding: '0.5em 0.3em',
								width: '100%',
								borderRadius: '12px',
							}}
						>
							<Input
								onClick={() => {
									console.log('hmmmmmm')
								}}
								onChange={(e) => {}}
								placeholder="Insira o cupom"
								style={{
									border: 'none',
									backgroundColor: '#F4F4F4',
									fontSize: '16px',
								}}
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
					<div
						style={{
							margin: '5vh 0vh 2vh 0vh',
							fontWeight: 600,
							fontSize: '1.1em',
						}}
					>
						😎 Pagamento
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								flexDirection: 'row',
								width: '100%',
								marginBottom: '5px',
							}}
						>
							<div>Subtotal</div>
							<div>R$155,30</div>
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								flexDirection: 'row',
								width: '100%',
								marginBottom: '5px',
							}}
						>
							<div>Taxa de Entrega</div>
							<div>R$10,00</div>
						</div>
						<div
							style={{
								color: '#FF805D',
								fontWeight: 'bold',
								display: 'flex',
								justifyContent: 'space-between',
								flexDirection: 'row',
								width: '100%',
							}}
						>
							<div>Total</div>
							<div>R$164,30</div>
						</div>
					</div>
					<div
						style={{
							marginTop: '2vh',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<div
							style={{
								boxShadow: '0px 24px 18px -2px rgba(0,0,0,0.12)',
								display: 'flex',
								alignItems: 'center',
								border: '1px solid #FF805D',
								backgroundColor: '#ffffff',
								width: '100%',
								marginBottom: '1.5vh',
								borderRadius: '12px',
							}}
						>
							<div
								style={{
									marginLeft: '10px',
									padding: '1vh 0vh',
									flex: 2,
									display: 'flex',
									flexDirection: 'column',
								}}
							>
								<div
									style={{
										fontWeight: 'bold',
										fontSize: '15px',
										color: '#FF805D',
									}}
								>
									Cartão pelo App
								</div>
								<div
									style={{
										fontSize: '15px',
									}}
								>
									Sem cartão cadastrado
								</div>
							</div>
							<div
								style={{
									fontSize: '12px',
									color: '#FF805D',
									textDecoration: 'underline',
									display: 'flex',
									flex: 1,
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								Cadastrar
							</div>
						</div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								boxShadow: '0px 24px 18px -2px rgba(0,0,0,0.12)',
								backgroundColor: '#ffffff',
								width: '100%',
								marginBottom: '2vh',
								borderRadius: '12px',
							}}
						>
							<div
								style={{
									marginLeft: '10px',
									padding: '1vh 0vh',
									flex: 1,
									display: 'flex',
									flexDirection: 'column',
								}}
							>
								<div
									style={{
										fontWeight: 'bold',
										fontSize: '15px',
										color: '#413131',
									}}
								>
									Pagamento na entrega
								</div>
								<div
									style={{
										fontSize: '15px',
									}}
								>
									Débito
								</div>
							</div>
						</div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								boxShadow: '0px 24px 18px -2px rgba(0,0,0,0.12)',
								backgroundColor: '#ffffff',
								width: '100%',

								borderRadius: '12px',
							}}
						>
							<div
								style={{
									marginLeft: '10px',
									padding: '1vh 0vh',
									flex: 1,
									display: 'flex',
									flexDirection: 'column',
								}}
							>
								<div
									style={{
										fontWeight: 'bold',
										fontSize: '15px',
										color: '#413131',
									}}
								>
									Pagamento na Entrega
								</div>
								<div
									style={{
										fontSize: '15px',
									}}
								>
									Dinheiro
								</div>
							</div>
						</div>
					</div>
					<div
						style={{
							margin: '5vh 0vh 2vh 0vh',
							fontWeight: 600,
							fontSize: '1.1em',
						}}
					>
						📝 CPF ou CNPJ na nota fiscal
					</div>
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
								backgroundColor: '#F4F4F4',
								padding: '0.5em 0.3em',
								width: '100%',
								borderRadius: '12px',
							}}
						>
							<Input
								onClick={() => {
									console.log('hmmmmmm')
								}}
								type='number'
								onChange={(e) => {}}
								placeholder="Informe CPF ou CNPJ"
								style={{
									border: 'none',
									backgroundColor: '#F4F4F4',
									fontSize: '16px',
								}}
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
			{true ? (
				<div
					onClick={() => {
						console.log('sim')
					}}
					style={{
						borderRadius: '32px 32px 0px 0px',
						backgroundColor: `#1BD09A`,
						height: '19vh',
						flex: 1,
						width: '100vw',
						bottom: '0px',
						position: 'fixed',
						justifyContent: 'center',
						alignContent: 'center',
						display: 'flex',
						alignItems: 'center',
						fontWeight: 600,
						fontSize: '1.1em',
						color: '#FFFFFF',
					}}
				>
					<span style={{ marginBottom: '10vh' }}>
						R$165,30 confirmar pedido!
					</span>
				</div>
			) : (
				<div
					onClick={() => {
						console.log('sim')
					}}
					style={{
						borderRadius: '32px 32px 0px 0px',
						backgroundColor: `#FF805D`,
						height: '19vh',
						flex: 1,
						width: '100vw',
						bottom: '0px',
						position: 'fixed',
						justifyContent: 'center',
						alignContent: 'center',
						display: 'flex',
						alignItems: 'center',
						fontWeight: 600,
						fontSize: '1.25em',
						color: '#FFFFFF',
					}}
				>
					<span>{'R$' + 'lhaaal' + ' ● Adicionar a sacola'}</span>
				</div>
			)}

			<FooterHome />
		</div>
	)
}

export default withRouter(BascketHome)
