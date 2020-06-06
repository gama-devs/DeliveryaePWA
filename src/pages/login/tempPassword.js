import React from 'react'
import { withRouter } from 'react-router-dom'
import { Input } from 'reactstrap'
import history from '../../util/history-util'
const TempPassword = (props) => {
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
				Você acessou sua conta
				<br />
				com uma senha provisória.
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
					Para sua maior segurança,
					<br /> cadastre uma nova senha
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
				placeholder="Nova Senha"
				onChange={(e) => {
					console.log(e.target.value)
				}}
			/>
			<div
				onClick={() => {
					history.push('/home')
				}}
				style={{
					cursor: 'pointer',
					textDecoration: 'underline',
					justifyContent: 'center',
					display: 'flex',
					flexDirection: 'row',
					color: '#000',
					fontSize: '12px',
					marginTop: '4vh',
				}}
			>
				<div>Desejo cadastrar depois</div>
			</div>
			<div
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
					onClick={() => {
						props.handlepagestate('confirmtempassword')
						props.setbackarrow('main')
					}}
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
export default withRouter(TempPassword)
