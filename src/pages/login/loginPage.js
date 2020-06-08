import React, { useState, useEffect, Fragment } from 'react'
import Loader from 'react-loader-spinner'
import { withRouter } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import LoginBg from './bglogin'
import { useStoreActions, useStore, useStoreState } from 'easy-peasy'
import { Input, Button } from 'reactstrap'

import NumberFormat from 'react-number-format'

import NewUser from './newuser'
import ConfirmSms from './confirmSms'
import ForgotPassword from './forgotPassword'
import TempPassword from './tempPassword'
import ConfirmTempPassword from './confirmTempPassword'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Api from '../../services/Api'
import history from '../../util/history-util'
import TermosAdesao from './termosAdesao'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'

const LoginPage = () => {
	const fulluser = useStoreState((state) => state.user)
	const setauthtoken = useStoreActions((actions) => actions.user.setauthtoken)
	const [backarrowstate, setbackarrowstate] = useState('')
	const [loadingreq, setloading] = useState(false)
	const [showpassword, setshowpass] = useState(false)
	const [logged, setlogged] = useState(false)
	const [loginstate, setloginstate] = useState({
		celnumber: '',
		password: '',
		newpassword: '',
		email: '',
		nome: '',
	})

	const [jsonpagestate, setpagestate] = useState({
		main: true,
		newaccount: false,
		logged: false,
		passwordrecover: false,
		confirmtempassword: false,
		confirmsms: false,
		tempassword: false,
		termos: false,
	})
	useEffect(() => {
		console.log(loginstate)
	}, [JSON.stringify(loginstate)])
	useEffect(() => {
		if (logged) {
			console.log('já logado!')
			history.push('/home')
		}
	}, [logged])
	useEffect(() => {
		if (jsonpagestate.main) {
			setbackarrowstate('')
		}
	}, [JSON.stringify(jsonpagestate)])

	useEffect(() => {
		console.log('montou!')

		try {
			let token = localStorage.getItem('authtoken')
			// console.log(token)
			// console.log(fulluser)
			let decoded = jwt.decode(token)
			// console.log(decoded)
			if (decoded) {
				if (decoded.exp) {
					history.push('/profile')
				}
			}
		} catch (e) {
			console.log(e, fulluser.authtoken, 'erro que foi pego')
		}
	}, [])

	let handlepostlogin = async () => {
		await setloading(true)
		try {
			const results = await Api.post(
				'/auth/login/app',
				{
					company_id: 2,
					phone: loginstate.celnumber,
					password: loginstate.password,
				},

				{
					headers: {
						'content-type': 'application/json',
					},
				}
			)
			// console.log(results, 'resultado logiinnnn')
			if (results.data.data.access_token) {
				await localStorage.setItem('authtoken', results.data.data.access_token)
				await setauthtoken(results.data.data.access_token)
				// await console.log(JSON.stringify(fulluser))
				await setlogged(true)
				await setpagestate('main')
			}
		} catch (e) {
			await setloading(false)
		}
		await setloading(false)
	}
	let handlenewuserpost = async () => {
		console.log(fulluser)
		const results = await Api.post('/customers', {
			company_id: 2,
			name: loginstate.nome,
			email: loginstate.email,
			phone: loginstate.celnumber,
			password: loginstate.password,
			password_confirmation: loginstate.password,
			addresses: [
				{
					description: 'Casa',
					complement: 'Apto 102',
					zip_code: '91712150',
					address: 'Rua Primordial 103 - Gloria - Porto Alegre - RS',
					latitude: '-30.09045170',
					longitude: '-51.1067240',
				},
			],
		})
		// console.log(results, 'resultado do nosso amigo')
	}
	let handlejsonpage = (str) => {
		// console.log(str, jsonpagestate[str])
		setpagestate((prev) => {
			let cp = {
				main: false,
				newaccount: false,
				logged: false,
				passwordrecover: false,
				confirmtempassword: false,
				confirmsms: false,
				tempassword: false,
				termos: false,
			}
			prev = cp

			cp[str] = true
			return cp
		})
	}
	let handleloginstate = (str, value) => {
		setloginstate((prev) => {
			let cp = prev
			prev[str] = value
			// console.log(prev)
			return cp
		})
	}
	let triestologin = async () => {
		if (loginstate.password === 'temp') {
			handlejsonpage('tempassword')
			setbackarrowstate('main')
		}
	}

	let handlearrowbackclick = () => {
		handlejsonpage(backarrowstate)
	}
	return (
		<Fragment>
			{jsonpagestate.termos ? (
				<TermosAdesao handlepagestate={handlejsonpage} />
			) : (
				<LoginBg>
					{/* {backarrowstate} */}
					{backarrowstate && (
						<Button
							onClick={() => {
								handlearrowbackclick()
							}}
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								textAlign: 'center',
								borderStyle: 'none',
								boxShadow: '0 0 0',
								position: 'absolute',
								left: '3vw',
								top: '3vh',
								backgroundColor: '#FF805D',
								borderRadius: '12px',
								height: '5vh',
								width: '5vh',
							}}
						>
							<ChevronLeftIcon
								style={{ color: '#FFFF', height: '3vh', width: 'auto' }}
							/>
						</Button>
					)}
					{jsonpagestate.confirmsms && (
						<div
							style={{
								alignContent: 'center',
								display: 'flex',
								justifyContent: 'center',
								flexDirection: 'row',
								marginTop: '60vh',
							}}
						>
							<ConfirmSms
								handlestate={handleloginstate}
								loginstate={loginstate}
								handlepagestate={handlejsonpage}
								setbackarrow={setbackarrowstate}
								backarrowstate={backarrowstate}
							/>
						</div>
					)}
					{jsonpagestate.passwordrecover && (
						<div
							style={{
								alignContent: 'center',
								display: 'flex',
								justifyContent: 'center',
								flexDirection: 'row',
								marginTop: '60vh',
							}}
						>
							<ForgotPassword
								handlestate={handleloginstate}
								loginstate={loginstate}
								handlepagestate={handlejsonpage}
								setbackarrow={setbackarrowstate}
								backarrowstate={backarrowstate}
							/>
						</div>
					)}
					{jsonpagestate.tempassword && (
						<div
							style={{
								alignContent: 'center',
								display: 'flex',
								justifyContent: 'center',
								flexDirection: 'row',
								marginTop: '60vh',
							}}
						>
							<TempPassword
								handlestate={handleloginstate}
								loginstate={loginstate}
								handlepagestate={handlejsonpage}
								setbackarrow={setbackarrowstate}
								backarrowstate={backarrowstate}
							/>
						</div>
					)}
					{jsonpagestate.confirmtempassword && (
						<div
							style={{
								alignContent: 'center',
								display: 'flex',
								justifyContent: 'center',
								flexDirection: 'row',
								marginTop: '75vh',
							}}
						>
							<ConfirmTempPassword
								handlestate={handleloginstate}
								loginstate={loginstate}
								handlepagestate={handlejsonpage}
								setbackarrow={setbackarrowstate}
								backarrowstate={backarrowstate}
							/>
						</div>
					)}

					{jsonpagestate.newaccount && (
						<div
							style={{
								alignContent: 'center',
								display: 'flex',
								justifyContent: 'center',
								flexDirection: 'row',
								marginTop: '40vh',
							}}
						>
							<NewUser
								handlestate={handleloginstate}
								loginstate={loginstate}
								handlepagestate={handlejsonpage}
								setbackarrow={setbackarrowstate}
								backarrowstate={backarrowstate}
								handlenewuser={handlenewuserpost}
							/>
						</div>
					)}
					{jsonpagestate.main && (
						<div
							style={{
								position: 'relative',
								display: 'flex',
								flexDirection: 'row',
							}}
						>
							<div
								style={{
									textAlign: 'center',
									borderRadius: '32px',
									marginTop: '50vh',
									top: '50vh',
									width: '100vw',
									backgroundColor: '#fff',
									height: '50vh',
									display: 'flex',
    								flexDirection: 'column',
    								justifyContent: 'space-between'
								}}
							>
								<h3
									style={{
										marginTop: '3vh',
										fontSize: '14px',
										fontWeight: 'bold',
										color: '#FF805D',
									}}
								>
									Realize seu login e<br /> aproveite nosso Aplicativo.
								</h3>
								{/* <Input
									style={{
										backgroundColor: '#EDF1F7',
										borderRadius: '12px',
										margin: '3vh auto 0',
										width: '80vw',
										height: '7vh',
										border: 'none',
									}}
									placeholder="Seu celular"
									onChange={(e) => {
										handleloginstate('celnumber', e.target.value)
										// console.log(e.target.value)
									}}
								/> */}
								<NumberFormat
									style={{
										backgroundColor: '#EDF1F7',
										borderRadius: '12px',
										margin: '3vh auto 0',
										width: '80vw',
										height: '7vh',
										border: 'none',
									}}
									className="form-control"
									value={loginstate.celnumber}
									placeholder="Seu celular"
									format="(##) # ####-####"
									mask="_"
									onChange={async (e) => {
										let real = e.target.value
										real = real.split('.').join('')
										real = real.split('/').join('')
										real = real.split('-').join('')
										real = real.split('(').join('')
										real = real.split(')').join('')
										real = real.split(' ').join('')
										real = real.split('X').join('')
										await handleloginstate('celnumber', real)
									}}
								/>
								<div style= 
									{{
										display: 'flex',
										alignItems: 'center',
										backgroundColor: '#EDF1F7',
										borderRadius: '12px',
										margin: '1vh auto 0',
										width: '80vw',
										height: '7vh',
									}}
								>
									<Input
										type={showpassword ? 'text' : 'password'}
										style={{
											backgroundColor: '#EDF1F7',
											border: 'none',
											fontSize: '16px',
											borderRadius: '12px',
											height: '7vh'
										}}
										placeholder="Senha"
										onChange={(e) => {
											handleloginstate('password', e.target.value)
										}}
									/>
									<div
										style={{marginRight: '2vw'}}
										onClick={() => {
											setshowpass(() => {
												console.log(showpassword)
												return !showpassword
											})
										}}
									>
										{showpassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
									</div>
								</div>
								<div
									onClick={() => {
										handlejsonpage('passwordrecover')
										setbackarrowstate('main')
									}}
									style={{
										cursor: 'pointer',
										justifyContent: 'flex-end',
										display: 'flex',
										flexDirection: 'row',
										color: '#413131',
										marginTop: '1vh',
										fontSize: '10px',
										width: '90vw',
									}}
								>
									Esqueci minha senha
								</div>
								<div
									onClick={() => {
										handlejsonpage('newaccount')
										setbackarrowstate('main')
									}}
									style={{
										cursor: 'poniter',
										justifyContent: 'center',
										display: 'flex',
										flexDirection: 'row',
										color: '#FF805D',
										fontSize: '12px',
										fontWeight: 'bold',
									}}
								>
									<span>Ainda não tem conta?</span>
									<span
										style={{
											textDecoration: 'underline',
											marginLeft: '0.3em',
										}}
									>
										Crie agora mesmo!
									</span>
								</div>
								<div>
								<div
									onClick={() => {
										triestologin()
										handlepostlogin()
									}}
									style={{
										cursor: 'poniter',
										alignItems: 'center',
										justifyContent: 'center',
										flex: 1,
										width: '100vw',
										borderRadius: '32px 32px 0px 0px',
										height: '12vh',
										display: 'flex',
										backgroundColor: '#FF805D',
										position: 'relative',
										bottom: '0'
									}}
								>
									{loadingreq ? (
										<Loader
											type="Oval"
											color={'#FFF'}
											height="5vh"
											width="5vh"
										/>
									) : (
										<h4
											style={{
												color: '#FFF',
												fontWeight: 'bold',
												fontSize: '15px',
											}}
										>
											Entrar
										</h4>
									)}
								</div>
								</div>
							</div>
						</div>
					)}
				</LoginBg>
			)}
		</Fragment>
	)
}
export default withRouter(LoginPage)
