import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'
import { Input } from 'reactstrap'
import history from '../../util/history-util'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'

const TempPassword = (props) => {
	const [showpassword, setshowpass] = useState(false)
	return (
		<div
			style={{
				textAlign: 'center',
				position: 'fixed',
				bottom: 0,
				left: 0,
				height: '50vh',
				width: '100vw',
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
					placeholder="Nova senha"
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
					width: '100vw',
					borderRadius: '32px 32px 0px 0px',
					height: '12vh',
					display: 'flex',
					backgroundColor: '#FF805D',
					position: 'fixed',
					bottom: '0'
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
