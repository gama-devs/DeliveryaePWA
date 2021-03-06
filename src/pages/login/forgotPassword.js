import React, { useRef, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Input } from 'reactstrap'
import NumberFormat from 'react-number-format'
const ForgotPassword = (props) => {
	let sendrecoverpass = () => {
		props.setbackarrow('')
		props.handlepagestate('main')
	}
	return (
		<div
			style={{
				textAlign: 'center',
				width: '100vw',
				position: 'fixed',
				bottom: '0',
				left: '0',
				height: '45vh',
				borderRadius: '32px',
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
			<NumberFormat
				style={{
					backgroundColor: '#EDF1F7',
					borderRadius: '10px',
					margin: '0 auto',
					width: '80vw',
					height: '7vh',
					marginTop: '3vh',
					border: 'none',
				}}
				className="form-control"
				placeholder="Seu número de celular"
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
					console.log(real)
				}}
			/>
			{/* <Input
				style={{
					backgroundColor: '#EDF1F7',
					borderRadius: '10px',
					margin: '0 auto',
					width: '80vw',
					height: '7vh',
					marginTop: '3vh',
					border: 'none',
					fontSize: '16px'
				}}
				placeholder="Seu número de celular"
				onChange={(e) => {
					console.log(e.target.value)
				}}
			/> */}

			<div
				onClick={() => {
					sendrecoverpass()
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
					position: 'absolute',
					bottom: '0',
					left: '0',
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
