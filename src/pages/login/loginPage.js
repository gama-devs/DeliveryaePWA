import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import LoginBg from './bglogin'
import { Input, Button } from 'reactstrap'
import NewUser from './newuser'
import ConfirmSms from './confirmSms'
import ForgotPassword from './forgotPassword'
import TempPassword from './tempPassword'
import ConfirmTempPassword from './confirmTempPassword'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
const LoginPage = () => {
	const [backarrowstate, setbackarrowstate] = useState('')
	let arrowbackfunction = (str) => {}
	return (
		<LoginBg>
			{backarrowstate && (
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<Button
						onClick={() => {
							console.log('sim')
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
			{/* <div
				style={{
					alignContent: 'center',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'row',
					marginTop: '60vh',
				}}
			>
				<ConfirmSms />
			</div> */}
			{/* <div
				style={{
					alignContent: 'center',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'row',
					marginTop: '60vh',
				}}
			>
				<ForgotPassword />
			</div> */}
			{/* <div
				style={{
					alignContent: 'center',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'row',
					marginTop: '60vh',
				}}
			>
				<TempPassword />
			</div> */}
			<div
				style={{
					alignContent: 'center',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'row',
					marginTop: '75vh',
				}}
			>
				<ConfirmTempPassword />
			</div>

			{/* <div
				style={{
					alignContent: 'center',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'row',
					marginTop: '40vh',
				}}
			>
				<NewUser />
			</div>
			{/* <div
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
							console.log(e.target.value)
						}}
					/>
					<Input
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
							console.log(e)
						}}
					/>
					<div
						style={{
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
						style={{
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
						style={{
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
						<h4
							style={{
								color: '#FFF',
								fontWeight: 'bold',
								fontSize: '15px',
							}}
						>
							Entrar
						</h4>
					</div>
				</div>
			</div> */}
		</LoginBg>
	)
}
export default withRouter(LoginPage)
