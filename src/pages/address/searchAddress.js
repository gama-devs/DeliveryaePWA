import React, { useEffect, useState } from 'react'
import { useStore, useStoreActions, useStoreState } from 'easy-peasy'
import { Form, Field } from 'react-final-form'
import { withRouter } from 'react-router-dom'
import { Row, Col, Button, Label, Input } from 'reactstrap'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import SearchIcon from '@material-ui/icons/Search'
import history from '../../util/history-util'
import LoadedAddresses from './loadedAddresses'
import SearchBar from './serachBar'
import Loader from 'react-loader-spinner'

const searchAddress = () => {
	const fulluser = useStoreState((state) => {
		return state.user
	})

	const [selected, setselected] = useState('')
	const [isValidAddress, handleValidAddress] = useState(false)
	const [adresschecked, setaddresschecked] = useState(false)
	const [number, setnumber] = useState('')
	const [loadingreq, setloading] = useState(false)
	let [lodaded, setloaded] = useState(fulluser.savedaddresses)
	const saveanotheraddress = useStoreActions(
		(actions) => actions.user.saveanotheraddress
	)
	const clearcurrentaddress = useStoreActions(
		(actions) => actions.user.clearcurrentaddress
	)
	const setaddresbase = useStoreActions((actions) => actions.user.setaddress)

	const cleanPage = () => {
		handleValidAddress(false)
		setaddresschecked(false)
		setselected('')
		setnumber('')
	}
	useEffect(() => {
		if (fulluser.address.str === '') {
			setloaded(fulluser.savedaddresses)
		}
	}, [JSON.stringify(fulluser.address)])

	let functionbackarrow = (str) => {
		if (str == 'clear' || selected) {
			cleanPage()
		} else {
			history.push('/checkaddres')
		}
	}

	return (
		<div>
			<SearchBar
				setloadeds={setloaded}
				type="address"
				success={isValidAddress}
				backroute={functionbackarrow}
			/>
			<div
				onClick={() => {
					// console.log(fulluser)
				}}
				style={{
					backgroundColor: '#ffff',
					borderRadius: '32px',
					marginTop: '-5vh',
					height: '90vh',
				}}
			>
				{lodaded.length == 0 && !selected && (
					<Row
						style={{
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
							alignItems: 'center',
							textAlign: 'center',
						}}
					>
						<div
							style={{
								color: '#FF805D',
								maxWidth: '100vw',
								marginTop: '8vh',
								fontSize: '15px',
								fontWeight: 'bold',
							}}
						>
							Pesquise um endereço
						</div>
					</Row>
				)}
				{selected ? (
					adresschecked && isValidAddress ? (
						<Row
							style={{
								display: 'flex',
								justifyContent: 'center',
								flexDirection: 'column',
								alignItems: 'center',
								textAlign: 'center',
							}}
						>
							<div
								style={{
									maxWidth: '100vw',
									marginTop: '8vh',
									fontSize: '15px',
									fontWeight: 'bold',
								}}
							>
								Que tal já salvar o endereço
							</div>
							<div
								style={{
									maxWidth: '85vw',
									fontSize: '15px',
									fontWeight: 'bold',
								}}
							>
								para suas compras?
							</div>
							<div
								style={{
									fontSize: '15px',
									marginTop: '3vh',
									color: '#FF805D',
									maxWidth: '85vw',
								}}
							>
								{fulluser.address.str}
							</div>
							<div
								style={{
									fontSize: '15px',
									color: '#FF805D',
									maxWidth: '85vw',
								}}
							>
								{fulluser.address.fullresp}
							</div>

							<div
								style={{
									fontSize: '15px',
									color: '#FF805D',
								}}
							>
								{fulluser.address.zip_code
									? 'CEP: ' + fulluser.address.zip_code
									: null}
							</div>
							<Input
								onChange={(e) => {
									let cp = fulluser.address
									cp.complement = e.target.value
									setaddresbase(cp)
								}}
								style={{
									backgroundColor: '#EDF1F7',
									borderRadius: '10px',
									margin: '0 auto',
									width: '80vw',
									height: '8vh',
									marginTop: '5vh',
								}}
								placeholder="Complemento (caso tenha)"
							></Input>
							<Input
								onChange={(e) => {
									let cp = fulluser.address
									cp.nome = e.target.value
									setaddresbase(cp)
								}}
								style={{
									backgroundColor: '#EDF1F7',
									borderRadius: '10px',
									margin: '0 auto',
									width: '80vw',
									height: '8vh',
									marginTop: '5vh',
								}}
								placeholder="Nome do Endereço. (Ex. Casa)"
							></Input>

							<Button
								style={{
									marginTop: '20vh',
									height: '8vh',
									width: '80vw',
									borderRadius: '12px',
									backgroundColor: '#FF805D',
								}}
								onClick={async () => {
									await saveanotheraddress(fulluser.address)
									await clearcurrentaddress()
									await history.push('/home')
									// console.log(fulluser)
								}}
							>
								Salvar
							</Button>
							<div
								onClick={() => {
									history.push('/home')
									// console.log('comentando ')
								}}
								style={{ cursor: 'pointer' }}
							>
								<h3
									style={{
										cursor: 'pointer',
										marginTop: '2vh',
										fontSize: '10px',
										color: '#413131',
										textDecoration: 'underline',
									}}
								>
									Não,obrigado
								</h3>
							</div>
						</Row>
					) : (
						<div>
							<Row
								style={{
									alignItems: 'center',
									textAlign: 'center',
									paddingTop: '8vh',
								}}
							>
								<Col
									style={{
										alignItems: 'center',
										textAlign: 'center',
									}}
								>
									<h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>
										Por gentileza, informe o número.
									</h4>

									<Input
										style={{
											backgroundColor: '#EDF1F7',
											borderRadius: '10px',
											margin: '0 auto',
											width: '80vw',
											height: '7vh',
											marginTop: '8vh',
											border: 'none'
										}}
										value={number === -1 ? 'Número não necessário' : number}
										placeholder="Número"
										disabled={number === -1 ? true : false}
										onChange={(e) => {
											setnumber(e.target.value)
											let cp = fulluser.address
											cp.numero = e.target.value
											setaddresbase(cp)
											// console.log(e.target.value)
										}}
									/>
									<div
										style={{
											margin: '0 auto',
											position: 'initial',
											// backgroundColor: '#000',
											fontSize: '10px',
											width: '80vw',
											marginTop: '1vh',
										}}
									>
										<Row style={{ textAlign: 'left' }} xs="12">
											<Col xs="10">Endereço sem número</Col>
											<Col style={{ textAlign: 'right' }} xs="2">
												<Input
													className="form-check-input"
													style={{ marginTop: '-0.5vh' }}
													type="checkbox"
													onChange={() => {}}
													onClick={() => {
														if (number == -1) {
															setnumber('')
														} else {
															setnumber(-1)
														}
													}}
													checked={number === -1 ? true : false}
												/>
											</Col>
										</Row>
									</div>
								</Col>
							</Row>
							<Row
								style={{
									textAlign: 'center',
									display: 'flex',
								}}
							>
								{!isValidAddress && !adresschecked ? (
									<div style={{ flex: '1' }}>
										<Button
											style={{
												marginTop: '10vh',
												height: '8vh',
												width: '80vw',
												borderRadius: '12px',
												backgroundColor: '#FF805D',
												border: 'none'
											}}
											disabled={
												number === -1 || number.length > 0 ? false : true
											}
											onClick={() => {
												setaddresschecked(true)
												number === '69'
													? handleValidAddress(true)
													: handleValidAddress(false)

												// console.log('simcomovc clickou')
											}}
										>
											Confirmar
										</Button>
									</div>
								) : (
									<div
										style={{
											fontWeight: 'bolder',
											borderRadius: '30px 30px 0px 0px',
											backgroundColor: `#FA5C5C`,
											height: '33vh',
											flex: '1',
											position: 'fixed',
											width: '100vw',
											bottom: '0',
											left: "0"
										}}
									>
										<div
											style={{
												fontWeight: 'bolder',
												margin: '2vh 0 3vh 0',
												textAlign: 'center',
												fontSize: '13px',
												color: '#FFF',
											}}
										>
											Ah, que pena.
											<br />
											Ainda não atendemos sua região.
										</div>
										<Button
											style={{
												fontWeight: 'bolder',
												height: '8vh',
												width: '80vw',
												borderRadius: '12px',
												backgroundColor: '#FFF',
												color: '#000',
												border: 'none'
											}}
											onClick={() => {
												history.push('/home')
											}}
										>
											Desejo acessar mesmo assim
										</Button>
										<div
											onClick={() => {
												cleanPage()
											}}
											style={{
												cursor: 'pointer',
												fontWeight: 'bolder',
												textDecoration: 'underline',
												textAlign: 'center',
												fontSize: '13px',
												color: '#FFF',
												marginTop: '3vh',
											}}
										>
											Utilizar outro endereço de entrega
										</div>
									</div>
								)}
							</Row>
						</div>
					)
				) : (
					<Row>
						<Col>
							{/* <Button
								onClick={() => {
									setvalidadd((prev) => {
										return !prev
									})
								}}
							></Button> */}
							<LoadedAddresses
								setselected={setselected}
								loadeds={lodaded}
							></LoadedAddresses>
						</Col>
					</Row>
				)}
			</div>
		</div>
	)
}

export default withRouter(searchAddress)
