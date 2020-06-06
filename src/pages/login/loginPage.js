import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'
import { withRouter } from 'react-router-dom'
import LoginBg from './bglogin'
import { useStoreActions, useStore } from 'easy-peasy'
import { Input, Button } from 'reactstrap'
import NewUser from './newuser'
import ConfirmSms from './confirmSms'
import ForgotPassword from './forgotPassword'
import TempPassword from './tempPassword'
import ConfirmTempPassword from './confirmTempPassword'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Api from '../../services/Api'
import history from '../../util/history-util'
const LoginPage = () => {
	const fulluser = useStore((state) => state.user)
	const setauthtoken = useStoreActions((state) => state.user.setauthtoken)
	const [backarrowstate, setbackarrowstate] = useState('')
	const [loadingreq, setloading] = useState(false)
	const [showpassword, setshowpass] = useState(false)
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
	})
	useEffect(() => {
		if (jsonpagestate.main) {
			setbackarrowstate('')
		}
	}, [jsonpagestate])
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
			console.log(results, 'resultado logiinnnn')
			if (results.data.data.access_token) {
				localStorage.setItem('authtoken', results.data.data.access_token)
				setauthtoken(results.data.data.access_token)
				console.log(JSON.stringify(fulluser))
				history.push('/home')
			}
		} catch (e) {
			await setloading(false)
		}
		await setloading(false)
	}
	let handlenewuserpost = async () => {
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
		console.log(results, 'resultado do nosso amigo')
	}
	let handlejsonpage = (str) => {
		console.log(str, jsonpagestate[str])
		setpagestate((prev) => {
			let cp = {
				main: false,
				newaccount: false,
				logged: false,
				passwordrecover: false,
				confirmtempassword: false,
				confirmsms: false,
				tempassword: false,
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
			console.log(prev)
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
		<LoginBg>
			{backarrowstate}
			{backarrowstate && (
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<Button
						onClick={() => {
							handlearrowbackclick()
						}}
						style={{
							marginLeft: '3vw',
							marginTop: '3vh',
							borderStyle: 'none',
							backgroundColor: '#FF805D',
							borderRadius: '8px',
							height: '7vh',
							width: '7vh',
						}}
					>
						<ArrowBackIosIcon style={{ color: '#FFFF' }} />
					</Button>
				</div>
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
							borderRadius: '20px',
							marginTop: '50vh',
							top: '50vh',
							width: '100vw',
							backgroundColor: '#fff',
							height: '50vh',
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
						<Input
							style={{
								backgroundColor: '#EDF1F7',
								borderRadius: '10px',
								margin: '0 auto',
								width: '80vw',
								height: '8vh',
								marginTop: '3vh',
							}}
							placeholder="Seu celular"
							onChange={(e) => {
								handleloginstate('celnumber', e.target.value)
								console.log(e.target.value)
							}}
						/>
						<Input
							type={showpassword ? 'text' : 'password'}
							style={{
								backgroundColor: '#EDF1F7',
								borderRadius: '10px',
								margin: '0 auto',
								width: '80vw',
								height: '8vh',
								marginTop: '1vh',
							}}
							placeholder="Senha"
							onChange={(e) => {
								handleloginstate('password', e.target.value)
							}}
						/>
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
								marginTop: '4vh',
								fontWeight: 'bold',
							}}
						>
							<div> {'Ainda não tem conta?'}</div>
							<div> {'Crie agora mesmo!'}</div>
						</div>
						<div
							onClick={() => {
								handlepostlogin()
							}}
							style={{
								cursor: 'poniter',
								alignItems: 'center',
								justifyContent: 'center',
								textAlign: 'center',
								flex: 1,
								width: '100vw',
								borderRadius: '32px 32px 0px 0px',
								marginTop: '10vh',
								height: '12vh',
								display: 'flex',
								backgroundColor: '#FF805D',
							}}
						>
							{loadingreq ? (
								<Loader type="Oval" color={'#FFF'} height="5vh" width="5vh" />
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
			)}
		</LoginBg>
	)
}
export default withRouter(LoginPage)
