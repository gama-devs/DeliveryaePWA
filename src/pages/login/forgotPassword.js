import React, { useRef, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Input } from 'reactstrap'
const ForgotPassword = (props) => {
	let sendrecoverpass = () => {
		props.setbackarrow('')
		props.handlepagestate('main')
	}
	return (
		<div
			style={{
				textAlign: 'center',
				flex: 1,
				top: 0,
				left: 0,
				position: 'relative',
				height: '40vh',
				borderRadius: '20px',
				backgroundColor: '#fff',
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
				Esqueceu sua senha?
				<br /> Não tem problema!
			</div>
			<div
				style={{
					justifyContent: 'center',
					display: 'flex',
					flexDirection: 'row',
					color: '#000',
					fontSize: '12px',
					marginTop: '4vh',
				}}
			>
				<div>
					Informe seu celular cadastrado <br />
					para enviarmos uma senha provisória.
				</div>
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

			<div
				onClick={() => {
					sendrecoverpass()
				}}
				style={{
					cursor: 'pointer',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					flex: 1,
					width: '100vw',
					borderRadius: '32px 32px 0px 0px',
					marginTop: '7vh',
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
					Enviar
				</h4>
			</div>
		</div>
	)
}
export default withRouter(ForgotPassword)
