import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Input } from 'reactstrap'
const NewUser = (props) => {
	useEffect(() => {
		console.log('usereffect try')
		console.log(props.backarrowstate, 'estadoo')
		if (props.backarrowstate === 'newaccount') {
			console.log('em tese foi')
			props.setbackarrow('main')
		}
	}, [props.backarrowstate])
	return (
		<div
			style={{
				textAlign: 'center',
				flex: 1,
				top: 0,
				left: 0,
				position: 'relative',
				height: '60vh',
				borderRadius: '20px',
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
					height: '8vh',
					marginTop: '3vh',
				}}
				placeholder="Seu número de celular"
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
				placeholder="Seu e-mail"
				onChange={(e) => {
					console.log(e)
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
				placeholder="Seu nome"
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
				placeholder="Escolha uma senha"
				onChange={(e) => {
					console.log(e)
				}}
			/>
			<div
				onClick={() => {
					props.handlepagestate('confirmsms')
					props.setbackarrow('newaccount')
				}}
				style={{
					cursor: 'pointer',
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
					Cadastrar
				</h4>
			</div>
		</div>
	)
}
export default withRouter(NewUser)
