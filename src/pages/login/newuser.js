import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import { Input } from 'reactstrap'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'

const NewUser = (props) => {
	const [loadingreq, setloading] = useState(false)
	const [showpassword, setshowpass] = useState(false)

	useEffect(() => {
		// console.log('usereffect try')
		// console.log(props.backarrowstate, 'estadoo')
		if (props.backarrowstate === 'newaccount') {
			// console.log('em tese foi')
			props.setbackarrow('main')
		}
	}, [props.backarrowstate])
	return (
		<div
			style={{
				textAlign: 'center',
				flex: 1,
				position: 'fixed',
				bottom: '0',
				height: '70vh',
				width: '100vw',
				borderRadius: '32px',
				backgroundColor: '#FFF',
			}}
		>
			<div
				style={{
					flex: 1,
					marginTop: '3vh',
					fontSize: '14px',
					fontWeight: 'bold',
					color: '#FF805D',
				}}
			>
				Vamos criar sua conta?
				<br /> É rápido! Igual nossa entrega.
			</div>
			<div
				style={{
					flex: 1,
					marginTop: '3vh',
					fontSize: '12px',
					fontWeight: 'bold',
					color: '#000',
				}}
			>
				Preencha os dados abaixo e <br />
				enviariamos uma confirmação via SMS.
			</div>
			<Input
				style={{
					backgroundColor: '#EDF1F7',
					borderRadius: '10px',
					margin: '0 auto',
					width: '80vw',
					height: '7vh',
					marginTop: '3vh',
					border: 'none'
				}}
				placeholder="Seu número de celular"
				onChange={(e) => {
					props.handlestate('celnumber', e.target.value)
				}}
			/>
			<Input
				style={{
					backgroundColor: '#EDF1F7',
					borderRadius: '10px',
					margin: '0 auto',
					width: '80vw',
					height: '7vh',
					marginTop: '1vh',
					border: 'none'
				}}
				placeholder="Seu e-mail"
				onChange={(e) => {
					props.handlestate('email', e.target.value)
				}}
			/>
			<Input
				style={{
					backgroundColor: '#EDF1F7',
					borderRadius: '10px',
					margin: '0 auto',
					width: '80vw',
					height: '7vh',
					marginTop: '1vh',
					border: 'none'
				}}
				placeholder="Seu nome"
				onChange={(e) => {
					props.handlestate('nome', e.target.value)
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
						border: 'none'
					}}
					placeholder="Escolha uma senha"
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
				onClick={async () => {
					try {
						setloading(true)
						// console.log(props.loginstate, 'estadoooooo')
						await props.handlenewuser()
						props.handlepagestate('confirmsms')
						props.setbackarrow('newaccount')
						setloading(false)
					} catch {
						setloading(false)
					}
				}}
				style={{
					cursor: 'pointer',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					width: '100vw',
					borderRadius: '32px 32px 0px 0px',
					height: '12vh',
					display: 'flex',
					backgroundColor: '#FF805D',
					position: 'fixed',
					left: '0',
					bottom: '0'
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
						Cadastrar
					</h4>
				)}
			</div>
		</div>
	)
}
export default withRouter(NewUser)
